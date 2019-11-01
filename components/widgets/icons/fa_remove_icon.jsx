// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {FormattedMessage} from 'react-intl';

export default class RemoveIcon extends React.PureComponent {
    render() {
        return (
            <FormattedMessage
                id='generic_icons.remove'
                defaultMessage='Remove Icon'
            >
                {(title) => (
                    <i
                        className='fa fa-remove'
                        title={title}
                    />
                )}
            </FormattedMessage>
        );
    }
}
