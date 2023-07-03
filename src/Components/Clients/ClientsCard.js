
import "../../Pages/Clients/Clients.scss";
import {  Paper} from "@mui/material";



const ClientsCard = ({cardData,index}) => {
const {businessName,address,gstIn} = cardData


  return (
    <div  className="clientContainer">
      <Paper classes={{root:'clientPaper'}} elevation={3}>
        <div className="clientCard">
          <div className="clientDetailsContainer">
            <div className="clientSeqContainer">{index + 1}</div>
            <div className="clientProfile">
              <b>{businessName}</b>
              <p>{address}</p>
              <p>{gstIn}</p>
            </div>
          </div>

          <div className="addClientActionContainer">
            <div className="actionBtn-regular">REGULAR</div>
            <div className="actionBtn">GET FILING STATUS</div>
            <div className="actionBtn">MONTHLY</div>
            <div className="actionBtn">RETURNS</div>
          </div>
        </div>
      </Paper>
      <div className="filingStatusContainer">
        <p>
          <h4>Filing Status: </h4>
          <span> GSTR-1 / IFF</span>
          <span>FEB</span> {"|"}
          <span>MAR</span> {"|"}
          <span>APR</span>
        </p>
        <p>
          <span> GSTR-3B</span>
          <span>FEB</span> {"|"}
          <span>MAR</span> {"|"}
          <span>APR</span>
        </p>
        <p>
          <span>GSTR-9</span>
          <span>2019-20</span> {"|"}
          <span>2020-21</span>
        </p>
      </div>
    </div>

  )
}

export default ClientsCard