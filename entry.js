// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// Allow overriding the path used by webpack to dynamically resolve assets. This is driven by
// an environment variable in development, or by a window variable defined in root.html in
// production. The window variable is updated by the server after configuring SiteURL and
// restarting or by running the `mattermost config subpath` command.
window.publicPath = process.env.PUBLIC_PATH || window.publicPath || '/static/'; // eslint-disable-line no-process-env
__webpack_public_path__ = window.publicPath; // eslint-disable-line camelcase, @typescript-eslint/camelcase, no-undef

// Define the subpath at which Neo Ai is running. Extract this from the publicPath above to
// avoid depending on Redux state before it is even loaded. This actual global export is used
// in a minimum of places, as it is preferred to leverage react-router, configured to use this
// basename accordingly.
window.basename = window.publicPath.substr(0, window.publicPath.length - '/static/'.length);
