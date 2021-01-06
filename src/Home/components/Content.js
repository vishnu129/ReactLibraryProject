import React, { Component } from 'react'
import { Layout } from "antd";
import data from "./home.json";
import Slider from "react-slick";
import './Content.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export class Content extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imagelink: "",
            content: ""
        }
    }
    getData() {
        return data.Content.kidsbooks;
    }
   
      
    render() {
        const { Content } = Layout;
        const list = this.getData();
       

        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div>
                <Layout>
                    <Content className="content">
                        <h2 className="kids">Kids</h2>
                        <h4 className="see"> See All</h4>
                        <Slider {...settings} className="Slider">
                            <div className="kidsBooks">
                                <img className="imageArea"
                                    src={list[0]["image-url"]} alt="read" />
                            </div>

                            <div className="kidsBooks">
                                <img className="imageArea"
                                    src={list[1]["image-url"]} alt="read" />
                            </div>

                            <div className="kidsBooks">
                                <img className="imageArea"
                                    src={list[2]["image-url"]} alt="read" />
                            </div>

                            <div className="kidsBooks">
                                <img className="imageArea"
                                    src={list[3]["image-url"]} alt="read" />
                            </div>

                            <div className="kidsBooks">
                                <img className="imageArea"
                                    src={list[4]["image-url"]} alt="read" />
                            </div>

                            <div className="kidsBooks">
                                <img className="imageArea"
                                    src={list[5]["image-url"]} alt="read" />
                            </div>

                            <div className="kidsBooks">
                                <img className="imageArea"
                                    src={list[6]["image-url"]} alt="read" />
                            </div>


                        </Slider>




                        <h2 className="thrillers">Thrillers</h2>
                        <h4 className="see1"> See All</h4>
                        <Slider {...settings} className="Slider1">
                            <div className="Thrillers">
                                <img className="imageArea"
                                    src={list[7]["image"]} alt="read" />
                            </div>

                            <div className="Thrillers">
                                <img className="imageArea"
                                    src={list[8]["image"]} alt="read" />
                            </div>

                            <div className="Thrillers">
                                <img className="imageArea"
                                    src={list[9]["image"]} alt="read" />
                            </div>

                            <div className="Thrillers">
                                <img className="imageArea"
                                    src={list[10]["image"]} alt="read" />
                            </div>

                            <div className="Thrillers">
                                <img className="imageArea"
                                    src={list[11]["image"]} alt="read" />
                            </div>

                            <div className="Thrillers">
                                <img className="imageArea"
                                    src={list[12]["image"]} alt="read" />
                            </div>

                            <div className="Thrillers">
                                <img className="imageArea"
                                    src={list[13]["image"]} alt="read" />
                            </div>


                        </Slider>
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default Content

