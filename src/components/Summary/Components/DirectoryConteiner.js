import React, { Component } from 'react';

import { connect } from 'react-redux';


export class DirectoryContainer extends Component {

    render() {
        return (
            <div class="Box mb-3 Box--condensed">
                <div class="Box-header Box-header--blue position-relative "
                    style={{ marginBottom: "1px" }}>
                    <div class="commit-tease js-details-container Details d-flex rounded-top-1 flex-auto" data-issue-and-pr-hovercards-enabled>


                        <div class="AvatarStack flex-self-start ">
                            <div class="AvatarStack-body" aria-label="shagunbandi">
                                <a class="avatar avatar-user" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/users/shagunbandi/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/shagunbandi">
                                    <img height="20" width="20" alt="@shagunbandi" src="https://avatars1.githubusercontent.com/u/18301341?s=60&amp;u=03931fadfdfe71667c4a4544c67bedf89442c045&amp;v=4" class=" avatar-user" />
                                </a>  </div>
                        </div>

                        <div class="flex-auto f6 mr-3">

                            <a href="/shagunbandi/PhotoAlbumHere/commits?author=shagunbandi"
                                class="commit-author tooltipped tooltipped-s user-mention"
                                aria-label="View all commits by shagunbandi">&nbsp;shagunbandi&nbsp;</a>
                            <span>Updated Overview.md</span>

                        </div>
                        <div class="no-wrap d-flex flex-self-start flex-items-baseline">
                            <span>Latest commit &nbsp;</span>
                            <span>:D&nbsp;</span>
                            <span>18th May, 2020</span>
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
