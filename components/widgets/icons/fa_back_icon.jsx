// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {FormattedMessage} from 'react-intl';

export default class BackIcon extends React.PureComponent {
    render() {
        return (
            <FormattedMessage
                id='generic_icons.back'
                defaultMessage='Back Icon'
            >
                {(title) => (
                    <i
                        className='fa fa-angle-left'
                        title={title}
                    />
                )}
            </FormattedMessage>
        );
    }
}
