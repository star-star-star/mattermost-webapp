// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class GlobeIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <FormattedMessage
                    id='generic_icons.channel.public'
                    defaultMessage='Public Channel Icon'
                >
                    {(ariaLabel) => (
                        <svg
                            width='13px'
                            height='13px'
                            viewBox='0 0 14 14'
                            role='icon'
                            aria-label={ariaLabel}
                        >
                            <g
                                stroke='none'
                                strokeWidth='1'
                                fill='inherit'
                                fillRule='evenodd'
                            >
                                <g
                                    transform='translate(-115.000000, -147.000000)'
                                    fillRule='nonzero'
                                    fill='inherit'
                                >
                                    <g transform='translate(95.000000, 0.000000)'>
                                        <g transform='translate(20.000000, 113.000000)'>
                                            <g transform='translate(0.000000, 34.000000)'>
                                                <path d='M10.409,0.893375 C9.40275,0.329875 8.24075,0.00875 7,0 C3.13075,0 0,3.140375 0,7 C0,10.521875 2.594375,13.42775 5.97625,13.93 C6.314875,13.974625 6.6535,14 7,14 C8.24075,14 9.40275,13.678875 10.409,13.1145 C12.551875,11.918375 14,9.6285 14,7 C13.99125,4.3715 12.551875,2.090375 10.409,0.893375 Z M11.554375,4.375 L9.431625,4.375 C9.302125,3.5 9.10875,2.736125 8.86725,2.085125 C10.003875,2.519125 10.9515,3.5 11.554375,4.375 Z M6.941375,1.73775 C6.960625,1.736875 6.979875,1.73425 7,1.73425 C7.020125,1.73425 7.039375,1.736875 7.058625,1.73775 C7.340375,2.172625 7.697375,3.5 7.92225,4.375 L6.07775,4.375 C6.302625,3.5 6.659625,2.172625 6.941375,1.73775 Z M1.81475,7.875 C1.7675,7.875 1.73425,7.29925 1.73425,7 C1.73425,6.70075 1.764875,6.125 1.813,6.125 L4.396875,6.125 C4.384625,6.125 4.375,6.7025 4.375,7 C4.375,7.2975 4.384625,7.875 4.396875,7.875 L1.81475,7.875 Z M4.354875,11.54475 C4.346125,11.54475 4.337375,11.54475 4.337375,11.536 C3.548125,11.07575 2.893625,10.5 2.436875,9.625 L4.568375,9.625 C4.697875,10.5 4.890375,11.262125 5.131875,11.91225 C4.8615,11.81075 4.599875,11.692625 4.354875,11.54475 Z M4.568375,4.375 L2.443875,4.375 C3.045875,3.5 3.994375,2.517375 5.131875,2.083375 C4.89125,2.734375 4.697875,3.5 4.568375,4.375 Z M7.0595,12.26225 C7.039375,12.26225 7.020125,12.26575 7,12.26575 C6.979875,12.26575 6.960625,12.26225 6.9405,12.26225 C6.65875,11.8265 6.302625,11.375 6.07775,9.625 L7.921375,9.625 C7.697375,11.375 7.34125,11.8265 7.0595,12.26225 Z M8.11125,7.875 L5.88875,7.875 C5.873875,7.875 5.8625,7.30625 5.8625,7 C5.8625,6.69375 5.873875,6.125 5.88875,6.125 L8.11125,6.125 C8.126125,6.125 8.1375,6.69375 8.1375,7 C8.1375,7.30625 8.126125,7.875 8.11125,7.875 Z M10.409,11.0075 C10.13075,11.242 9.828,11.45025 9.506875,11.631375 C9.30125,11.74075 9.086875,11.839625 8.8655,11.923625 C9.107,11.270875 9.30125,10.5 9.431625,9.625 L11.557875,9.625 C11.25425,10.5 10.8675,10.618125 10.409,11.0075 Z M9.603125,7.875 C9.615375,7.875 9.625,7.2975 9.625,7 C9.625,6.7025 9.615375,6.125 9.603125,6.125 L12.186125,6.125 C12.235125,6.125 12.26575,6.70075 12.26575,7 C12.26575,7.29925 12.233375,7.875 12.18525,7.875 L9.603125,7.875 Z'/>
                                            </g>
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
