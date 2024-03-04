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
      <div className="m-3">
        <Card />
      </div>

      <div><Footer /></div>
    </div>
  );
}
