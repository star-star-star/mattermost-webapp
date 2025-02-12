// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export function popOverOverlayPosition(targetBounds, innerHeight, spaceRequiredOptions) {
    const {above, below} = spaceRequiredOptions;
    let placement;

    if (targetBounds.top > above) {
        placement = 'top';
    } else if (innerHeight - targetBounds.bottom > (below || above)) {
        placement = 'bottom';
    } else {
        placement = 'left';
    }
    return placement;
}
