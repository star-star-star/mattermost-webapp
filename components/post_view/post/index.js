// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {Posts} from 'mattermost-redux/constants';
import {getPost, makeIsPostCommentMention} from 'mattermost-redux/selectors/entities/posts';
import {get} from 'mattermost-redux/selectors/entities/preferences';
import {getCurrentUserId} from 'mattermost-redux/selectors/entities/users';
import {isSystemMessage} from 'mattermost-redux/utils/post_utils';

import {selectPost, selectPostCard} from 'actions/views/rhs';
import {Preferences} from 'utils/constants.jsx';
import {makeCreateAriaLabelForPost} from 'utils/post_utils.jsx';

import Post from './post.jsx';

// isFirstReply returns true when the given post a comment that isn't part of the same thread as the previous post.
export function isFirstReply(post, previousPost) {
    if (post.root_id) {
        if (previousPost) {
            // Returns true as long as the previous post is part of a different thread
            return post.root_id !== previousPost.id && post.root_id !== previousPost.root_id;
        }

        // The previous post is not a real post
        return true;
    }

    // This post is not a reply
    return false;
}

function makeMapStateToProps() {
    const isPostCommentMention = makeIsPostCommentMention();
    const createAriaLabelForPost = makeCreateAriaLabelForPost();

    return (state, ownProps) => {
        const post = ownProps.post || getPost(state, ownProps.postId);
        let replyCount = post.reply_count;
        if (post.root_id !== '') {
            const rootPost = getPost(state, post.root_id);
            replyCount = rootPost ? rootPost.reply_count : 0;
        }
        let previousPost = null;
        if (ownProps.previousPostId) {
            previousPost = getPost(state, ownProps.previousPostId);
        }

        let consecutivePostByUser = false;
        let previousPostIsComment = false;

        if (previousPost) {
            consecutivePostByUser = post.user_id === previousPost.user_id && // The post is by the same user
                post.create_at - previousPost.create_at <= Posts.POST_COLLAPSE_TIMEOUT && // And was within a short time period
                !(post.props && post.props.from_webhook) && !(previousPost.props && previousPost.props.from_webhook) && // And neither is from a webhook
                !isSystemMessage(post) && !isSystemMessage(previousPost); // And neither is a system message

            previousPostIsComment = Boolean(previousPost.root_id);
        }

        return {
            post,
            createAriaLabel: createAriaLabelForPost(state, post),
            currentUserId: getCurrentUserId(state),
            isFirstReply: isFirstReply(post, previousPost),
            consecutivePostByUser,
            previousPostIsComment,
            replyCount,
            isCommentMention: isPostCommentMention(state, post.id),
            center: get(state, Preferences.CATEGORY_DISPLAY_SETTINGS, Preferences.CHANNEL_DISPLAY_MODE, Preferences.CHANNEL_DISPLAY_MODE_DEFAULT) === Preferences.CHANNEL_DISPLAY_MODE_CENTERED,
            compactDisplay: get(state, Preferences.CATEGORY_DISPLAY_SETTINGS, Preferences.MESSAGE_DISPLAY, Preferences.MESSAGE_DISPLAY_DEFAULT) === Preferences.MESSAGE_DISPLAY_COMPACT,
        };
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            selectPost,
            selectPostCard,
        }, dispatch),
    };
}

export default connect(makeMapStateToProps, mapDispatchToProps)(Post);
