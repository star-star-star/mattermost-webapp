// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import {Constants} from 'utils/constants';
import {t} from 'utils/i18n';

export default class EditPostTimeLimitButton extends React.Component {
    static propTypes = {
        timeLimit: PropTypes.number.isRequired,
        onClick: PropTypes.func,
    };

    render = () => {
        let messageID;
        if (this.props.timeLimit === Constants.UNSET_POST_EDIT_TIME_LIMIT) {
            messageID = t('edit_post.time_limit_button.no_limit');
        } else {
            messageID = t('edit_post.time_limit_button.for_n_seconds');
        }

        return (
            <button
                className='edit-post-time-limit-button'
                onClick={this.props.onClick}
            >
                <i className='fa fa-gear'/>
                <FormattedMessage
                    id={messageID}
                    values={{n: this.props.timeLimit}}
                />
            </button>
        );
    };
}
