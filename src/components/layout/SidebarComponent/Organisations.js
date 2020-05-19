import React, { Component } from 'react';
import { connect } from 'react-redux';

const organisations = require('../../../assets/database/organisations.json');


export class Organisations extends Component {

    render() {

        if (!organisations || organisations.length === 0) {
            return (<span />)
        }

        var content = []
        organisations.forEach(organisation => {
            content.push(
                <a href={organisation.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="avatar-group-item"
                    style={{margin:"2px"}}>
                    <img alt={organisation.title} width="32" height="32"
                        src={organisation.img} className="avatar " />
                </a>
            )
        });



        return (
            <div className="border-top py-3 clearfix hide-sm hide-md">
                <h2 className="mb-1 h4">Experience At</h2>
                {content}
            </div>
        );
    }
}
export default connect()(Organisations);
