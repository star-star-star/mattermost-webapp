// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import SystemUsersDropdown from './system_users_dropdown';

describe('components/admin_console/system_users/system_users_dropdown/system_users_dropdown.jsx', () => {
    const user = {
        id: 'user_id',
        roles: '',
        username: 'some-user',
    };

    const requiredProps = {
        user,
        mfaEnabled: true,
        enableUserAccessTokens: true,
        experimentalEnableAuthenticationTransfer: true,
        doPasswordReset: jest.fn(),
        doEmailReset: jest.fn(),
        doManageTeams: jest.fn(),
        doManageRoles: jest.fn(),
        doManageTokens: jest.fn(),
        onError: jest.fn(),
        currentUser: user,
        teamUrl: 'teamUrl',
        index: 0,
        totalUsers: 10,
        actions: {
            updateUserActive: jest.fn().mockResolvedValue({data: true}),
            revokeAllSessionsForUser: jest.fn().mockResolvedValue({data: true}),
            promoteGuestToUser: jest.fn().mockResolvedValue({data: true}),
            demoteUserToGuest: jest.fn().mockResolvedValue({data: true}),
            loadBots: jest.fn(() => Promise.resolve({})),
        },
        config: {
            ServiceSettings: {},
        },
        bots: {},
    };

    test('handleMakeActive() should have called updateUserActive', async () => {
        const wrapper = shallow(<SystemUsersDropdown {...requiredProps}/>);

        const event = {preventDefault: jest.fn()};
        await wrapper.instance().handleMakeActive(event);

        expect(requiredProps.actions.updateUserActive).toHaveBeenCalledTimes(1);
        expect(requiredProps.actions.updateUserActive).toHaveBeenCalledWith(requiredProps.user.id, true);
    });

    test('handleMakeActive() should have called onError', async () => {
        const retVal = {error: {server_error_id: 'id', message: 'error'}};
        const updateUserActive = jest.fn().mockResolvedValue(retVal);
        const props = {...requiredProps, actions: {...requiredProps.actions, updateUserActive}};
        const wrapper = shallow(<SystemUsersDropdown {...props}/>);

        const event = {preventDefault: jest.fn()};
        await wrapper.instance().handleMakeActive(event);

        expect(requiredProps.onError).toHaveBeenCalledTimes(1);
        expect(requiredProps.onError).toHaveBeenCalledWith({id: retVal.error.server_error_id, ...retVal.error});
    });

    test('handleDeactivateMember() should have called updateUserActive', async () => {
        const wrapper = shallow(<SystemUsersDropdown {...requiredProps}/>);

        await wrapper.instance().handleDeactivateMember();

        expect(requiredProps.actions.updateUserActive).toHaveBeenCalledTimes(1);
        expect(requiredProps.actions.updateUserActive).toHaveBeenCalledWith(requiredProps.user.id, false);
    });

    test('handleDeactivateMember() should have called onError', async () => {
        const retVal = {error: {server_error_id: 'id', message: 'error'}};
        const updateUserActive = jest.fn().mockResolvedValue(retVal);
        const props = {...requiredProps, actions: {...requiredProps.actions, updateUserActive}};
        const wrapper = shallow(<SystemUsersDropdown {...props}/>);

        await wrapper.instance().handleDeactivateMember();

        expect(requiredProps.onError).toHaveBeenCalledTimes(1);
        expect(requiredProps.onError).toHaveBeenCalledWith({id: retVal.error.server_error_id, ...retVal.error});
    });

    test('handleRevokeSessions() should have called revokeAllSessions', async () => {
        const wrapper = shallow(<SystemUsersDropdown {...requiredProps}/>);

        await wrapper.instance().handleRevokeSessions();

        expect(requiredProps.actions.revokeAllSessionsForUser).toHaveBeenCalled();
        expect(requiredProps.actions.revokeAllSessionsForUser).toHaveBeenCalledWith(requiredProps.user.id);
    });

    test('handleRevokeSessions() should have called onError', async () => {
        const revokeAllSessionsForUser = jest.fn().mockResolvedValue({error: {}});
        const onError = jest.fn();
        const props = {...requiredProps, onError, actions: {...requiredProps.actions, revokeAllSessionsForUser}};
        const wrapper = shallow(<SystemUsersDropdown {...props}/>);

        await wrapper.instance().handleRevokeSessions();

        expect(onError).toHaveBeenCalled();
    });

    test('handleShowDeactivateMemberModal should not call the loadBots if the setting is not true', async () => {
        const wrapper = shallow(<SystemUsersDropdown {...requiredProps}/>);

        const event = {preventDefault: jest.fn()};
        await wrapper.instance().handleShowDeactivateMemberModal(event);

        expect(requiredProps.actions.loadBots).toHaveBeenCalledTimes(0);
    });

    test('handleShowDeactivateMemberModal should call the loadBots only if the setting is true', async () => {
        const overrideConfig = {
            ServiceSettings: {
                DisableBotsWhenOwnerIsDeactivated: true,
            },
        };
        const wrapper = shallow(<SystemUsersDropdown {...{...requiredProps, config: overrideConfig, bots: { }}}/>);

        const event = {preventDefault: jest.fn()};
        await wrapper.instance().handleShowDeactivateMemberModal(event);

        expect(requiredProps.actions.loadBots).toHaveBeenCalledTimes(1);
    });

    test('renderDeactivateMemberModal should not render the bot accounts warning in case the user do not have any bot accounts', async () => {
        const overrideProps = {
            config: {
                ServiceSettings: {
                    DisableBotsWhenOwnerIsDeactivated: true,
                },
            },
            bots: {
                1: {owner_id: '1'},
                2: {owner_id: '1'},
                3: {owner_id: '2'},
            },
        };
        const wrapper = shallow(<SystemUsersDropdown {...{...requiredProps, ...overrideProps}}/>);

        const modal = wrapper.wrap(wrapper.instance().renderDeactivateMemberModal());
        expect(modal.prop('message')).toMatchSnapshot();
    });

    test('renderDeactivateMemberModal should render the bot accounts warning. owner_id has enabled bot accounts', async () => {
        const overrideProps = {
            config: {
                ServiceSettings: {
                    DisableBotsWhenOwnerIsDeactivated: true,
                },
            },
            bots: {
                1: {owner_id: '1', delete_at: 0},
                2: {owner_id: '1', delete_at: 0},
                3: {owner_id: 'user_id', delete_at: 0},
            },
        };
        const wrapper = shallow(<SystemUsersDropdown {...{...requiredProps, ...overrideProps}}/>);
        wrapper.setState({showDeactivateMemberModal: true});

        const modal = wrapper.wrap(wrapper.instance().renderDeactivateMemberModal());
        expect(modal.prop('message')).toMatchSnapshot();
    });

    test('renderDeactivateMemberModal should not render the bot accounts warning. owner_id has no enabled bot accounts', async () => {
        const overrideProps = {
            config: {
                ServiceSettings: {
                    DisableBotsWhenOwnerIsDeactivated: true,
                },
            },
            bots: {
                1: {owner_id: '1', delete_at: 0},
                2: {owner_id: '1', delete_at: 0},
                3: {owner_id: 'user_id', delete_at: 1234},
            },
        };
        const wrapper = shallow(<SystemUsersDropdown {...{...requiredProps, ...overrideProps}}/>);
        wrapper.setState({showDeactivateMemberModal: true});

        const modal = wrapper.wrap(wrapper.instance().renderDeactivateMemberModal());
        expect(modal.prop('message')).toMatchSnapshot();
    });
});
