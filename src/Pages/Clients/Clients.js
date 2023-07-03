import React, { useEffect, useState } from "react";
import AddClient from "../../Components/Clients/ClientForm";
import "./Clients.scss";
import { Typography } from "@mui/material";
import ErrorBoundary from "../../customComponent/ErrorBoundary";
import SearchBar from "../../customComponent/SearchBar/SearchBar";
import axios from "../../service/Service";
import ClientsCard from "../../Components/Clients/ClientsCard";
import { useSelector } from "react-redux";
import Shimmer from "../../Components/Shimmer/Shimmer";
const Clients = () => {
  const [clientData, setClientData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [updateClientList, setUpdateClientList] = useState(false);
  const userId = useSelector((state) => state?.login?.loginDetails?.user?.id);
  useEffect(() => {
    getClients();
  }, [updateClientList]);

  const getClients = () => {
    axios({
      url: "/user/getClients",
      method: "get",
      params: { userId },
    })
      .then((res) => {
        setClientData(res?.data);
        setFilteredResults(res?.data);
        console.log(res.data, "json");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchHandler = (e) => {
    let typedText = e.target.value || " ";
    if (typedText !== " ") {
      const filterDataFun = clientData.filter(
        ({ address, businessName, gstIn }) =>
          address?.toLowerCase().includes(typedText.toLowerCase()) ||
          businessName?.toLowerCase()?.includes(typedText?.toLowerCase()) ||
          gstIn?.toLowerCase()?.includes(typedText?.toLowerCase())
      );
      console.log(filterDataFun, "filterdatafunction");
      setFilteredResults(filterDataFun);
    } else setFilteredResults(clientData);
  };

  return clientData?.length === 0 ? (
    <Shimmer />
  ) : (
    <ErrorBoundary>
      <Typography variant="h4">All Clients</Typography>
      <div className="clientBtnContainer">
        <div>
          <SearchBar
            onChange={searchHandler}
            classes={{ root: "search-bar" }}
          />
        </div>
        <div>
          <AddClient setUpdateClientList={setUpdateClientList} />
        </div>
      </div>
      <div>
        {filteredResults?.length === 0 ? (
          <div>
            <h1>No data found</h1>
          </div>
        ) : (
          filteredResults.map((cardData, key) => (
            <ClientsCard cardData={cardData} index={key} />
          ))
        )}
      </div>
    </ErrorBoundary>
  );
};

export default Clients;
