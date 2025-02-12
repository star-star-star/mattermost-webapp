// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import ErrorLink from 'components/error_page/error_link.jsx';

describe('components/error_page/ErrorLink', () => {
    const baseProps = {
        url: 'https://docs.NeoAi.com/deployment/sso-gitlab.html',
        messageId: 'error.oauth_missing_code.gitlab.link',
        defaultMessage: 'GitLab',
    };

    test('should match snapshot', () => {
        const wrapper = shallow(
            <ErrorLink {...baseProps}/>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
