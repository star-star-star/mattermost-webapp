// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';

export default class Suggestion extends React.Component {
    static get propTypes() {
        return {
            item: PropTypes.oneOfType([
                PropTypes.object,
                PropTypes.string,
            ]).isRequired,
            term: PropTypes.string.isRequired,
            matchedPretext: PropTypes.string.isRequired,
            isSelection: PropTypes.bool,
            onClick: PropTypes.func,
        };
    }

    static baseProps = {
        role: 'button',
        tabIndex: -1,
    };

    handleClick = (e) => {
        e.preventDefault();

        this.props.onClick(this.props.term, this.props.matchedPretext);
    }
}
