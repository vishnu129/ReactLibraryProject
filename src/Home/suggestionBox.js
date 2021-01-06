import React from 'react'
import { Layout } from "antd";
// import data from "./body.json";
import Slider from "react-slick";
import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>
function suggestionBox(props) {
    const { Content } = Layout;
    // const list = this.props;

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
                <Content>
                    <h2 className="kids">{props.title}</h2>
                    <h4 className="see"> See All</h4>
                    <Slider {...settings} className="Slider">
                        <DemoBox value={50} className="Books">
                            <img className="imageArea"
                                src={props.data[0]["image-url"]} alt="read" />
                        </DemoBox>
                        <DemoBox value={50}>
                            <img className="imageArea"
                                src={props.data[1]["image-url"]} alt="read" />
                        </DemoBox>
                        <DemoBox value={100}>
                            <img className="imageArea"
                                src={props.data[2]["image-url"]} alt="read" />
                        </DemoBox>
                        <DemoBox value={100}>
                            <img className="imageArea"
                                src={props.data[3]["image-url"]} alt="read" />
                        </DemoBox>
                        <DemoBox value={100}>
                            <img className="imageArea"
                                src={props.data[4]["image-url"]} alt="read" />
                        </DemoBox>
                        <DemoBox value={100}>
                            <img className="imageArea"
                                src={props.data[5]["image-url"]} alt="read" />
                        </DemoBox>
                        <DemoBox value={100}>
                            <img className="imageArea"
                                src={props.data[6]["image-url"]} alt="read" />
                        </DemoBox>
                    </Slider>
                </Content>
            </Layout>
        </div>
    )
}

export default suggestionBox