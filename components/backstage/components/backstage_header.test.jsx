// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {shallowWithIntl} from 'tests/helpers/intl-test-helper.jsx';
import BackstageHeader from 'components/backstage/components/backstage_header.jsx';

describe('components/backstage/components/BackstageHeader', () => {
    test('should match snapshot without children', () => {
        const wrapper = shallowWithIntl(
            <BackstageHeader/>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot with children', () => {
        const wrapper = shallowWithIntl(
            <BackstageHeader>
                <div>{'Child 1'}</div>
                <div>{'Child 2'}</div>
            </BackstageHeader>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
