import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ImageBox } from './ImageBox';
import {ImageFullScreen} from './ImageFullScreen';

const photo1 = require('../../assets/images/photography/photo1.jpg')
const photo2 = require('../../assets/images/photography/photo2.jpg')
const photo6 = require('../../assets/images/photography/photo6.jpg')
const photo8 = require('../../assets/images/photography/photo8.jpg')
const photo12 = require('../../assets/images/photography/photo12.jpg')

const photo1_square = require('../../assets/images/photography/photo1_square.jpg')
const photo2_square = require('../../assets/images/photography/photo2_square.jpg')
const photo6_square = require('../../assets/images/photography/photo6_square.jpg')
const photo8_square = require('../../assets/images/photography/photo8_square.jpg')
const photo12_square = require('../../assets/images/photography/photo12_square.jpg')

const squirrlel = require('../../assets/images/photography/landscape2.jpg')


const photos = [
    {
        title: "Sigree Gobal Grill",
        photo: photo1,
        description: "Sigree Gobal Grill",
        square: photo1_square
    },
    {
        title: "Dawki",
        photo: photo12,
        description: "Dawki",
        square: photo12_square
    },
    {
        title: "Dawki",
        photo: photo2,
        description: "Dawki",
        square: photo2_square
    },
    {
        title: "shravanbelgola",

        photo: photo6,
        description: "shravanbelgola",
        square: photo6_square
    },
    {
        title: "Lamp",
        photo: photo8,
        description: "Lamp",
        square: photo8_square
    }
]

export class Photography extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullUI: false
        };
    }

    showFullUI = () => {
        console.log("Showing Full UI")
        this.setState({ fullUI: true });
    }

    render() {

        var content = []
        photos.forEach(photo => {
            content.push(
                <ImageBox img={photo.photo} title={photo.description} square={photo.square}/>
            )
        });

        return (
            <div class="container-lg clearfix new-discussion-timeline  px-3">
                <br />
                <h1 style={{ textAlign: "center" }}>Photography</h1>
                <hr />
                <span style={{ textAlign: "right", width: "100%" }}><p className="span-filename" onClick={() => {this.showFullUI()}}>I Wish the UI was better for Photos</p></span>
                <div className="container" style={{ width: "100%" }}>
                    <div className="col-md-12 row p-0 m-0">
                        {content}
                    </div>
                </div>
                {this.state.fullUI ? <div className="full-screen-ui">
                    <ImageFullScreen photos={photos}/>
                </div> : <span/>}
            </div>
        );
    }
}
export default connect()(Photography);
