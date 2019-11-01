// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

import {localizeMessage} from 'utils/utils';
import {ChannelHeaderDropdownItems} from 'components/channel_header_dropdown';
import Menu from 'components/widgets/menu/menu.jsx';

export default class ChannelHeaderDropdown extends React.PureComponent {
    render() {
        return (
            <Menu
                id='channelHeaderDropdownMenu'
                ariaLabel={localizeMessage('channel_header.menuAriaLabel', 'Channel Menu').toLowerCase()}
            >
                <ChannelHeaderDropdownItems isMobile={false}/>
            </Menu>
        );
    }
}
