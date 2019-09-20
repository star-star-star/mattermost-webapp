// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class PluginIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <FormattedMessage
                    id='generic_icons.plugin'
                    defaultMessage='Plugin Icon'
                >
                    {(ariaLabel) => (
                        <svg
                            width='61px'
                            height='61px'
                            viewBox='0 0 61 61'
                            aria-label={ariaLabel}
                        >
                            <g
                                stroke='none'
                                strokeWidth='1'
                                fill='inherit'
                                fillRule='evenodd'
                            >
                                <g
                                    transform='translate(-347.000000, -211.000000)'
                                    fill='inherit'
                                >
                                    <g transform='translate(377.585786, 241.500000) rotate(-315.000000) translate(-377.585786, -241.500000) translate(358.585786, 200.000000)'>
                                        <g transform='translate(0.000000, -0.000000)'>
                                            <path
                                                d='M3.28846154,6.10822511 L3.05411255,6.10822511 C1.36737277,6.10822511 2.06566048e-16,4.74085234 0,3.05411255 C-2.06566048e-16,1.36737277 1.36737277,-7.78498519e-14 3.05411255,-7.81597009e-14 L34.9458874,-7.81597009e-14 C36.6326272,-8.16905472e-14 38,1.36737277 38,3.05411255 C38,4.74085234 36.6326272,6.10822511 34.9458874,6.10822511 L34.7115385,6.10822511 L34.7115385,14.7316017 C34.7115385,20.9798931 29.0184395,26.1638765 21.5576923,27.1415606 L21.5576923,33.1964286 C21.5576923,34.5081049 20.4943686,35.5714286 19.1826923,35.5714286 C17.871016,35.5714286 16.8076923,34.5081049 16.8076923,33.1964286 L16.8076923,27.1859094 C9.16823824,26.3322077 3.28846154,21.0815081 3.28846154,14.7316017 L3.28846154,6.10822511 Z M19.1431901,14.7316017 C17.8533303,14.7316017 16.8076923,15.7772397 16.8076923,17.0670996 C16.8076923,18.3569594 17.8533303,19.4025974 19.1431901,19.4025974 L19.2221945,19.4025974 C20.5120543,19.4025974 21.5576923,18.3569594 21.5576923,17.0670996 C21.5576923,15.7772397 20.5120543,14.7316017 19.2221945,14.7316017 L19.1431901,14.7316017 Z'
                                                transform='translate(19.000000, 17.785714) rotate(-180.000000) translate(-19.000000, -17.785714) '
                                            />
                                            <path
                                                d='M32.1538462,53.5367965 L34.7115385,53.5367965 L34.7115385,62.1601732 C34.7115385,68.4084646 29.0184395,73.592448 21.5576923,74.5701321 L21.5576923,80.625 C21.5576923,81.9366763 20.4943686,83 19.1826923,83 C17.871016,83 16.8076923,81.9366763 16.8076923,80.625 L16.8076923,74.6144809 C9.16823824,73.7607791 3.28846154,68.5100796 3.28846154,62.1601732 L3.28846154,53.5367965 L3.05411255,53.5367965 C1.36737277,53.5367965 2.06566048e-16,52.1694238 0,50.482684 C-2.06566048e-16,48.7959442 1.36737277,47.4285714 3.05411255,47.4285714 L8.40384615,47.4285714 L8.40384615,42.2581169 C8.40384615,40.9464406 9.46716987,39.8831169 10.7788462,39.8831169 C12.0905224,39.8831169 13.1538462,40.9464406 13.1538462,42.2581169 L13.1538462,47.4285714 L24.8461538,47.4285714 L24.8461538,42.2581169 C24.8461538,40.9464406 25.9094776,39.8831169 27.2211538,39.8831169 C28.5328301,39.8831169 29.5961538,40.9464406 29.5961538,42.2581169 L29.5961538,47.4285714 L34.9458874,47.4285714 C36.6326272,47.4285714 38,48.7959442 38,50.482684 C38,52.1694238 36.6326272,53.5367965 34.9458874,53.5367965 L32.1538462,53.5367965 Z M19.1431901,62.1601732 C17.8533303,62.1601732 16.8076923,63.2058112 16.8076923,64.495671 C16.8076923,65.7855308 17.8533303,66.8311688 19.1431901,66.8311688 L19.2221945,66.8311688 C20.5120543,66.8311688 21.5576923,65.7855308 21.5576923,64.495671 C21.5576923,63.2058112 20.5120543,62.1601732 19.2221945,62.1601732 L19.1431901,62.1601732 Z'
                                                transform='translate(19.000000, 61.441558) rotate(-360.000000) translate(-19.000000, -61.441558) '
                                            />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    )}
                </FormattedMessage>
            </span>
        );
    }
}
