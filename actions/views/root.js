// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {getClientConfig, getLicenseConfig} from 'mattermost-redux/actions/general';
import * as UserActions from 'mattermost-redux/actions/users';
import {Client4} from 'mattermost-redux/client';

import {ActionTypes} from 'utils/constants';
import en from 'i18n/en.json';
import {getCurrentLocale, getTranslations} from 'selectors/i18n';

export function loadMeAndConfig() {
    return async (dispatch) => {
        // if any new promise needs to be added please be mindful of the order as it is used in root.jsx for redirection
        const promises = [
            dispatch(getClientConfig()),
            dispatch(getLicenseConfig()),
        ];

        // need to await for clientConfig first as it is required for loadMe
        const resolvedPromises = await Promise.all(promises);
        if (document.cookie.indexOf('MMUSERID=') > -1) {
            resolvedPromises.push(await dispatch(UserActions.loadMe()));
        }

        return resolvedPromises;
    };
}

const pluginTranslationSources = {};

export function registerPluginTranslationsSource(pluginId, sourceFunction) {
    pluginTranslationSources[pluginId] = sourceFunction;
    return (dispatch, getState) => {
        const state = getState();
        const locale = getCurrentLocale(state);
        const immutableTranslations = getTranslations(state, locale);
        const translations = {};
        Object.assign(translations, immutableTranslations);
        if (immutableTranslations) {
            copyAndDispatchTranslations(dispatch, translations, sourceFunction(locale), locale);
        }
    };
}

export function unregisterPluginTranslationsSource(pluginId) {
    Reflect.deleteProperty(pluginTranslationSources, pluginId);
}

export function loadTranslations(locale, url) {
    return (dispatch) => {
        const translations = {};
        Object.values(pluginTranslationSources).forEach((pluginFunc) => {
            Object.assign(translations, pluginFunc(locale));
        });

        // No need to go to the server for EN
        if (locale === 'en') {
            copyAndDispatchTranslations(dispatch, translations, en, locale);
            return;
        }
        Client4.getTranslations(url).then((serverTranslations) => {
            copyAndDispatchTranslations(dispatch, translations, serverTranslations, locale);
        }).catch(() => {}); // eslint-disable-line no-empty-function
    };
}

function copyAndDispatchTranslations(dispatch, translations, from, locale) {
    Object.assign(translations, from);
    dispatch({
        type: ActionTypes.RECEIVED_TRANSLATIONS,
        data: {
            locale,
            translations,
        },
    });
}