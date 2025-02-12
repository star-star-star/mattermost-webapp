// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {OverlayTrigger, Tooltip} from 'react-bootstrap';

import {Posts} from 'mattermost-redux/constants';
import * as ReduxPostUtils from 'mattermost-redux/utils/post_utils';

import * as PostUtils from 'utils/post_utils.jsx';
import * as Utils from 'utils/utils.jsx';
import Constants from 'utils/constants.jsx';
import CommentIcon from 'components/common/comment_icon.jsx';
import DotMenu from 'components/dot_menu';
import PostFlagIcon from 'components/post_view/post_flag_icon';
import PostReaction from 'components/post_view/post_reaction';
import PostTime from 'components/post_view/post_time';
import InfoSmallIcon from 'components/widgets/icons/info_small_icon';

export default class PostInfo extends React.PureComponent {
    static propTypes = {

        /*
         * The post to render the info for
         */
        post: PropTypes.object.isRequired,

        /*
         * The id of the team which belongs the post
         */
        teamId: PropTypes.string,

        /*
         * Function called when the comment icon is clicked
         */
        handleCommentClick: PropTypes.func.isRequired,

        /*
         * Function called when the card icon is clicked
         */
        handleCardClick: PropTypes.func.isRequired,

        /*
         * Funciton called when the post options dropdown is opened
         */
        handleDropdownOpened: PropTypes.func.isRequired,

        /*
         * Set to mark the post as flagged
         */
        isFlagged: PropTypes.bool,

        /*
         * Set to mark the post as open the extra info in the rhs
         */
        isCardOpen: PropTypes.bool,

        /*
         * The number of replies in the same thread as this post
         */
        replyCount: PropTypes.number,

        /**
         * Set to indicate that this is previous post was not a reply to the same thread
         */
        isFirstReply: PropTypes.bool,

        /**
         * Set to render in mobile view
         */
        isMobile: PropTypes.bool,

        /**
         * Set to render in compact view
         */
        compactDisplay: PropTypes.bool,

        /**
         * Set to mark post as being hovered over
         */
        hover: PropTypes.bool.isRequired,

        /**
         * Set to render the post time when not hovering
         */
        showTimeWithoutHover: PropTypes.bool.isRequired,

        /**
         * Whether to show the emoji picker.
         */
        enableEmojiPicker: PropTypes.bool.isRequired,

        /**
         * Set not to allow edits on post
         */
        isReadOnly: PropTypes.bool,

        actions: PropTypes.shape({

            /*
             * Function to remove the post
             */
            removePost: PropTypes.func.isRequired,
        }).isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            showEmojiPicker: false,
        };
    }

    toggleEmojiPicker = () => {
        const showEmojiPicker = !this.state.showEmojiPicker;

        this.setState({showEmojiPicker});
        this.props.handleDropdownOpened(showEmojiPicker || this.state.showDotMenu);
    };

    removePost = () => {
        this.props.actions.removePost(this.props.post);
    };

    createRemovePostButton = () => {
        return (
            <button
                className='post__remove theme color--link style--none'
                type='button'
                onClick={this.removePost}
            >
                {'×'}
            </button>
        );
    };

    handleDotMenuOpened = (open) => {
        this.setState({showDotMenu: open});
        this.props.handleDropdownOpened(open || this.state.showEmojiPicker);
    };

    getDotMenu = () => {
        return this.refs.dotMenu;
    };

    buildOptions = (post, isSystemMessage, fromAutoResponder) => {
        if (!PostUtils.shouldShowDotMenu(post)) {
            return null;
        }

        const {isMobile, isReadOnly} = this.props;
        const hover = this.props.hover || this.state.showEmojiPicker || this.state.showDotMenu;

        const showCommentIcon = fromAutoResponder ||
        (!isSystemMessage && (isMobile || hover || (!post.root_id && Boolean(this.props.replyCount)) || this.props.isFirstReply));
        const commentIconExtraClass = isMobile ? '' : 'pull-right';
        let commentIcon;
        if (showCommentIcon) {
            commentIcon = (
                <CommentIcon
                    handleCommentClick={this.props.handleCommentClick}
                    commentCount={this.props.replyCount}
                    postId={post.id}
                    extraClass={commentIconExtraClass}
                />
            );
        }

        const showReactionIcon = !isSystemMessage && hover && !isReadOnly && this.props.enableEmojiPicker;
        let postReaction;
        if (showReactionIcon) {
            postReaction = (
                <PostReaction
                    channelId={post.channel_id}
                    postId={post.id}
                    teamId={this.props.teamId}
                    getDotMenuRef={this.getDotMenu}
                    showEmojiPicker={this.state.showEmojiPicker}
                    toggleEmojiPicker={this.toggleEmojiPicker}
                />
            );
        }

        const showDotMenuIcon = isMobile || hover;
        let dotMenu;
        if (showDotMenuIcon) {
            dotMenu = (
                <DotMenu
                    post={post}
                    commentCount={this.props.replyCount}
                    isFlagged={this.props.isFlagged}
                    handleCommentClick={this.props.handleCommentClick}
                    handleDropdownOpened={this.handleDotMenuOpened}
                    handleAddReactionClick={this.toggleEmojiPicker}
                    isReadOnly={isReadOnly}
                    enableEmojiPicker={this.props.enableEmojiPicker}
                />
            );
        }

        return (
            <div
                ref='dotMenu'
                className={'col col__reply'}
            >
                {dotMenu}
                {postReaction}
                {commentIcon}
            </div>
        );
    };

    render() {
        const post = this.props.post;

        const isEphemeral = Utils.isPostEphemeral(post);
        const isSystemMessage = PostUtils.isSystemMessage(post);
        const fromAutoResponder = PostUtils.fromAutoResponder(post);

        const showFlagIcon = !isEphemeral && !post.failed && !isSystemMessage && (this.props.hover || this.props.isFlagged);
        let postFlagIcon;
        if (showFlagIcon) {
            postFlagIcon = (
                <PostFlagIcon
                    postId={post.id}
                    isFlagged={this.props.isFlagged}
                    isEphemeral={isEphemeral}
                />
            );
        }

        let postInfoIcon;
        if (post.props && post.props.card) {
            postInfoIcon = (
                <OverlayTrigger
                    delayShow={Constants.OVERLAY_TIME_DELAY}
                    placement='top'
                    overlay={
                        <Tooltip>
                            <FormattedMessage
                                id='post_info.info.view_additional_info'
                                defaultMessage='View additional info'
                            />
                        </Tooltip>
                    }
                >
                    <button
                        className={'card-icon__container icon--show style--none ' + (this.props.isCardOpen ? 'active' : '')}
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.handleCardClick(this.props.post);
                        }}
                    >
                        <InfoSmallIcon
                            className='icon icon__info'
                            aria-hidden='true'
                        />
                    </button>
                </OverlayTrigger>
            );
        }

        let options;
        if (isEphemeral) {
            options = (
                <div className='col col__remove'>
                    {this.createRemovePostButton()}
                </div>
            );
        } else if (!post.failed) {
            options = this.buildOptions(post, isSystemMessage, fromAutoResponder);
        }

        let visibleMessage;
        if (isEphemeral && !this.props.compactDisplay && post.state !== Posts.POST_DELETED) {
            visibleMessage = (
                <span className='post__visibility'>
                    <FormattedMessage
                        id='post_info.message.visible'
                        defaultMessage='(Only visible to you)'
                    />
                </span>
            );
        }

        let pinnedBadge;
        if (post.is_pinned) {
            pinnedBadge = (
                <span className='post__pinned-badge'>
                    <FormattedMessage
                        id='post_info.pinned'
                        defaultMessage='Pinned'
                    />
                </span>
            );
        }

        const showPostTime = this.props.hover || this.props.showTimeWithoutHover;
        let postTime;
        if (showPostTime) {
            // timestamp should not be a permalink if the post has been deleted, is ephemeral message, is pending, or is combined activity
            const isPermalink = !(isEphemeral || Posts.POST_DELETED === post.state || ReduxPostUtils.isPostPendingOrFailed(post) || post.type === Posts.POST_TYPES.COMBINED_USER_ACTIVITY);

            postTime = (
                <PostTime
                    isPermalink={isPermalink}
                    eventTime={post.create_at}
                    postId={post.id}
                />
            );
        }

        return (
            <div className='post__header--info'>
                <div className='col'>
                    {postTime}
                    {pinnedBadge}
                    {postInfoIcon}
                    {postFlagIcon}
                    {visibleMessage}
                </div>
                {options}
            </div>
        );
    }
}
