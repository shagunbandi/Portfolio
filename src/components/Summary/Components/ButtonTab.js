import React, { Component } from 'react';

import { connect } from 'react-redux';
import cv from '../../../assets/shagunbandi.pdf';


export class ButtonTab extends Component {

    render() {
        return (
            <div style={{ paddingTop: "5px", paddingBottom: "5px" }}>
                <div className="hide-when-small">
                    <div className="mt-2 mb-2 d-flex flex-items-start">
                        <a href="mailto:shagunamitbandi@gmail.com" className="btn btn-sm new-pull-request-btn ml-2" >Contact Me</a>
                        <a target="_blank" href="https://github.com/shagunbandi" className="btn btn-sm new-pull-request-btn ml-2">Github</a>
                        <div className="flex-auto" />
                        <div className="BtnGroup ml-2">
                            <a target="_blank" href="https://www.linkedin.com/in/shagunbandi/" className="btn btn-sm BtnGroup-item">LinkedIn</a>
                            <a target="_blank" href="https://www.instagram.com/poha.jalebi.sev/" className="btn btn-sm BtnGroup-item">Instagram</a>
                            <a target="_blank" href="https://www.facebook.com/shagunbandi" className="btn btn-sm BtnGroup-item">Facebook</a>
                        </div>
                        <span className="d-flex">
                            <a target="_blank" href={cv} className="btn btn-sm ml-2 btn-primary" >Download Resume</a>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(ButtonTab);
