import { Container, Grid } from "semantic-ui-react";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import SneakerCard from "../../components/SneakerCard.jsx/SneakerCard";
import SneakerDisplay from "../../components/SneakerDisplay/SneakerDisplay";

import * as sneakersAPI from "../../utils/sneakerApi";

function DetailPage() {
  const [sneakers, setSneakers] = useState([]);
  const [sneakerDetail, setSneakerDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { sneaker } = useParams();
  console.log(sneaker, "<------ sneaker param in Detail Page");

  async function getSneaker() {
    try {
      // making the API CALL
      const response = await sneakersAPI.getSneaker(sneaker);
      console.log(response, "<--- response from getSneaker()");

      setLoading(false); // set loading to false
      setSneakers(response.data);
      setProfileUser(response.user);
      console.log(response, " <- data is getprofile");
    } catch (err) {
      console.log(
        err.message,
        " error in getSneaker something went wrong with the getSneaker api request, check server terminal"
      );
      setLoading(false);
      setError("Sneaker does not exist"); // <- this is what we show
      // on the page
    }
  }

  useEffect(() => {
    getSneaker();
  }, [sneaker]);

  return (
    <>
      <h2>Detail page is here</h2>
    </>
  );
}

export default DetailPage;
