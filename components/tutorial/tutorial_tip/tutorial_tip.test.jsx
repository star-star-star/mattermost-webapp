// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import TutorialTip from 'components/tutorial/tutorial_tip/tutorial_tip.jsx';
import {Constants, Preferences} from 'utils/constants.jsx';

describe('components/tutorial/tutorial_tip/tutorial_tip.jsx', () => {
    jest.mock('actions/diagnostics_actions.jsx');

    const currentUserId = 'currentUserId';

    const requiredProps = {
        currentUserId,
        step: 1,
        actions: {
            closeRhsMenu: jest.fn(),
            savePreferences: jest.fn(),
        },
        screens: [1, 2, 3],
        placement: 'right',
    };

    test('should match snapshot', () => {
        const wrapper = shallow(<TutorialTip {...requiredProps}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should not call both closeRhsMenu and savePreferences', () => {
        const savePreferences = jest.fn();
        const closeRhsMenu = jest.fn();

        const props = {...requiredProps, actions: {closeRhsMenu, savePreferences}};
        const wrapper = shallow(<TutorialTip {...props}/>);

        wrapper.instance().handleNext();
        expect(closeRhsMenu).toHaveBeenCalledTimes(0);
        expect(savePreferences).toHaveBeenCalledTimes(0);

        wrapper.instance().handleNext();
        expect(closeRhsMenu).toHaveBeenCalledTimes(0);
        expect(savePreferences).toHaveBeenCalledTimes(0);
    });

    test('should have called both closeRhsMenu and savePreferences', () => {
        const savePreferences = jest.fn();
        const closeRhsMenu = jest.fn();

        const props = {...requiredProps, actions: {closeRhsMenu, savePreferences}};
        const wrapper = shallow(<TutorialTip {...props}/>);

        wrapper.instance().handleNext();
        wrapper.instance().handleNext();
        wrapper.instance().handleNext();

        const expectedPref = [{
            user_id: currentUserId,
            category: Preferences.TUTORIAL_STEP,
            name: currentUserId,
            value: (requiredProps.step + 1).toString(),
        }];

        expect(closeRhsMenu).toHaveBeenCalledTimes(1);
        expect(savePreferences).toHaveBeenCalledTimes(1);
        expect(savePreferences).toHaveBeenCalledWith(currentUserId, expectedPref);
    });

    test('should have called mockEvent.preventDefault when skipTutorial', () => {
        const mockEvent = {preventDefault: jest.fn()};

        const props = {...requiredProps};
        const wrapper = shallow(<TutorialTip {...props}/>);

        wrapper.instance().skipTutorial(mockEvent);
        expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
    });

    test('should have called both closeRhsMenu and savePreferences when skipTutorial', () => {
        const savePreferences = jest.fn();
        const closeRhsMenu = jest.fn();
        const mockEvent = {preventDefault: jest.fn()};

        const props = {...requiredProps, actions: {closeRhsMenu, savePreferences}};
        const wrapper = shallow(<TutorialTip {...props}/>);

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
