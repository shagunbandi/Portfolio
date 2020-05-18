import React, { Component } from 'react';

import { connect } from 'react-redux';
import profileImage from '../../../assets/profileImage.jpg'
import { EachRow } from './EachRow';


export class DirectoryContainer extends Component {

    render() {

        var content = []
        this.props.filenames.forEach(filename => {
            content.push(
                <EachRow title={filename} selectFile={this.props.selectFile} />
            )
        });

        return (
            <div class="Box mb-3 Box--condensed">
                <div class="Box-header Box-header--blue position-relative "
                    style={{ marginBottom: "1px" }}>
                    <div class="commit-tease js-details-container Details d-flex rounded-top-1 flex-auto" data-issue-and-pr-hovercards-enabled>
                        
                        <div class="AvatarStack flex-self-start ">
                            <img height="20" width="20" alt="@shagunbandi" src={profileImage} />
                        </div>
                        
                        <div class="flex-auto f6 mr-3">
                            <span className="text-bold">shagunbandi&nbsp;</span>
                            <span>Updated Overview.md</span>

                        </div>
                        <div class="d-flex flex-self-start flex-items-baseline">
                            <span>Latest commit :D 20th May, 2020</span>
                        </div>
                        
                    </div>
                </div>
                <h2 id="files" class="sr-only">Files</h2>



                <include-fragment src="/shagunbandi/PhotoAlbumHere/file-list/master">
                    <table class="files js-navigation-container js-active-navigation-container " data-pjax>
                        <tbody>
                            {content}
                        </tbody>
                    </table>

                </include-fragment>


            </div>

        );
    }
}
export default connect()(DirectoryContainer);
