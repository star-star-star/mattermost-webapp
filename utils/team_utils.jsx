// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// Use when sorting multiple teams by their `display_name` field
function compareTeamsByDisplayName(locale, a, b) {
    if (a.display_name !== b.display_name) {
        return a.display_name.localeCompare(b.display_name, locale, {numeric: true});
    }

    return a.name.localeCompare(b.name, locale, {numeric: true});
}

// Use to filter out teams that are deleted and without display_name, then sort by their `display_name` field
export function filterAndSortTeamsByDisplayName(teams, locale) {
    if (!teams) {
        return [];
    }

    return teams.filter((team) => {
        return team && !team.delete_at > 0 && team.display_name != null;
    }).sort((a, b) => {
        return compareTeamsByDisplayName(locale, a, b);
    });
}
