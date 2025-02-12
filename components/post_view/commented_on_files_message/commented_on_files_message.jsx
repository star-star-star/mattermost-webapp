// Copyright (c) 2019-present Neo Ai Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import PropTypes from 'prop-types';
import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class CommentedOnFilesMessage extends React.PureComponent {
    static propTypes = {

        /*
         * The id of the post that was commented on
         */
        parentPostId: PropTypes.string.isRequired,

        /*
         * An array of file metadata for the parent post
         */
        fileInfos: PropTypes.arrayOf(PropTypes.object),
    }

    render() {
        if (!this.props.fileInfos || this.props.fileInfos.length === 0) {
            return null;
        }

        let plusMore = null;
        if (this.props.fileInfos.length > 1) {
            plusMore = (
                <FormattedMessage
                    id='post_body.plusMore'
                    defaultMessage=' plus {count, number} other {count, plural, one {file} other {files}}'
                    values={{
                        count: this.props.fileInfos.length - 1,
                    }}
                />
            );
        }

        return (
            <span>
                {this.props.fileInfos[0].name}
                {plusMore}
            </span>
        );
    }
}
