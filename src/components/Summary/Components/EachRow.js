import React, { Component } from 'react';

export class EachRow extends Component {

    render() {

        const { file } = this.props;

        return (
            <tr>
                <td class="icon">
                    {file.type === 'file' ? (
                        <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img">
                            <path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path>
                        </svg>
                    ) : file.type === 'folder' ? (<svg aria-label="directory" class="octicon octicon-file-directory" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img">
                            <path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
                        </svg>
                        ) : <span/>
                    }

                </td>
                <td class="content">
                    <span class="css-truncate css-truncate-target span-filename"><span
                        title={file.title}
                        onClick={() => this.props.selectFile(file)}>{file.title}</span>
                    </span>
                </td>
                <td class="age">
                    <span class="css-truncate css-truncate-target">{file.date}</span>
                </td>
            </tr>

        );
    }
}

export default EachRow;