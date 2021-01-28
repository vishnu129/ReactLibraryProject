import React from 'react'
import { Layout } from "antd";
// import data from "./body.json";
// import Slider from "react-slick";
import './style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import data from './body.json'
const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>
function suggestionBox(props) {
    const { Content } = Layout;
    const genre = props.data;
    // const list = this.props;
    console.log(genre);
    return (
        <div>
            <Layout>
                <Content>
                    {
                        genre.kidsbooks.map(book=>{
                            return (
                                <DemoBox value={50} className="Books">
                                    <img className="imageArea" src={["image-url"]} alt="read" />
                                </DemoBox>
                            )
                        }

                        )
                    }
                </Content>
            </Layout>
        </div>
    )
}

export default suggestionBox