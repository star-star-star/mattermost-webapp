// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedHTMLMessage, FormattedMessage} from 'react-intl';
import {Client4} from 'mattermost-redux/client';

import * as Utils from 'utils/utils.jsx';

import FormattedMarkdownMessage from 'components/formatted_markdown_message.jsx';
import WarningIcon from 'components/widgets/icons/fa_warning_icon';

import AdminSettings from './admin_settings.jsx';
import BooleanSetting from './boolean_setting.jsx';
import ClusterTableContainer from './cluster_table_container.jsx';
import SettingsGroup from './settings_group.jsx';
import TextSetting from './text_setting.jsx';

export default class ClusterSettings extends AdminSettings {
    getConfigFromState = (config) => {
        config.ClusterSettings.Enable = this.state.Enable;
        config.ClusterSettings.ClusterName = this.state.ClusterName;
        config.ClusterSettings.OverrideHostname = this.state.OverrideHostname;
        config.ClusterSettings.UseIpAddress = this.state.UseIpAddress;
        config.ClusterSettings.UseExperimentalGossip = this.state.UseExperimentalGossip;
        config.ClusterSettings.GossipPort = this.parseIntNonZero(this.state.GossipPort, 8074);
        config.ClusterSettings.StreamingPort = this.parseIntNonZero(this.state.StreamingPort, 8075);
        return config;
    }

    getStateFromConfig(config) {
        const settings = config.ClusterSettings;

        return {
            Enable: settings.Enable,
            ClusterName: settings.ClusterName,
            OverrideHostname: settings.OverrideHostname,
            UseIpAddress: settings.UseIpAddress,
            UseExperimentalGossip: settings.UseExperimentalGossip,
            GossipPort: settings.GossipPort,
            StreamingPort: settings.StreamingPort,
            showWarning: false,
        };
    }

    renderTitle() {
        return (
            <FormattedMessage
                id='admin.advance.cluster'
                defaultMessage='High Availability'
            />
        );
    }

    overrideHandleChange = (id, value) => {
        this.setState({
            showWarning: true,
        });

        this.handleChange(id, value);
    }

    renderSettings = () => {
        const licenseEnabled = this.props.license.IsLicensed === 'true' && this.props.license.Cluster === 'true';
        if (!licenseEnabled) {
            return null;
        }

        var configLoadedFromCluster = null;

        if (Client4.clusterId) {
            configLoadedFromCluster = (
                <div
                    style={style.configLoadedFromCluster}
                    className='alert alert-warning'
                >
                    <WarningIcon/>
                    <FormattedMarkdownMessage
                        id='admin.cluster.loadedFrom'
                        defaultMessage='This configuration file was loaded from Node ID {clusterId}. Please see the Troubleshooting Guide in our [documentation](!http://docs..NeoAi.com/deployment/cluster.html) if you are accessing the System Console through a load balancer and experiencing issues.'
                        values={{
                            clusterId: Client4.clusterId,
                        }}
                    />
                </div>
            );
        }

        var warning = null;

        if (this.state.showWarning) {
            warning = (
                <div
                    style={style.warning}
                    className='alert alert-warning'
                >
                    <WarningIcon/>
                    <FormattedMarkdownMessage
                        id='admin.cluster.should_not_change'
                        defaultMessage='WARNING: These settings may not sync with the other servers in the cluster. High Availability inter-node communication will not start until you modify the config.json to be identical on all servers and restart Neo Ai. Please see the [documentation](!http://docs..NeoAi.com/deployment/cluster.html) on how to add or remove a server from the cluster. If you are accessing the System Console through a load balancer and experiencing issues, please see the Troubleshooting Guide in our [documentation](!http://docs..NeoAi.com/deployment/cluster.html).'
                    />
                </div>
            );
        }

        var clusterTableContainer = null;
        if (this.state.Enable) {
            clusterTableContainer = (<ClusterTableContainer/>);
        }

        return (
            <SettingsGroup>
                {configLoadedFromCluster}
                {clusterTableContainer}
                <div className='banner'>
                    <FormattedMessage
                        id='admin.cluster.noteDescription'
                        defaultMessage='Changing properties in this section will require a server restart before taking effect.'
                    />
                </div>
                {warning}
                <BooleanSetting
                    id='Enable'
                    label={
                        <FormattedMessage
                            id='admin.cluster.enableTitle'
                            defaultMessage='Enable High Availability Mode:'
                        />
                    }
                    helpText={
                        <FormattedMarkdownMessage
                            id='admin.cluster.enableDescription'
                            defaultMessage='When true, Neo Ai will run in High Availability mode. Please see [documentation](!http://docs..NeoAi.com/deployment/cluster.html) to learn more about configuring High Availability for Neo Ai.'
                        />
                    }
                    value={this.state.Enable}
                    onChange={this.overrideHandleChange}
                    setByEnv={this.isSetByEnv('ClusterSettings.Enable')}
                />
                <TextSetting
                    id='ClusterName'
                    label={
                        <FormattedMessage
                            id='admin.cluster.ClusterName'
                            defaultMessage='Cluster Name:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.cluster.ClusterNameEx', 'E.g.: "Production" or "Staging"')}
                    helpText={
                        <FormattedMessage
                            id='admin.cluster.ClusterNameDesc'
                            defaultMessage='The cluster to join by name.  Only nodes with the same cluster name will join together.  This is to support Blue-Green deployments or staging pointing to the same database.'
                        />
                    }
                    value={this.state.ClusterName}
                    onChange={this.overrideHandleChange}
                    setByEnv={this.isSetByEnv('ClusterSettings.ClusterName')}
                />
                <TextSetting
                    id='OverrideHostname'
                    label={
                        <FormattedMessage
                            id='admin.cluster.OverrideHostname'
                            defaultMessage='Override Hostname:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.cluster.OverrideHostnameEx', 'E.g.: "app-server-01"')}
                    helpText={
                        <FormattedMessage
                            id='admin.cluster.OverrideHostnameDesc'
                            defaultMessage='The default value of <blank> will attempt to get the Hostname from the OS or use the IP Address.  You can override the hostname of this server with this property.  It is not recommended to override the Hostname unless needed. This property can also be set to a specific IP Address if needed.'
                        />
                    }
                    value={this.state.OverrideHostname}
                    onChange={this.overrideHandleChange}
                    setByEnv={this.isSetByEnv('ClusterSettings.OverrideHostname')}
                />
                <BooleanSetting
                    id='UseIpAddress'
                    label={
                        <FormattedMessage
                            id='admin.cluster.UseIpAddress'
                            defaultMessage='Use IP Address:'
                        />
                    }
                    helpText={
                        <FormattedHTMLMessage
                            id='admin.cluster.UseIpAddressDesc'
                            defaultMessage='When true, the cluster will attempt to communicate via IP Address vs using the hostname.'
                        />
                    }
                    value={this.state.UseIpAddress}
                    onChange={this.overrideHandleChange}
                    setByEnv={this.isSetByEnv('ClusterSettings.UseIpAddress')}
                />
                <BooleanSetting
                    id='UseExperimentalGossip'
                    label={
                        <FormattedMessage
                            id='admin.cluster.UseExperimentalGossip'
                            defaultMessage='Use Experimental Gossip:'
                        />
                    }
                    helpText={
                        <FormattedHTMLMessage
                            id='admin.cluster.UseExperimentalGossipDesc'
                            defaultMessage='When true, the server will attempt to communicate via the gossip protocol over the gossip port.  When false the server will attempt to communicate over the streaming port. When false the gossip port and protocol are still used to determine cluster health.'
                        />
                    }
                    value={this.state.UseExperimentalGossip}
                    onChange={this.overrideHandleChange}
                    setByEnv={this.isSetByEnv('ClusterSettings.UseExperimentalGossip')}
                />
                <TextSetting
                    id='GossipPort'
                    label={
                        <FormattedMessage
                            id='admin.cluster.GossipPort'
                            defaultMessage='Gossip Port:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.cluster.GossipPortEx', 'E.g.: "8074"')}
                    helpText={
                        <FormattedMessage
                            id='admin.cluster.GossipPortDesc'
                            defaultMessage='The port used for the gossip protocol.  Both UDP and TCP should be allowed on this port.'
                        />
                    }
                    value={this.state.GossipPort}
                    onChange={this.overrideHandleChange}
                    setByEnv={this.isSetByEnv('ClusterSettings.GossipPort')}
                />
                <TextSetting
                    id='StreamingPort'
                    label={
                        <FormattedMessage
                            id='admin.cluster.StreamingPort'
                            defaultMessage='Streaming Port:'
                        />
                    }
                    placeholder={Utils.localizeMessage('admin.cluster.StreamingPortEx', 'E.g.: "8075"')}
                    helpText={
                        <FormattedMessage
                            id='admin.cluster.StreamingPortDesc'
                            defaultMessage='The port used for streaming data between servers.'
                        />
                    }
                    value={this.state.StreamingPort}
                    onChange={this.overrideHandleChange}
                    setByEnv={this.isSetByEnv('ClusterSettings.StreamingPort')}
                />
            </SettingsGroup>
        );
    }
}

const style = {
    configLoadedFromCluster: {marginBottom: 10},
    warning: {marginBottom: 10},
};
