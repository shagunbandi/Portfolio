import React, { Component } from 'react';

import { connect } from 'react-redux';
import profileImage from '../../../assets/images/profileImage.jpg'
import { EachRow } from './EachRow';


export class DirectoryContainer extends Component {

    // selectFile = file => {

    // }



    render() {

        var content = []
        this.props.files.forEach(file => {
            content.push(
                <EachRow file={file} selectFile={this.props.selectFile} />
            )
        });

        return (
            <div class="Box mb-3 Box--condensed">
                <div class="Box-header Box-header--blue position-relative "
                    style={{ marginBottom: "1px" }}>
                    <div class="commit-tease Details d-flex rounded-top-1 flex-auto">
                        
                        <div class="AvatarStack flex-self-start ">
                            <img height="20" width="20" alt="@shagunbandi" src={profileImage} />
                        </div>
                        
                        <div class="flex-auto f6 mr-3">
                            <span className="text-bold">shagunbandi&nbsp;</span>
                            <span>Updated Overview.md</span>

                        </div>
                        <div class="d-flex flex-self-start flex-items-baseline">
                            {/* <span>Write something Here right text</span> */}
                        </div>
                        
                    </div>
                </div>
                <h2 id="files" class="sr-only">Files</h2>

                <table class="files">
                    <tbody>
                        {content}
                    </tbody>
                </table>
            </div>

        );
    }
}
export default connect()(DirectoryContainer);
