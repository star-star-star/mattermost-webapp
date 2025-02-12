// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import {NotificationLevels, NotificationSections} from 'utils/constants.jsx';

import ExpandView from 'components/channel_notifications_modal/components/expand_view.jsx';

describe('components/channel_notifications_modal/ExpandView', () => {
    const baseProps = {
        section: NotificationSections.DESKTOP,
        memberNotifyLevel: NotificationLevels.ALL,
        globalNotifyLevel: NotificationLevels.DEFAULT,
        serverError: '',
        onChange: () => {}, //eslint-disable-line no-empty-function
        onCollapseSection: () => {}, //eslint-disable-line no-empty-function
        onSubmit: () => {}, //eslint-disable-line no-empty-function
    };

    test('should match snapshot, DESKTOP on expanded view', () => {
        const wrapper = shallow(
            <ExpandView {...baseProps}/>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot, PUSH on expanded view', () => {
        const props = {...baseProps, section: NotificationSections.PUSH};
        const wrapper = shallow(
            <ExpandView {...props}/>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot, MARK_UNREAD on expanded view', () => {
        const props = {...baseProps, section: NotificationSections.MARK_UNREAD, globalNotifyLevel: null};
        const wrapper = shallow(
            <ExpandView {...props}/>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
