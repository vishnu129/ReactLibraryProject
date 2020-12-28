import React, { Component } from "react";
import data from "./home.json";
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

import "./newsBox.css";


class NewsBox extends Component {
    constructor() {
        super();
        this.state = {
            heading: "",
            imagelink: "",
            content: ""
        }
    }

    //use the lifecycle method to get latest news from the database

    /* componentDidMount()
     {
         this.getNewsHeadings();
     }
 */
  //in this function api call can be done and data fetched from api,
    getData() {
        return data.newsBox.newsHeadings;
    }





    render() {
        const list = this.getData();
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };

        return (

            <Carousel autoplay>
                <div>
                    <div className="wrapper">
                        <div className="newsImage">
                            <img
                                className="imageArea"
                                src={list[0]["image-url"]} />
                        </div>
                        <div className="newsContent">
                            <h1>{data.newsBox.title}</h1>
                            <h2>{list[0].heading}</h2>
                            <h3>{list[0].summary}</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="wrapper">
                        <div className="newsImage">
                            <img
                                className="imageArea"
                                src={list[1]["image-url"]} />
                        </div>
                        <div className="newsContent">
                            <h1>{data.newsBox.title}</h1>
                            <h2>{list[1].heading}</h2>
                            <h3>{list[1].summary}</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="wrapper">
                        <div className="newsImage">
                            <img
                                className="imageArea"
                                src={list[2]["image-url"]} />
                        </div>
                        <div className="newsContent">
                            <h1>{data.newsBox.title}</h1>
                            <h2>{list[2].heading}</h2>
                            <h3>{list[2].summary}</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="wrapper">
                        <div className="newsImage">
                            <img
                                className="imageArea"
                                src={list[3]["image-url"]} />
                        </div>
                        <div className="newsContent">
                            <h1>{data.newsBox.title}</h1>
                            <h2>{list[3].heading}</h2>
                            <h3>{list[3].summary}</h3>
                        </div>
                    </div>
                </div>
            </Carousel>


        )
    }

}

export default NewsBox;


