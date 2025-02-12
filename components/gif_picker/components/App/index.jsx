// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {saveAppProps} from 'mattermost-redux/actions/gifs';

import Header from 'components/gif_picker/components/Header';

const mapDispatchToProps = ({
    saveAppProps,
});

export class App extends PureComponent {
    static propTypes = {
        appProps: PropTypes.object,
        action: PropTypes.string,
        onCategories: PropTypes.func,
        onSearch: PropTypes.func,
        onTrending: PropTypes.func,
        children: PropTypes.object,
        saveAppProps: PropTypes.func,
        authenticateSdk: PropTypes.func,
    }

    constructor(props) {
        super(props);
        const {appProps} = this.props;
        this.props.saveAppProps(appProps);
    }

    render() {
        const {
            appProps,
            action,
            onCategories,
            onSearch,
            onTrending,
            children,
        } = this.props;
        const appClassName = 'main-container ' + (appProps.appClassName || '');
        return (
            <div className={appClassName}>
                <Header
                    appProps={appProps}
                    action={action}
                    onCategories={onCategories}
                    onSearch={onSearch}
                    onTrending={onTrending}
                />
                <div className='component-container'>
                    {children}
                </div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(App);
