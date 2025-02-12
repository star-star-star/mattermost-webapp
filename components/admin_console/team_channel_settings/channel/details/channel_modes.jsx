// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import {t} from 'utils/i18n';

import AdminPanel from 'components/widgets/admin_console/admin_panel';
import FormattedMarkdownMessage from 'components/formatted_markdown_message.jsx';
import LineSwitch from '../../line_switch';

const SyncGroupsToggle = ({isSynced, isPublic, onToggle}) => (
    <LineSwitch
        toggled={isSynced}
        last={isSynced}
        onToggle={() => {
            onToggle(!isSynced, isPublic);
        }}
        title={(
            <FormattedMessage
                id='admin.channel_settings.channel_details.syncGroupMembers'
                defaultMessage='Sync Group Members'
            />
        )}
        subTitle={(
            <FormattedMarkdownMessage
                id='admin.channel_settings.channel_details.syncGroupMembersDescr'
                defaultMessage='When enabled, adding and removing users from groups will add or remove them from this channel. The only way of inviting members to this channel is by adding the groups they belong to. [Learn More](!https://www.NeoAi.com/pl/default-ldap-group-constrained-team-channel.html)'
            />
        )}
    />);

SyncGroupsToggle.propTypes = {
    isPublic: PropTypes.bool.isRequired,
    isSynced: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

const AllowAllToggle = ({isSynced, isPublic, onToggle}) =>
    !isSynced && (
        <LineSwitch
            toggled={isPublic}
            last={isPublic}
            onToggle={() => {
                onToggle(isSynced, !isPublic);
            }}
            title={(
                <FormattedMessage
                    id='admin.channel_settings.channel_details.isPublic'
                    defaultMessage='Public channel or private channel'
                />
            )}
            subTitle={(
                <FormattedMessage
                    id='admin.channel_settings.channel_details.isPublicDescr'
                    defaultMessage='If `public` the channel is discoverable and any user can join, or if `private` invitations are required. Toggle to convert public channels to private.  Converting private channels to public will be available in a future release.'
                />
            )}
            onText={(
                <FormattedMessage
                    id='channel_toggle_button.public'
                    defaultMessage='Public'
                />
            )}
            offText={(
                <FormattedMessage
                    id='channel_toggle_button.private'
                    defaultMessage='Private'
                />
            )}
        />);

AllowAllToggle.propTypes = {
    isPublic: PropTypes.bool.isRequired,
    isSynced: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export const ChannelModes = ({isPublic, isSynced, onToggle}) => (
    <AdminPanel
        id='channel_manage'
        titleId={t('admin.channel_settings.channel_detail.manageTitle')}
        titleDefault='Channel Management'
        subtitleId={t('admin.channel_settings.channel_detail.manageDescription')}
        subtitleDefault='Choose between inviting members manually or syncing members automatically from groups.'
    >
        <div className='group-teams-and-channels'>
            <div className='group-teams-and-channels--body'>
                <SyncGroupsToggle
                    isPublic={isPublic}
                    isSynced={isSynced}
                    onToggle={onToggle}
                />
                <AllowAllToggle
                    isPublic={isPublic}
                    isSynced={isSynced}
                    onToggle={onToggle}
                />
            </div>
        </div>
    </AdminPanel>);

ChannelModes.propTypes = {
    isPublic: PropTypes.bool.isRequired,
    isSynced: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};
