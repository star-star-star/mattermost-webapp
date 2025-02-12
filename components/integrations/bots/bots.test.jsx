// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {shallow} from 'enzyme';

import TestHelper from 'tests/helpers/client-test-helper';

import Bot from './bot.jsx';
import Bots from './bots.jsx';

describe('components/integrations/bots/Bots', () => {
    const team = TestHelper.fakeTeam();
    const actions = {
        loadBots: jest.fn().mockReturnValue(Promise.resolve({})),
        getUserAccessTokensForUser: jest.fn(),
        createUserAccessToken: jest.fn(),
        revokeUserAccessToken: jest.fn(),
        enableUserAccessToken: jest.fn(),
        disableUserAccessToken: jest.fn(),
        getUser: jest.fn(),
        disableBot: jest.fn(),
        enableBot: jest.fn(),
    };

    it('bots', () => {
        const bot1 = TestHelper.fakeBot();
        const bot2 = TestHelper.fakeBot();
        const bot3 = TestHelper.fakeBot();
        const bots = {
            [bot1.user_id]: bot1,
            [bot2.user_id]: bot2,
            [bot3.user_id]: bot3,
        };
        const wrapperFull = shallow(
            <Bots
                bots={bots}
                team={team}
                accessTokens={{}}
                owners={{}}
                actions={actions}
            />
        );
        wrapperFull.instance().setState({loading: false});
        const wrapper = shallow(<div>{wrapperFull.instance().bots()[0]}</div>);

        expect(wrapper.find('EnabledSection').shallow().contains(
            <Bot
                key={bot1.user_id}
                bot={bot1}
                owner={undefined}
                accessTokens={{}}
                team={team}
                actions={actions}
            />
        )).toEqual(true);
        expect(wrapper.find('EnabledSection').shallow().contains(
            <Bot
                key={bot2.user_id}
                bot={bot2}
                owner={undefined}
                accessTokens={{}}
                team={team}
                actions={actions}
            />
        )).toEqual(true);
        expect(wrapper.find('EnabledSection').shallow().contains(
            <Bot
                key={bot3.user_id}
                bot={bot3}
                owner={undefined}
                accessTokens={{}}
                team={team}
                actions={actions}
            />
        )).toEqual(true);
    });

    it('bot owner tokens', () => {
        const bot1 = TestHelper.fakeBot();
        const bots = {
            [bot1.user_id]: bot1,
        };

        const owner = {
            user_id: 'owner',
        };

        const passedTokens = {
            id: 'token',
        };

        const owners = {
            [bot1.user_id]: owner,
        };

        const tokens = {
            [bot1.user_id]: passedTokens,
        };

        const wrapperFull = shallow(
            <Bots
                bots={bots}
                team={team}
                accessTokens={tokens}
                owners={owners}
                actions={actions}
            />
        );
        wrapperFull.instance().setState({loading: false});
        const wrapper = shallow(<div>{wrapperFull.instance().bots()[0]}</div>);

        expect(wrapper.find('EnabledSection').shallow().contains(
            <Bot
                key={bot1.user_id}
                bot={bot1}
                owner={owner}
                accessTokens={passedTokens}
                team={team}
                actions={actions}
            />
        )).toEqual(true);
    });
});
