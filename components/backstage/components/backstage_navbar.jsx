// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';

import BackIcon from 'components/widgets/icons/fa_back_icon';

export default class BackstageNavbar extends React.Component {
    static get propTypes() {
        return {
            team: PropTypes.object.isRequired,
            siteName: PropTypes.string,
        };
    }

    render() {
        if (!this.props.team) {
            return null;
        }

        return (
            <div className='backstage-navbar'>
                <Link
                    className='backstage-navbar__back'
                    to={`/${this.props.team.name}`}
                >
                    <BackIcon/>
                    <span>
                        <FormattedMessage
                            id='backstage_navbar.backToMattermost'
                            defaultMessage='Back to {siteName}'
                            values={{
                                siteName: this.props.siteName,
                            }}
                        />
                    </span>
                </Link>
            </div>
        );
    }
}
