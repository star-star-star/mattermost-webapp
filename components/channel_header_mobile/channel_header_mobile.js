// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import PropTypes from 'prop-types';

import {MobileChannelHeaderDropdown} from 'components/channel_header_dropdown';
import MobileChannelHeaderPlug from 'plugins/mobile_channel_header_plug';

import * as Utils from 'utils/utils';

import CollapseLhsButton from './collapse_lhs_button';
import CollapseRhsButton from './collapse_rhs_button';
import ChannelInfoButton from './channel_info_button';
import ShowSearchButton from './show_search_button';
import UnmuteChannelButton from './unmute_channel_button';

export default class ChannelHeaderMobile extends React.PureComponent {
    static propTypes = {

        /**
         *
         */
        user: PropTypes.object.isRequired,

        /**
         * Object with info about current channel
         */
        channel: PropTypes.object,

        /**
         * Bool whether the current channel is read only
         */
        isReadOnly: PropTypes.bool,

        /**
         * Bool whether the current channel is muted
         */
        isMuted: PropTypes.bool,

        /**
         * Object with action creators
         */
        actions: PropTypes.shape({
            closeLhs: PropTypes.func.isRequired,
            closeRhs: PropTypes.func.isRequired,
            closeRhsMenu: PropTypes.func.isRequired,
        }).isRequired,
    };

    componentDidMount() {
        document.querySelector('.inner-wrap').addEventListener('click', this.hideSidebars);
    }

    componentWillUnmount() {
        document.querySelector('.inner-wrap').removeEventListener('click', this.hideSidebars);
    }

    hideSidebars = (e) => {
        if (Utils.isMobile()) {
            this.props.actions.closeRhs();

            if (e.target.className !== 'navbar-toggle' && e.target.className !== 'icon-bar') {
                this.props.actions.closeLhs();
                this.props.actions.closeRhsMenu();
            }
        }
    }

    render() {
        const {user, channel, isMuted} = this.props;

        return (
            <nav
                id='navbar'
                className='navbar navbar-default navbar-fixed-top'
                role='navigation'
            >
                <div className='container-fluid theme'>
                    <div className='navbar-header'>
                        <CollapseLhsButton/>
                        {channel && (
                            <React.Fragment>
                                <div className='navbar-brand'>
                                    <MobileChannelHeaderDropdown/>
                                    {isMuted && (
                                        <UnmuteChannelButton
                                            user={user}
                                            channel={channel}
                                        />
                                    )}
                                </div>
                                <ChannelInfoButton
                                    ref='headerOverlay'
                                    channel={channel}
                                    isReadOnly={this.props.isReadOnly}
                                />
                                <ShowSearchButton/>
                                <MobileChannelHeaderPlug
                                    channel={channel}
                                    isDropdown={false}
                                />
                            </React.Fragment>
                        )}
                        <CollapseRhsButton/>
                    </div>
                </div>
            </nav>
        );
    }
}
