import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ColorTab } from './Components/ColourTab';
import { ColorTop } from './Components/ColorTop';
import {ButtonTab} from './Components/ButtonTab';
import { DirectoryContainer } from './Components/DirectoryConteiner';
import {Readme} from './Components/Readme';
import fileDetails from '../../assets/database/summary/fileDetails'

export class Summary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            content: fileDetails[1],
            filenames:[]
        };
    }

    selectFile = file => {
        fileDetails.forEach((fileDict, index) => {
            if (fileDict.title === file) { 
                this.setState({ content: fileDetails[index]})
            }
        });
    }

    render() {

        var filenames = []
        fileDetails.forEach(file => {
            filenames.push(file.title);
        });


        return (
            <div class="container-lg clearfix new-discussion-timeline  px-3">
                <div class="repository-content ">
                    <br/>
                    <ColorTop />
                    <ColorTab />
                    <ButtonTab />
                    <DirectoryContainer selectFile={this.selectFile} filenames={filenames} />
                    <Readme title={this.state.content.title} content={this.state.content.content}/>  
            
                </div>
            </div>
        );
    }
}
export default connect()(Summary);
