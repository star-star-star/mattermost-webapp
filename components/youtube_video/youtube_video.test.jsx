// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {shallow} from 'enzyme';
import React from 'react';

import ExternalImage from 'components/external_image';

import YoutubeVideo from './youtube_video';

jest.mock('actions/integration_actions');

describe('YoutubeVideo', () => {
    const baseProps = {
        googleDeveloperKey: 'googledevkey',
        hasImageProxy: false,
        link: 'https://www.youtube.com/watch?v=xqCoNej8Zxo',
        show: true,
        metadata: {
            title: 'Youtube title',
            images: [{
                secure_url: 'linkForThumbnail',
            }],
        },
    };

    test('should correctly parse youtube start time formats', () => {
        for (const youtube of [
            {
                link: 'https://www.youtube.com/watch?time_continue=490&v=xqCoNej8Zxo',
                time: '&start=490',
            },
            {
                link: 'https://www.youtube.com/watch?start=490&v=xqCoNej8Zxo',
                time: '&start=490',
            },
            {
                link: 'https://www.youtube.com/watch?t=490&v=xqCoNej8Zxo',
                time: '&start=490',
            },
        ]) {
            const wrapper = shallow(<YoutubeVideo {...baseProps}/>);

            expect(wrapper.instance().handleYoutubeTime(youtube.link)).toEqual(youtube.time);
        }
    });

    test('should match init snapshot', () => {
        const wrapper = shallow(<YoutubeVideo {...baseProps}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(ExternalImage).prop('src')).toEqual('linkForThumbnail');
        expect(wrapper.find('a').text()).toEqual('Youtube title');
    });

    test('should match snapshot for playing state', () => {
        const wrapper = shallow(<YoutubeVideo {...baseProps}/>);
        wrapper.setState({playing: true});
        expect(wrapper).toMatchSnapshot();
    });

    test('should use url if secure_url is not present', () => {
        const props = {
            ...baseProps,
            metadata: {
                title: 'Youtube title',
                images: [{
                    url: 'linkUrl',
                }],
            },
        };
        const wrapper = shallow(<YoutubeVideo {...props}/>);

        expect(wrapper.find(ExternalImage).prop('src')).toEqual('linkUrl');
    });
});
