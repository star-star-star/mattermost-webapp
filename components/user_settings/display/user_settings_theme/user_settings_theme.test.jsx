// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {Preferences} from 'mattermost-redux/constants';

import {shallowWithIntl} from 'tests/helpers/intl-test-helper.jsx';
import UserSettingsTheme from 'components/user_settings/display/user_settings_theme/user_settings_theme.jsx';

describe('components/user_settings/display/user_settings_theme/user_settings_theme.jsx', () => {
    const requiredProps = {
        theme: Preferences.THEMES.default,
        updateTheme: jest.fn(),
        currentTeamId: 'teamId',
        selected: false,
        updateSection: jest.fn(),
        setRequireConfirm: jest.fn(),
        setEnforceFocus: jest.fn(),
        actions: {
            saveTheme: jest.fn().mockResolvedValue({data: true}),
            deleteTeamSpecificThemes: jest.fn().mockResolvedValue({data: true}),
        },
        focused: false,
    };

    it('should match snapshot', () => {
        const wrapper = shallowWithIntl(
            <UserSettingsTheme {...requiredProps}/>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('should saveTheme', async () => {
        const wrapper = shallowWithIntl(
            <UserSettingsTheme {...requiredProps}/>
        );

        await wrapper.instance().submitTheme();

        expect(requiredProps.setRequireConfirm).toHaveBeenCalledTimes(1);
        expect(requiredProps.setRequireConfirm).toHaveBeenCalledWith(false);

        expect(requiredProps.updateSection).toHaveBeenCalledTimes(1);
        expect(requiredProps.updateSection).toHaveBeenCalledWith('');

        expect(requiredProps.actions.saveTheme).toHaveBeenCalled();
    });

    it('should deleteTeamSpecificThemes if applyToAllTeams is enabled', async () => {
        const props = {
            ...requiredProps,
            actions: {
                saveTheme: jest.fn().mockResolvedValue({data: true}),
                deleteTeamSpecificThemes: jest.fn().mockResolvedValue({data: true}),
            },
        };

        const wrapper = shallowWithIntl(
            <UserSettingsTheme {...props}/>
        );

        wrapper.instance().setState({applyToAllTeams: true});
        await wrapper.instance().submitTheme();

        expect(props.actions.deleteTeamSpecificThemes).toHaveBeenCalled();
    });
});
