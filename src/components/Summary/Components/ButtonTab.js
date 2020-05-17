import React, { Component } from 'react';

import { connect } from 'react-redux';


export class ButtonTab extends Component {

    render() {
        return (
            <div class="file-navigation in-mid-page mb-2 d-flex flex-items-start">

                <span class="btn btn-sm new-pull-request-btn ml-2" >Contact Me</span>
                <span class="btn btn-sm new-pull-request-btn ml-2">Github</span>
                <div class="flex-auto" />
                
                <div class="BtnGroup ml-2">
                    <span class="btn btn-sm BtnGroup-item">LinkedIn</span>
                    <span class="btn btn-sm BtnGroup-item">Instagram</span>
                    <span class="btn btn-sm BtnGroup-item">Facebook</span>
                </div>


                <span class="d-flex">
                    <span class="btn btn-sm ml-2 btn-primary" >Download Resume</span>
                </span>

            </div>
        );
    }
}
export default connect()(ButtonTab);
