import React, { Component } from "react";
import data from "./home.json";
import Slider from "react-slick";
import './Scrolling.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default class Responsive extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            imagelink: "",
            content: ""
        }
    }
    
    getData() {
        return data.Scrolling.kidsbooks;
   }
    render() {
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
        <h2>Kids</h2>
          <Slider {...settings}>
          <div className="kidsBooks">                           
           <img className="imageArea" 
           src={list[0]["image-url"]} alt="read" />
          </div>

          <div className="kidsBooks">                           
           <img className="imageArea" 
           src={list[1]["image-url"]}  alt="read" />
          </div>
            
          <div className="kidsBooks">                           
           <img className="imageArea"
            src={list[2]["image-url"]}  alt="read" />
          </div>

          <div className="kidsBooks">                           
           <img className="imageArea" 
           src={list[3]["image-url"]}  alt="read"/>
          </div>
          
          <div className="kidsBooks">                           
           <img className="imageArea" 
           src={list[4]["image-url"]}  alt="read"/>
          </div>
          
          <div className="kidsBooks">                           
           <img className="imageArea" 
           src={list[5]["image-url"]}  alt="read" />
          </div>

          <div className="kidsBooks">                           
           <img className="imageArea" 
           src={list[6]["image-url"]}  alt="read"/>
          </div>
          
         
          </Slider>
        </div>
      );
    }
  }
