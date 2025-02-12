// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// ***************************************************************
// - [#] indicates a test step (e.g. # Go to a page)
// - [*] indicates an assertion (e.g. * Check the title)
// - Use element ID when selecting an element. Create one if none.
// ***************************************************************

describe('Search', () => {
    it('S14548 Search results Right-Hand-Side: Post a comment', () => {
        // # Login and navigate to the app
        cy.apiLogin('user-1');
        cy.visit('/');

        const message = `asparagus${Date.now()}`;
        const comment = 'Replying to asparagus';

        // # Post a new message
        cy.postMessage(message);

        // # Search for the text we just entered
        cy.get('#searchBox').type(message).type('{enter}');

        // # Get last postId
        cy.getLastPostId().then((postId) => {
            const postMessageText = `#postMessageText_${postId}`;

            // * Search results should have our original message
            cy.get('#search-items-container').find(postMessageText).should('have.text', `${message}`);

            // # Click on the reply button on the search result
            cy.clickPostCommentIcon(postId, 'SEARCH');

            // # Reply with a comment
            cy.get('#reply_textbox').type(`${comment}{enter}`);

            // * Verify sidebar is still open
            cy.get('#rhsContainer').should('be.visible');

            // * Verify that the original message is in the RHS
            cy.get('#rhsContainer').find(postMessageText).should('have.text', `${message}`);
        });

        // # Get the comment id
        cy.getLastPostId().then((commentId) => {
            const commentText = `#postMessageText_${commentId}`;

            // * Verify comment in RHS
            cy.get('#rhsContainer').find(commentText).should('have.text', `${comment}`);

            // * Verify comment main thread
            cy.get('#postListContent').find(commentText).should('have.text', `${comment}`);
        });
    });
});
