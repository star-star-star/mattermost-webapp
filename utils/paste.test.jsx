// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {parseTable, getTable, formatMarkdownTableMessage} from 'utils/paste';

const validClipboardData = {
    items: [1],
    types: ['text/html'],
    getData: () => {
        return '<table><tr><td>test</td><td>test</td></tr><tr><td>test</td><td>test</td></tr></table>';
    },
};

const validTable = parseTable(validClipboardData.getData());

describe('Paste', () => {
    describe('Paste.getTable', () => {
        test('returns false without html in the clipboard', () => {
            const badClipboardData = {
                items: [1],
                types: ['text/plain'],
            };

            expect(getTable(badClipboardData)).toBe(false);
        });

        test('returns false without table in the clipboard', () => {
            const badClipboardData = {
                items: [1],
                types: ['text/html'],
                getData: () => '<p>There is no table here</p>',
            };

            expect(getTable(badClipboardData)).toBe(false);
        });

        test('returns table from valid clipboard data', () => {
            expect(getTable(validClipboardData)).toEqual(validTable);
        });
    });

    describe('Paste.formatMarkdownTableMessage', () => {
        const markdownTable = '|test | test|\n|--- | ---|\n|test | test|\n';

        test('returns a markdown table when valid html table provided', () => {
            expect(formatMarkdownTableMessage(validTable)).toBe(markdownTable);
        });

        test('returns a markdown table under a message when one is provided', () => {
            const testMessage = 'test message';

            expect(formatMarkdownTableMessage(validTable, testMessage)).toBe(`${testMessage}\n\n${markdownTable}`);
        });
    });
});
