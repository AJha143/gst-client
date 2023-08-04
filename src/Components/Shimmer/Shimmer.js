import { Skeleton} from '@mui/material'
import React from 'react'




const Shimmer = () => {
  return (
  <div>

    <div className="clientBtnContainer">
      <div>
      <Skeleton  variant="rectangular" height={40} width={180} /> 
      </div>
      <div>
      <Skeleton  variant="rectangular" height={50} width={120} />
      </div>
     
    </div>
    <div>
      {Array(5).fill(" ").map((e,index)=>(<Skeleton key={index}  sx={{ margin: 10 }}  variant="rectangular"
  width={810}
  height={118} />) )}
    </div>
    </div>
  )
}

export default Shimmer