// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {FormattedMessage} from 'react-intl';

export default class LogoutIcon extends React.PureComponent {
    render() {
        return (
            <FormattedMessage
                id='generic_icons.logout'
                defaultMessage='Logout Icon'
            >
                {(title) => (
                    <i
                        className='fa fa-1x fa-angle-left'
                        title={title}
                    />
                )}
            </FormattedMessage>
        );
    }
}
