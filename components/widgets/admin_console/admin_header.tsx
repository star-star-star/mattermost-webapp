// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

type Props = {
    children: React.ReactNode;
};

export default class AdminHeader extends React.Component<Props> {
    public render() {
        return (
            <div className={'admin-console__header'}>
                {this.props.children}
            </div>
        );
    }
}
