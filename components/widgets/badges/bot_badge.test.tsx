// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import BotBadge from './bot_badge';

describe('components/widgets/badges/BotBadge', () => {
    test('should match the snapshot', () => {
        const wrapper = shallow(
            <BotBadge className={'test'}/>
        );
        expect(wrapper).toMatchInlineSnapshot(`
<Badge
  className="BotBadge test"
  show={true}
>
  <FormattedMessage
    defaultMessage="BOT"
    id="post_info.bot"
    values={Object {}}
  />
</Badge>
`);
    });
});
