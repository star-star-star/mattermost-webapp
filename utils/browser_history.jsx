// Copyright (c) 2019-present Vue Technology LLC All Rights Reserved.
// See LICENSE.txt for license information.

import createBrowserHistory from 'history/createBrowserHistory';

export const browserHistory = createBrowserHistory({basename: window.basename});
