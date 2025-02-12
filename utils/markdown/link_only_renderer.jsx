// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {getScheme} from 'utils/url';

import RemoveMarkdown from './remove_markdown';

export default class LinkOnlyRenderer extends RemoveMarkdown {
    link(href, title, text) {
        let outHref = href;

        if (!getScheme(href)) {
            outHref = `http://${outHref}`;
        }

        let output = `<a class="theme markdown__link" href="${outHref}" target="_blank"`;

        if (title) {
            output += ' title="' + title + '"';
        }

        output += `>${text}</a>`;

        return output;
    }
}
