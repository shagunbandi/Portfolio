import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageBox } from './ImageBox';
import { ImageFullScreen } from './ImageFullScreen';

import photos from '../../assets/images/images'
export class Photography extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullUI: false
        };
    }

    showFullUI = () => {
        this.setState({ fullUI: true });
    }

    render() {

        var content = []
        photos.forEach(photo => {
            content.push(
                <ImageBox img={photo.photo} title={photo.title} square={photo.square} />
            )
        });

        return (
            <div class="container-lg clearfix new-discussion-timeline">
                <br />
                <h1 style={{ textAlign: "center" }}>Photography</h1>
                <hr />
                <span style={{ textAlign: "right", width: "100%" }}><p className="span-filename" onClick={() => { this.showFullUI() }}>View in Full Screen (Beta)</p></span>
                <div style={{ width: "100%" }}>
                    <div className="col-md-12 row p-0 m-0">
                        {content}
                    </div>
                </div>
                {this.state.fullUI ?
                    <div className="full-screen-ui">
                        <ImageFullScreen photos={photos} />
                    </div>
                    : <span />}
            </div>
        );
    }
}
export default connect()(Photography);
