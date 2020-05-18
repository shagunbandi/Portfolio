import React, { Component } from 'react';

import { connect } from 'react-redux';
import profileImage from '../../../assets/profileImage.jpg'


export class DirectoryContainer extends Component {

    render() {
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




                        <thead>
                            <tr>
                                <th><span class="sr-only">Type</span></th>
                                <th><span class="sr-only">Name</span></th>
                            </tr>
                        </thead>


                        <tbody>

                            <tr class="js-navigation-item">
                                <td class="icon">
                                    <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img">
                                        <path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path>
                                    </svg>
                                </td>
                                <td class="content">
                                    <span class="css-truncate css-truncate-target"><a title="DjangoBackEnd" href="/shagunbandi/PhotoAlbumHere/tree/master/DjangoBackEnd">Overview.md</a></span>
                                </td>
                            </tr>

                            <tr class="js-navigation-item">
                                <td class="icon">
                                    <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img">
                                        <path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path>
                                    </svg>
                                </td>
                                <td class="content">
                                    <span class="css-truncate css-truncate-target"><a title="DjangoBackEnd" href="/shagunbandi/PhotoAlbumHere/tree/master/DjangoBackEnd">WorkLife.md</a></span>
                                </td>
                            </tr>

                            <tr class="js-navigation-item">
                                <td class="icon">
                                    <svg aria-label="file" class="octicon octicon-file" viewBox="0 0 12 16" version="1.1" width="12" height="16" role="img">
                                        <path fill-rule="evenodd" d="M6 5H2V4h4v1zM2 8h7V7H2v1zm0 2h7V9H2v1zm0 2h7v-1H2v1zm10-7.5V14c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1h7.5L12 4.5zM11 5L8 2H1v12h10V5z"></path>
                                    </svg>
                                </td>
                                <td class="content">
                                    <span class="css-truncate css-truncate-target"><a title="DjangoBackEnd" href="/shagunbandi/PhotoAlbumHere/tree/master/DjangoBackEnd">Education.md</a></span>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </include-fragment>


            </div>

        );
    }
}
export default connect()(DirectoryContainer);
