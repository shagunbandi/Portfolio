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
            content: fileDetails[0],
            filenames:[]
        };
    }

    selectFile = file => {
        this.state.filenames.forEach((fileDict, index) => {
            if (fileDict.title === file.title) {
                if (fileDict.type === 'file') {
                    this.setState({ content: this.state.filenames[index] })
                } else if (fileDict.type === 'folder') {
                    const fileList = [{
                        "type": "back",
                        "title": ".."
                    }].concat(fileDict['files']);

                    this.setState({ filenames: fileList })
                } else if (fileDict.type === 'back') {
                    this.setState({ filenames: fileDetails });
                }
            }
        });
    }

    componentDidMount = () => {
        fileDetails.sort((a, b) => {
            if (a.type  < b.type) return 1;
            return -1;
        });
        var pos = 0
        for (var i = 0; i < fileDetails.length; i++){
            if (fileDetails[i].type === 'file') {
                pos = i;
                break;
            }
        }
        console.log(pos);
        this.setState({ filenames: fileDetails, content: fileDetails[pos]})
    }

    render() {


        return (
            <div class="container-lg clearfix new-discussion-timeline  px-3">
                <div class="repository-content ">
                    <br/>
                    <ColorTop />
                    <ColorTab />
                    <ButtonTab />
                    <DirectoryContainer selectFile={this.selectFile} files={this.state.filenames}/>
                    <Readme title={this.state.content.title} content={this.state.content.content}/>  
            
                </div>
            </div>
        );
    }
}
export default connect()(Summary);
