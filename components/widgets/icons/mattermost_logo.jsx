// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class MattermostLogo extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <FormattedMessage
                    id='generic_icons.mattermost'
                    defaultMessage='Neo Ai Logo'
                >
                    {(ariaLabel) => (
                        <svg
                            version='1.1'
                            id='Layer_1'
                            x='0px'
                            y='0px'
                            viewBox='0 0 600 600'
                            style={style.background}
                            role='icon'
                            aria-label={ariaLabel}
                        >
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <rect id="Rectangle" stroke="#000000" stroke-width="33" x="17" y="17" width="500" height="500" rx="250"></rect>
                                </g>
                        </svg>
                    )}
                </FormattedMessage>
            </span>
        );
    }
}

const style = {
    background: {
        enableBackground: 'new 0 0 600 600',
    },
    st0: {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
    },
};

