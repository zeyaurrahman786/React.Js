// Mapping Components :-

import React from "react";
import UserCard from "../Components/UserCard";
import data from "../Utils/data";


// Best Component -> Best Screen 

function UserList() {
  

  return (
    <div>
        {data.map(({name, email, rollNo })=>(
            <UserCard name={name} email={email} rollNo={rollNo} />
        ))}
  </div>
  )
  
}

export default UserList;
