// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';

import * as Markdown from 'utils/markdown';

export default class DialogIntroductionText extends React.PureComponent {
    static propTypes = {
        id: PropTypes.string,
        value: PropTypes.string.isRequired,
    };

    render() {
        const formattedMessage = Markdown.format(this.props.value, {
            breaks: true,
            sanitize: true,
            gfm: true,
        });

        return (
            <span
                id={this.props.id}
                dangerouslySetInnerHTML={{__html: formattedMessage}}
            />
        );
    }
}
