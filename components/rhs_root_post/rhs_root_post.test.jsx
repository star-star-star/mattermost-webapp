// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {Posts} from 'mattermost-redux/constants';

import {shallowWithIntl} from 'tests/helpers/intl-test-helper.jsx';

import RhsRootPost from 'components/rhs_root_post/rhs_root_post.jsx';

jest.mock('utils/post_utils.jsx', () => ({
    isEdited: jest.fn().mockReturnValue(true),
    isSystemMessage: jest.fn().mockReturnValue(false),
    fromAutoResponder: jest.fn().mockReturnValue(false),
}));

describe('components/RhsRootPost', () => {
    let post;
    let defaultProps;

    beforeEach(() => {
        post = {
            channel_id: 'channel_id',
            create_at: 1502715365009,
            delete_at: 0,
            edit_at: 1502715372443,
            id: 'id',
            is_pinned: false,
            message: 'post message',
            original_id: '',
            parent_id: '',
            pending_post_id: '',
            props: {},
            root_id: '',
            type: '',
            update_at: 1502715372443,
            user_id: 'user_id',
        };

        defaultProps = {
            post,
            teamId: 'team_id',
            currentUserId: 'user_id',
            compactDisplay: true,
            commentCount: 0,
            author: 'Author',
            reactions: {},
            isFlagged: false,
            isBusy: false,
            previewCollapsed: '',
            previewEnabled: false,
            isEmbedVisible: false,
            enableEmojiPicker: true,
            enablePostUsernameOverride: false,
            isReadOnly: false,
            pluginPostTypes: {},
            channelIsArchived: false,
            channelType: 'O',
            channelDisplayName: 'Test',
            handleCardClick: jest.fn(),
        };
    });

    test('should match snapshot', () => {
        const wrapper = shallowWithIntl(
            <RhsRootPost {...defaultProps}/>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot when flagged', () => {
        const props = {
            ...defaultProps,
            isFlagged: true,
        };
        const wrapper = shallowWithIntl(
            <RhsRootPost {...props}/>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot on deleted post', () => {
        const props = {
            ...defaultProps,
            post: {
                ...defaultProps.post,
                state: Posts.POST_DELETED,
            },
        };
        const wrapper = shallowWithIntl(
            <RhsRootPost {...props}/>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot on flagged, deleted post', () => {
        const props = {
            ...defaultProps,
            post: {
                ...defaultProps.post,
                state: Posts.POST_DELETED,
                isFlagged: true,
            },
        };
        const wrapper = shallowWithIntl(
            <RhsRootPost {...props}/>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
