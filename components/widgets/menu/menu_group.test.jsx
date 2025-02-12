// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import MenuGroup from './menu_group.jsx';

describe('components/MenuItem', () => {
    test('should match snapshot with default divider', () => {
        const wrapper = shallow(<MenuGroup>{'text'}</MenuGroup>);

        expect(wrapper).toMatchInlineSnapshot(`
<Fragment>
  <li
    className="MenuGroup menu-divider"
  />
  text
</Fragment>
`);
    });

    test('should match snapshot with custom divider', () => {
        const wrapper = shallow(<MenuGroup divider='--'>{'text'}</MenuGroup>);

        expect(wrapper).toMatchInlineSnapshot(`
<Fragment>
  --
  text
</Fragment>
`);
    });
});
