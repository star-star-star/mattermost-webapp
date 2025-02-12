// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import FormattedMarkdownMessage from 'components/formatted_markdown_message.jsx';

export default class SearchHint extends PureComponent {
    static propTypes = {
        withTitle: PropTypes.bool,
    }

    render() {
        return (
            <React.Fragment>
                {this.props.withTitle &&
                <h4>
                    <FormattedMessage
                        id='search_bar.usage.title'
                        defaultMessage='Search Options'
                    />
                </h4>
                }
                <FormattedMarkdownMessage
                    id='search_bar.usage.tips'
                    defaultMessage='* Use **"quotation marks"** to search for phrases\n* Use **from:** to find posts from specific users and **in:** to find posts in specific channels\n* Use **on:** to find posts on a specific date\n* Use **before:** to find posts before a specific date\n* Use **after:** to find posts after a specific date\n* Use **dash** "-" to exclude search terms and modifiers'
                />
            </React.Fragment>
        );
    }
}
