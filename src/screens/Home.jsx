import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {

  const [search, setSearch] = useState('');
  const [phoneCat, setPhoneCat] = useState([]);
  const [phones, setPhones] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/smartphoneData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();

    setPhones(response[0]);
    setPhoneCat(response[1]);


    // console.log(response[0], response[1]);
  }


  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <div><Navbar /></div>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner" id="carousel-image">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e)=>{setSearch(e.target.value)}}
                />
                {/* <button className="btn btn-outline-success" type="submit">
                  Search
                </button> */}
              </div>
            </div>

            <div className="carousel-item active">
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/random/1000×700/?smartphones"
                alt="First slide"
                style={{ filter: "brightness(50%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/random/1000×700/?mobilephones"
                alt="second slide"
                style={{ filter: "brightness(50%)" }}
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src="https://source.unsplash.com/random/1000×700/?phones"
                alt="Third slide"
                style={{ filter: "brightness(50%)" }}
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </div>
      <div className="container">
        {
          phoneCat !== []
            ? phoneCat.map((data) => {
              return (<div className="row mb-3">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {phones !== []
                  ?
                  phones.filter((item) => (item.CategoryName === data.CategoryName) && item.Brand.toLowerCase().includes(search.toLocaleLowerCase()))
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                          <Card phoneName={filterItems.Brand}
                            modelName={filterItems.Model}
                            storage={filterItems.Options[0].Storage} // Accessing Storage from Options array
                            price={filterItems.Options[0].Price} // Accessing Price from Options array
                            imgSrc={filterItems.Img}
                          ></Card>
                        </div>
                      )
                    }
                    ) : <div>No such data found</div>}
              </div>
              )
            })
            : <div>"""""""""""""""'</div>
        }
      </div>

      <div><Footer /></div>
    </div>
  );
}
