import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {

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
      <div><Carousel /></div>
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
                  phones.filter((item) => item.CategoryName === data.CategoryName)
                    .map(filterItems => {
                      return (
                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                          <Card></Card>
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
