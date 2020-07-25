import React, { useState ,useEffect} from 'react';
import { fetchGenreList } from "../api"
import Slider from "react-slick";
import './ProductListingPage.scss';

function ProductListingPage() {

  useEffect(() => {
    fetchGenre()
  }, []);

  const [ genreList,setGenreList ] = useState([])
  const [ genreId,setGenreId ] = useState([])

  const genreListData = ["beer1", "bee2", "beer3", "beer4", "beer5", "beer6", "beer7", "beer8", "beer9", "beer10", 
  "beer11", "bee12", "beer13", "beer14", "beer15", "beer16", "beer17", "beer18", "beer19", "beer20",
    "beer21", "bee22", "beer23", "beer24", "beer25", "beer26", "beer27", "beer28", "beer29", "beer30"
]

  const renderSlides = () =>
    genreListData.map((item) => {
      return(
      <div style={{marginRight:"30px"}}>
        <p style={{marginRight: "30px"}}>{item}</p>
      </div>
      )
    });

  const settings = {
    dots: false,
    //infinite: true,
    speed: 400,
    // initialSlide: this.getGenreIndexById(parseInt(props.active)),
    slidesToShow: 3,
    slidesToScroll: 0,
    variableWidth: true,
    // prevArrow: <div><Icon name="chevronRight" /></div>,
    // nextArrow: <div><Icon name="chevronRight" /></div>,
    responsive: [
      {
        breakpoint: 2600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          infinite: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          infinite: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: false
        }
      }
    ]
  }

  const fetchGenre = () => {
    const payload = {
      city_id: 12,
      state_id: 12,
      retailer_id: 436,
      gps: "123"
    }
    fetchGenreList(payload)
      .then((response) => {
        setGenreList(response.genres)
        setGenreId(response.genres[0].id)
        console.log("From succes",response)
      })
      .catch((err) => {
        console.log("Error in fetching Genre list", err)
      })
  }

  return (
    <div className="container">
      <div className="section-1">

        <div className="left-flex-items">
          <div>
            {/* <p> Back </p> */}
          </div>
          <div>
            <p> RETAILER NAME: TASMAC 1</p>
          </div>
        </div>

        <div className="right-flex-item">
          <input type='text' placeholder="Search Item"/>
        </div>

      </div>

      <div className="section-2">
        <div className="card-container">
          {/* <div className="row1"> */}
          <div>
            <div>
              <Slider {...settings}>{renderSlides()}</Slider>
            </div>
           
            {/* {
              genreList ?
              genreList.map ((item,index) => {
                return (
                  <Slider {...settings}>
                  <div>
                    <p>{item.name}</p>
                   </div>
                  </Slider>
                )
              }) : ""
            } */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListingPage;
