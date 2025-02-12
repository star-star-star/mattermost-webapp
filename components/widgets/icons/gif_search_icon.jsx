// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

export default class GifSearchIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <svg
                    width='100%'
                    height='100%'
                    viewBox='-10 -10 40 40'
                    version='1.1'
                >
                    <g
                        id='ic_search'
                        transform='matrix(0.959095,-9.6091e-18,-1.00189e-17,0.959095,-0.0633002,-0.777826)'
                    >
                        <path
                            d='M2.648,15.872C3.433,16.658 4.376,17.287 5.454,17.758C6.553,18.229 7.698,18.454 8.888,18.454C10.728,18.454 12.389,17.938 13.893,16.905L18.18,21.192C18.494,21.506 18.854,21.664 19.302,21.664C19.751,21.664 20.111,21.506 20.447,21.192C20.761,20.855 20.919,20.496 20.919,20.047C20.919,19.621 20.761,19.239 20.447,18.925L16.16,14.638C17.193,13.134 17.709,11.473 17.709,9.633C17.709,8.443 17.484,7.298 17.013,6.198C16.542,5.121 15.913,4.178 15.128,3.393C14.342,2.607 13.399,1.979 12.322,1.507C11.222,1.036 10.077,0.811 8.888,0.811C7.698,0.811 6.553,1.036 5.454,1.507C4.376,1.979 3.433,2.607 2.648,3.393C1.862,4.178 1.234,5.121 0.762,6.198C0.291,7.298 0.066,8.443 0.066,9.633C0.066,10.822 0.291,11.967 0.762,13.067C1.234,14.144 1.862,15.087 2.648,15.872ZM8.888,4.021C10.436,4.021 11.761,4.56 12.861,5.66C13.96,6.76 14.499,8.084 14.499,9.633C14.499,11.181 13.96,12.506 12.861,13.606C11.761,14.705 10.436,15.244 8.888,15.244C7.339,15.244 6.015,14.705 4.915,13.606C3.815,12.506 3.276,11.181 3.276,9.633C3.276,8.084 3.815,6.76 4.915,5.66C6.015,4.56 7.339,4.021 8.888,4.021Z'
                            style={{fill: 'inherit'}}
                        />
                    </g>
                </svg>
            </span>
        );
    }
}
