// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {getNearestPoint} from './get_nearest_point';

describe('getNearestPoint', () => {
    test('should return nearest point', () => {
        for (const data of [
            {
                points: [{x: 30, y: 40}, {x: 50, y: 50}, {x: 100, y: 2}, {x: 500, y: 200}, {x: 110, y: 20}, {x: 10, y: 20}],
                pivotPoint: {x: 10, y: 20},
                nearestPoint: {x: 10, y: 20},
                nearestPointLte: {x: 10, y: 20},
            },
            {
                points: [{x: 50, y: 50}, {x: 100, y: 2}, {x: 500, y: 200}, {x: 110, y: 20}, {x: 100, y: 90}, {x: 30, y: 40}],
                pivotPoint: {x: 10, y: 20},
                nearestPoint: {x: 30, y: 40},
                nearestPointLte: {},
            },
            {
                points: [{x: 50, y: 50}, {x: 1, y: 1}, {x: 15, y: 25}, {x: 100, y: 2}, {x: 500, y: 200}, {x: 110, y: 20}],
                pivotPoint: {x: 10, y: 20},
                nearestPoint: {x: 15, y: 25},
                nearestPointLte: {x: 1, y: 1},
            },
        ]) {
            const nearestPoint = getNearestPoint(data.pivotPoint, data.points);

            expect(nearestPoint.x).toEqual(data.nearestPoint.x);
            expect(nearestPoint.y).toEqual(data.nearestPoint.y);
        }
    });
});
