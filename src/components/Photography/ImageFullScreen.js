import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArrowKeysReact from 'arrow-keys-react';

export class ImageFullScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected:1
        };
    }

    selectThisImage = (index) => {
        this.setState({ selected: index });
    }

    render() {
        
        const { photos } = this.props;

        ArrowKeysReact.config({
            left: () => {
                let prevImage = (photos.length + this.state.selected - 1) % photos.length;
                this.setState({ selected: prevImage });
            },
            right: () => {
                let nextImage = (this.state.selected + 1) % photos.length;
                this.setState({ selected: nextImage});
            }
        });

        var content = []
        photos.forEach((photo, index) => {
            if (index === this.state.selected) {
                content.push(
                    <img src={photo.photo} alt={photo.title} className="minbar-items selected-image" onClick={() => { this.selectThisImage(index) }} />
                )
            }
            else{
                content.push(
                    <img src={photo.photo} alt={photo.title} className="minbar-items image-hover-effect-negative" onClick={() => { this.selectThisImage(index)}}/>
                )
            }
        });

        const selectedImageObject = photos[this.state.selected];
        const selectedImage = selectedImageObject.photo;
        const description = selectedImageObject.description;
        const title = selectedImageObject.title;
        
        return (
            <div {...ArrowKeysReact.events} tabIndex="1">
                <div className="">
                    <div className="row p-3 height-80vh">
                        <div className="col-md-3 center-everything">
                            <div className="left-text">
                                <h1>{title}</h1>
                                <hr />
                                {/* <h2>{subtitle}</h2> */}
                                {/* <br /> */}
                                <p>{description}</p>
                            </div>
                        </div>
                        <div className="col-md-9 image-div center-everything">
                            <img src={selectedImage} alt="img1" className="img-style" />
                        </div>
                    </div>
                    <div className="height-20vh minibar">
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(ImageFullScreen);
