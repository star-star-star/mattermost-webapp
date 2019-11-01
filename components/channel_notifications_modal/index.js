// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateChannelNotifyProps} from 'mattermost-redux/actions/channels';
import {getConfig} from 'mattermost-redux/selectors/entities/general';
import {getMyCurrentChannelMembership} from 'mattermost-redux/selectors/entities/channels';

import ChannelNotificationsModal from './channel_notifications_modal.jsx';

const mapStateToProps = (state) => ({
    channelMember: getMyCurrentChannelMembership(state),
    sendPushNotifications: getConfig(state).SendPushNotifications === 'true',
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        updateChannelNotifyProps,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelNotificationsModal);
