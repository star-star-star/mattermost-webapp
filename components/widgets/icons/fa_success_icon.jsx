// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {FormattedMessage} from 'react-intl';

export default class SuccessIcon extends React.PureComponent {
    render() {
        return (
            <FormattedMessage
                id='generic_icons.success'
                defaultMessage='Success Icon'
            >
                {(title) => (
                    <i
                        className='fa fa-check'
                        title={title}
                    />
                )}
            </FormattedMessage>
        );
    }
}
