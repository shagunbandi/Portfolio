import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ColorTab } from './Components/ColourTab';
import { ColorTop } from './Components/ColorTop';
import {ButtonTab} from './Components/ButtonTab';
import { DirectoryContainer } from './Components/DirectoryConteiner';
import {Readme} from './Components/Readme';


export class Summary extends Component {
    render() {

        return (
            <div class="container-lg clearfix new-discussion-timeline  px-3">
                <div class="repository-content ">
                    <br/>
                    <ColorTop />
                    <ColorTab />
                    <ButtonTab />
                    <DirectoryContainer/>
                    <Readme/>  
            
                </div>
            </div>
        );
    }
}
export default connect()(Summary);
