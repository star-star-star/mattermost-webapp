// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class CloseCircleSolidIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <FormattedMessage
                    id='generic_icons.close'
                    defaultMessage='Close Icon'
                >
                    {(ariaLabel) => (
                        <svg
                            width='16px'
                            height='16px'
                            viewBox='0 0 16 16'
                            role='icon'
                            aria-label={ariaLabel}
                        >
                            <path
                                d='m 8,0 c 4.424,0 8,3.576 8,8 0,4.424 -3.576,8 -8,8 C 3.576,16 0,12.424 0,8 0,3.576 3.576,0 8,0 Z M 10.872,4 8,6.872 5.128,4 4,5.128 6.872,8 4,10.872 5.128,12 8,9.128 10.872,12 12,10.872 9.128,8 12,5.128 Z'
                            />
                        </svg>
                    )}
                </FormattedMessage>
            </span>
        );
    }
}
