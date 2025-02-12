// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import AddOutgoingWebhook from 'components/integrations/add_outgoing_webhook/add_outgoing_webhook.jsx';

describe('components/integrations/AddOutgoingWebhook', () => {
    test('should match snapshot', () => {
        const emptyFunction = jest.fn();
        const teamId = 'testteamid';

        const wrapper = shallow(
            <AddOutgoingWebhook
                team={{
                    id: teamId,
                    name: 'test',
                }}
                createOutgoingHookRequest={{
                    status: 'not_started',
                    error: null,
                }}
                actions={{createOutgoingHook: emptyFunction}}
                enablePostUsernameOverride={false}
                enablePostIconOverride={false}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
