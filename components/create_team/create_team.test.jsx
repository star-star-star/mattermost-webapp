// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {shallowWithIntl} from 'tests/helpers/intl-test-helper';

import CreateTeam from 'components/create_team/create_team.jsx';

jest.mock('components/announcement_bar');
jest.mock('components/common/back_button.jsx');
jest.mock('react-router-dom');

describe('/components/create_team', () => {
    const defaultProps = {
        currentChannel: {name: 'test-channel'},
        currentTeam: {name: 'test-team'},
        siteName: 'Neo Ai',
        customBrand: true,
        enableCustomBrand: true,
        customDescriptionText: 'Welcome to our custom branded site!',
        match: {
            url: 'http://localhost:8065/create_team',
        },
        history: {
            push: jest.fn(),
        },
    };

    test('should match snapshot', () => {
        const wrapper = shallowWithIntl(<CreateTeam {...defaultProps}/>);

        expect(wrapper).toMatchSnapshot();
    });

    test('should run props.history.push with new state', () => {
        const wrapper = shallowWithIntl(<CreateTeam {...defaultProps}/>);

        const history = wrapper.instance().props.history;
        const state = {team: {name: 'team_name'}, wizard: ''};
        wrapper.setState(state);

        state.team.name = 'new_team';
        state.wizard = 'display_name';
        wrapper.instance().updateParent(state);

        expect(state.team.name).toBe('new_team');
        expect(history.push).toHaveBeenCalledWith('/create_team/display_name');
    });
});
