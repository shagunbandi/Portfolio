import React, { Component } from 'react';

import { connect } from 'react-redux';
const color = require('../../assets/database/colors.json')


export class ProjectComponent extends Component {

    render() {

        const { title, aim, technologies, org_link, date, link, gitUrl } = this.props.project;

        var techs = [];
        if (technologies) {
            technologies.forEach((tech, index) => {
                const ind = index % color.length;
                techs.push(
                    <span className="ml-0">
                        <span className="repo-language-color" style={{ backgroundColor: color[ind], marginLeft: "6px" }}></span>
                        <span itemProp="programmingLanguage" style={{ marginLeft: "4px", marginRight: "6px" }}>{tech}</span>
                    </span>
                )
            });
        }
        else {
            techs = null;
        }

        console.log(gitUrl);


        return (
            <li class="col-12 d-flex width-full py-4 border-bottom public source" itemprop="owns" itemscope itemtype="http://schema.org/Code" style={{ padding: "0px" }}>
                <div class="col-10 col-lg-9 d-inline-block">
                    <div class="d-inline-block mb-1">
                        <h3 class="wb-break-all">
                            <a href={link} itemprop="name" >{title}</a>
                        </h3>
                    </div>
                    <div>
                        <p class="col-9 d-inline-block text-gray mb-2 pr-4" itemprop="description" style={{ padding: "0px" }}>
                            {aim}
                        </p>
                    </div>

                    <div class="f6 text-gray mt-2">
                        {techs}
                        <br />
                        <br />
                        {date}
                        </div>
                </div>

                <div class="col-2 col-lg-3 d-flex flex-column flex-justify-around">
                    <div class="text-right">
                        {org_link !== undefined && org_link !== "" && org_link !== "#" && org_link !== null ? (
                            <span><img src={org_link} alt={title} style={{ width: "80px" }} />
                                < br />
                                <br />
                            </span>
                        ) : (<span />)
                        }
                            
                        {gitUrl !== undefined && gitUrl !== "" &&  gitUrl !== "#" && gitUrl !== null ? (
                            <a class="btn btn-sm" href={gitUrl} target="_blank">
                                <svg class="octicon octicon-star mr-1" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
                                </svg>Repos
                            </a>
                        ):(<span/>)}
                    </div>
                </div>
            </li>
           );
    }
}
export default connect()(ProjectComponent);
