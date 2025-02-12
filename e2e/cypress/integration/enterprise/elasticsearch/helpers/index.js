// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import * as TIMEOUTS from '../../../../fixtures/timeouts';

module.exports = {
    withTimestamp: (string, timestamp) => {
        return string + '-' + timestamp;
    },
    createEmail: (name, timestamp) => {
        return name + timestamp + '@sample.NeoAi.com';
    },
    enableElasticSearch: () => {
        // Enabled elastic search via the API
        cy.apiUpdateConfig({
            ElasticsearchSettings: {
                EnableAutocomplete: true,
                EnableIndexing: true,
                EnableSearching: true,
                Sniff: false,
            },
        });

        cy.apiLogin('sysadmin');

        // Navigate to the elastic search setting page
        cy.visit('/admin_console/environment/elasticsearch');

        // Test the connection and verify that we are successful
        cy.contains('button', 'Test Connection').click();
        cy.get('.alert-success').should('have.text', 'Test successful. Configuration saved.');

        // Index so we are up to date
        cy.contains('button', 'Index Now').click();

        // Small wait to ensure new row is added
        cy.wait(TIMEOUTS.TINY);

        // Newest row should eventuall result in Success
        cy.get('.job-table__table').find('tbody > tr').eq(0).as('firstRow').find('.status-icon-warning', {timeout: TIMEOUTS.LARGE}).should('be.visible');
        cy.get('@firstRow').find('.status-icon-success', {timeout: TIMEOUTS.GIGANTIC}).should('be.visible');
    },
    disableElasticSearch: () => {
        // Disable elastic search via API
        cy.apiUpdateConfig({
            ElasticsearchSettings: {
                EnableAutocomplete: false,
                EnableIndexing: false,
                EnableSearching: false,
                Sniff: false,
            },
        });
    },
};