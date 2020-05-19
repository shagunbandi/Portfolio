import React, { Component } from 'react';
import profileImage from '../../../assets/images/profileImage.jpg'

export class Profile extends Component {

    render() {
        return (
            <div className="clearfix">
                <div className="float-left col-3 col-md-12 pr-3 pr-md-0" style={{ padding: "0" }}>
                    <a itemProp="image" className="u-photo d-block position-relative"
                        href={profileImage}>
                        <img alt="" width="260" height="260"
                            className="avatar width-full height-full avatar-before-user-status"
                            src={profileImage} />
                    </a>
                </div>

                <div className="float-md-left col-12" style={{padding:"0"}}>
                    <div className="user-status-container border position-relative hide-sm hide-md ">
                        <div className="d-flex">
                            <div className="d-flex p-2 width-full">
                                <div className="user-status-message-wrapper f6 mt-1 text-gray-dark ws-normal " >
                                    <div>Working from home</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="vcard-names-container float-left col-9 col-md-12 pt-1 pt-md-3 pb-1 pb-md-3"
                    style={{ padding: "0" }}>
                    <h1 className="vcard-names pl-2 pl-md-0">
                        <span className="p-name vcard-fullname d-block overflow-hidden">Shagun Bandi</span>
                        <span className="p-nickname vcard-username d-block">shagunbandi</span>
                    </h1>
                </div>
            </div>
        );
    }
}
export default Profile;
