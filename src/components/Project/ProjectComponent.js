import React, { Component } from 'react';

import { connect } from 'react-redux';

export class ProjectComponent extends Component {

    render() {

        const { title, aim, technologies, org_link, liveAt, date, link, gitUrl, project_title } = this.props.project;
        const { colorSkillMap, firstObject, lastObject } = this.props;

        var techs = [];
        if (technologies) {
            technologies.forEach((tech, index) => {
                techs.push(
                    <span className="ml-0 d-inline-block">
                        <span className="repo-language-color" style={{ backgroundColor: colorSkillMap[tech], marginLeft: "6px" }}></span>
                        <span itemProp="programmingLanguage" style={{ marginLeft: "4px", marginRight: "6px" }}>{tech}</span>
                    </span>
                )
            });
        }
        else {
            techs = null;
        }

        // first and not last           then add title pt-4 pb-1
        // last and not first           then add-border pb-4 pt-1
        // not first and not last       then py-1
        // first and last               then add title, add-border py-4

        const FnL = "col-12 d-flex width-full pt-4 pb-3";
        const nFL = "col-12 d-flex border-bottom width-full pb-4 pt-3";
        const nFnL = "col-12 d-flex width-full py-3";
        const FL = "col-12 d-flex width-full border-bottom py-4";


        return (
            <li class={
                firstObject && lastObject ? FL
                    : firstObject && !lastObject ? FnL
                        : !firstObject && !lastObject ? nFnL
                            : nFL
            }

                style={{ padding: "0px" }}>
                <div class="col-10 col-lg-9 d-inline-block">
                    {firstObject ? (
                        <div class=" mb-1">
                            <h3>
                                <a href={link} itemprop="name" >{title}</a>
                            </h3>
                        </div>
                    ) : <span />}
                    {project_title ? (
                        <div class="d-inline-block mb-1">
                            <h4>{project_title}</h4>
                        </div>
                    ) : <span/>}
                    <div>
                        <p class="col-9 d-inline-block text-gray mb-2 pr-4" style={{ padding: "0px" }}>
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

                {firstObject ? (
                    <div class="col-2 col-lg-3 d-flex flex-column flex-justify-around">
                        <div class="text-right">
                            {org_link !== undefined && org_link !== "" && org_link !== "#" && org_link !== null ? (
                                <span><img src={org_link} alt={title} style={{ width: "80px" }} />
                                    <br />
                                    <br />
                                </span>
                                
                            ) : (<span />)
                            }

                            {liveAt !== undefined && liveAt !== "" && liveAt !== "#" && liveAt !== null ? (
                                <span>
                                    <a class="btn btn-sm" href={liveAt} target="_blank" rel="noopener noreferrer">
                                        <svg class="octicon octicon-star mr-1" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
                                        </svg>
                                        Live
                                    </a>
                                    <br />
                                    <br />
                                </span>
                            ) : (<span />)}

                            {gitUrl !== undefined && gitUrl !== "" && gitUrl !== "#" && gitUrl !== null ? (
                                <a class="btn btn-sm" href={gitUrl} target="_blank" rel="noopener noreferrer">
                                    {/* <svg class="octicon octicon-star mr-1" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
                                    </svg> */}
                                    Repos
                                </a>
                            ) : (<span />)}
                        </div>
                    </div>
                ) : <span/>}
            </li>
           );
    }
}
export default connect()(ProjectComponent);
