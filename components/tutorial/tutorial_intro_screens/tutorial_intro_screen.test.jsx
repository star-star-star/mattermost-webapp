// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {shallowWithIntl} from 'tests/helpers/intl-test-helper';

import TutorialIntroScreens from 'components/tutorial/tutorial_intro_screens/tutorial_intro_screens.jsx';
import {Constants, Preferences} from 'utils/constants.jsx';

describe('components/tutorial/tutorial_intro_screens/TutorialIntroScreens', () => {
    jest.mock('actions/diagnostics_actions.jsx');

    jest.mock('actions/global_actions.jsx');

    const currentUserId = 'currentUserId';

    const requiredProps = {
        currentUserId,
        teamType: 'teamType',
        step: 1,
        townSquareDisplayName: 'townSquareDisplayName',
        appDownloadLink: 'https://host/static/image.png',
        isLicensed: true,
        restrictTeamInvite: false,
        supportEmail: 'supportEmail',
        actions: {savePreferences: jest.fn()},
    };

    test('should match snapshot', () => {
        const wrapper = shallowWithIntl(<TutorialIntroScreens {...requiredProps}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should not call savePreferences when handleNext', () => {
        const savePreferences = jest.fn();

        const props = {...requiredProps, actions: {savePreferences}};
        const wrapper = shallowWithIntl(<TutorialIntroScreens {...props}/>);

        wrapper.instance().handleNext();
        expect(savePreferences).toHaveBeenCalledTimes(0);

        wrapper.instance().handleNext();
        expect(savePreferences).toHaveBeenCalledTimes(0);
    });

    test('should have called savePreferences when handleNext', () => {
        const savePreferences = jest.fn();

        const props = {...requiredProps, actions: {savePreferences}};
        const wrapper = shallowWithIntl(<TutorialIntroScreens {...props}/>);

        wrapper.instance().handleNext();
        wrapper.instance().handleNext();
        wrapper.instance().handleNext();

        const expectedPref = [{
            user_id: currentUserId,
            category: Preferences.TUTORIAL_STEP,
            name: currentUserId,
            value: (requiredProps.step + 1).toString(),
        }];

        expect(savePreferences).toHaveBeenCalledTimes(1);
        expect(savePreferences).toHaveBeenCalledWith(currentUserId, expectedPref);
    });

    test('should have called mockEvent.preventDefault when skipTutorial', () => {
        const mockEvent = {preventDefault: jest.fn()};

        const props = {...requiredProps};
        const wrapper = shallowWithIntl(<TutorialIntroScreens {...props}/>);

        wrapper.instance().skipTutorial(mockEvent);
        expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    test('should have called savePreferences when skipTutorial', () => {
        const savePreferences = jest.fn();
        const mockEvent = {preventDefault: jest.fn()};

        const props = {...requiredProps, actions: {savePreferences}};
        const wrapper = shallowWithIntl(<TutorialIntroScreens {...props}/>);

        wrapper.instance().skipTutorial(mockEvent);

        const expectedPref = [{
            user_id: currentUserId,
            category: Preferences.TUTORIAL_STEP,
            name: currentUserId,
            value: Constants.TutorialSteps.FINISHED.toString(),
        }];

        expect(savePreferences).toHaveBeenCalledTimes(1);
        expect(savePreferences).toHaveBeenCalledWith(currentUserId, expectedPref);
    });
});
