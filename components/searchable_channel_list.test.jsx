// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import SearchableChannelList from 'components/searchable_channel_list.jsx';

describe('components/SearchableChannelList', () => {
    const baseProps = {
        channels: [],
        isSearch: false,
        channelsPerPage: 10,
        nextPage: () => {}, // eslint-disable-line no-empty-function
        search: () => {}, // eslint-disable-line no-empty-function
        handleJoin: () => {}, // eslint-disable-line no-empty-function
        loading: true,
    };

    test('should match init snapshot', () => {
        const wrapper = shallow(
            <SearchableChannelList {...baseProps}/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
