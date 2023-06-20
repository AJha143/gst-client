import React, { useEffect, useState } from "react";
import AddClient from "../../Components/Clients/AddClientButton";
import "./Clients.scss";
import { Typography } from "@mui/material";
import ErrorBoundary from "../../customComponent/ErrorBoundary";
import SearchBar from "../../customComponent/SearchBar/SearchBar";
import axios from "../../service/Service";
import ClientsCard from "../../Components/Clients/ClientsCard";
import { useSelector } from "react-redux";
import Shimmer from "../../Components/Shimmer/Shimmer";
const Clients = () => {
  const [searchText, setSearchText] = useState("");
  const [clientData, setClientData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  const userId = useSelector((state) => state?.login?.loginDetails?.user?.id);
  useEffect(() => {
    getClients();
  }, []);

  const getClients = () => {
    axios({
      url: "/user/getClients",
      method: "get",
      params: { userId },
    })
      .then((res) => {
        setClientData(res?.data);
        setFilteredResults(res?.data);
        console.log(res.data,"json");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchHandler = (e) => {
    setSearchText(e.target.value);

    if (searchText !== " ") {
      const filterDataFun = clientData.filter((item) => {
        console.log(item,"bata bhai item")
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
      console.log(filterDataFun, "filterdatafunction");
      setFilteredResults(filterDataFun);
    } else setFilteredResults(clientData);
  };

  return (clientData.length === 0)? <Shimmer/>:(
    <ErrorBoundary>
    <div>
      <Typography variant="h4">All Clients</Typography>
      <div className="clientBtnContainer">
        <div>
          <SearchBar onChange={searchHandler} />
        </div>
        <div>
        <AddClient />
        </div>
       
      </div>
      <div>
     { (filteredResults.length === 0) ? <div><h1>No data found</h1></div> : filteredResults.map((cardData, key) => {
          return <ClientsCard cardData={cardData} index={key} />;
        })
     
      }
 
      </div>
      </div>
    </ErrorBoundary>
  );
};

export default Clients;
