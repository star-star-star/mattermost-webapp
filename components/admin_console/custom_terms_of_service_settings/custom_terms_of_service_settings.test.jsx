// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import CustomTermsOfServiceSettings from 'components/admin_console/custom_terms_of_service_settings/custom_terms_of_service_settings.jsx';

describe('components/admin_console/CustomTermsOfServiceSettings', () => {
    const baseProps = {
        actions: {
            createTermsOfService: jest.fn(),
            getTermsOfService: jest.fn().mockResolvedValue({data: {id: 'tos_id', text: 'tos_text'}}),
        },
        config: {
            SupportSettings: {
                CustomTermsOfServiceEnabled: true,
                CustomTermsOfServiceReAcceptancePeriod: 365,
            },
        },
        license: {
            IsLicensed: 'true',
            CustomTermsOfService: 'true',
        },
        setNavigationBlocked: jest.fn(),
    };

    test('should match snapshot', () => {
        const wrapper = shallow(
            <CustomTermsOfServiceSettings
                {...baseProps}
            />
        );

        expect(wrapper).toMatchSnapshot();

        wrapper.setProps({saveNeeded: true});
        expect(wrapper).toMatchSnapshot();

        wrapper.setProps({saveNeeded: false, saving: true});
        expect(wrapper).toMatchSnapshot();

        wrapper.setProps({saving: false, serverError: 'error'});
        expect(wrapper).toMatchSnapshot();
    });
});
