// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import {MenuItemExternalLinkImpl} from './menu_item_external_link.jsx';

describe('components/MenuItemExternalLink', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(
            <MenuItemExternalLinkImpl
                url='http://test.com'
                text='Whatever'
            />
        );

        expect(wrapper).toMatchInlineSnapshot(`
<a
  href="http://test.com"
  rel="noopener noreferrer"
  target="_blank"
>
  Whatever
</a>
`);
    });
});
