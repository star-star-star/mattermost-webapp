// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import GroupProfile from 'components/admin_console/group_settings/group_details/group_profile.jsx';

describe('components/admin_console/group_settings/group_details/GroupProfile', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<GroupProfile name='Test'/>);
        expect(wrapper).toMatchSnapshot();
    });
});
