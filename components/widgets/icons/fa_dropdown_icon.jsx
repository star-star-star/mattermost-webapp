// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {FormattedMessage} from 'react-intl';

export default class DropdownIcon extends React.PureComponent {
    render() {
        return (
            <FormattedMessage
                id='generic_icons.dropdown'
                defaultMessage='Dropdown Icon'
            >
                {(title) => (
                    <i
                        className='fa fa-angle-down'
                        title={title}
                    />
                )}
            </FormattedMessage>
        );
    }
}
