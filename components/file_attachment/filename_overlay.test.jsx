// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {shallow} from 'enzyme';

import FilenameOverlay from 'components/file_attachment/filename_overlay.jsx';
import DownloadIcon from 'components/widgets/icons/download_icon';
import AttachmentIcon from 'components/widgets/icons/attachment_icon';

describe('components/file_attachment/FilenameOverlay', () => {
    function emptyFunction() {} //eslint-disable-line no-empty-function
    const fileInfo = {
        id: 'thumbnail_id',
        name: 'test_filename',
        extension: 'jpg',
        width: 100,
        height: 80,
        has_preview_image: true,
    };

    const baseProps = {
        fileInfo,
        handleImageClick: emptyFunction,
        compactDisplay: false,
        canDownload: true,
    };

    test('should match snapshot, standard display', () => {
        const wrapper = shallow(
            <FilenameOverlay {...baseProps}/>
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should match snapshot, compact display', () => {
        const handleImageClick = jest.fn();
        const props = {...baseProps, compactDisplay: true, handleImageClick};
        const wrapper = shallow(
            <FilenameOverlay {...props}/>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(AttachmentIcon).exists()).toBe(true);

        wrapper.find('a').first().simulate('click');
        expect(handleImageClick).toHaveBeenCalledTimes(1);
    });

    test('should match snapshot, with Download icon as children', () => {
        const props = {...baseProps, canDownload: true};
        const wrapper = shallow(
            <FilenameOverlay {...props}>
                <DownloadIcon/>
            </FilenameOverlay>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(DownloadIcon).exists()).toBe(true);
    });

    test('should match snapshot, standard but not downloadable', () => {
        const props = {...baseProps, canDownload: false};
        const wrapper = shallow(
            <FilenameOverlay {...props}>
                <DownloadIcon/>
            </FilenameOverlay>
        );

        expect(wrapper).toMatchSnapshot();
    });
});
