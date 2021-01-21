import React from "react";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

import "./newsBox.css";


function NewsBox(props) {
    const list = props.news.newsHeadings;

    return (
        <div>
            <h1 className="title">{props.news.title}</h1>
            <Carousel autoplay>
                {list.map(obj => {
                    return (
                        <div>
                            <div className="wrapper">
                                <div className="newsImage">
                                    <img
                                        className="imageArea"
                                        src={obj.imageUrl} alt="loading" />
                                </div>
                                <div className="newsContent">
                                    <h2>{obj.heading}</h2>
                                    <h3>{obj.summary}</h3>
                                    <h3 className="seemore">see more...</h3>
                                </div>
                            </div>
                        </div>

                    )
                }
                )
                }

            </Carousel>
        </div>

    )
}


export default NewsBox;


