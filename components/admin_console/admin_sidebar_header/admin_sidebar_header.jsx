// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import {Client4} from 'mattermost-redux/client';

import MenuIcon from 'components/widgets/icons/menu_icon';

import MenuWrapper from 'components/widgets/menu/menu_wrapper';
import Avatar from 'components/widgets/users/avatar';

import AdminNavbarDropdown from 'components/admin_console/admin_navbar_dropdown';

export default class SidebarHeader extends React.Component {
    static propTypes = {
        currentUser: PropTypes.object,
    }

    render() {
        const me = this.props.currentUser;
        let profilePicture = null;

        if (!me) {
            return null;
        }

        if (me.last_picture_update) {
            profilePicture = (
                <Avatar
                    username={me.username}
                    url={Client4.getProfilePictureUrl(me.id, me.last_picture_update)}
                    size='lg'
                />
            );
        }

        return (
            <MenuWrapper className='AdminSidebarHeader'>
                <div>
                    {profilePicture}
                    <div className='header__info'>
                        <div className='team__name'>
                            <FormattedMessage
                                id='admin.sidebarHeader.systemConsole'
                                defaultMessage='System Console'
                            />
                        </div>
                        <div className='user__name overflow--ellipsis whitespace--nowrap'>{'@' + me.username}</div>
                    </div>
                    <button className='style--none'>
                        <MenuIcon className='menu-icon'/>
                    </button>
                </div>
                <AdminNavbarDropdown/>
            </MenuWrapper>
        );
    }
}
