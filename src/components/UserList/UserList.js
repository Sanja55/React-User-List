import { useState } from "react";
import { UserData } from "../UserData";

export const UserList = () => {

  const [users] = useState(UserData);

  const randomUsers = users.sort(() => 0.5 - Math.random()).slice(0, 10);

  const formatDate = (birthDate) => {
      
    const date = new Date(birthDate);
      
    const formattedDate = date.toLocaleDateString('en-GB', {
          
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
      
    });
      
      return formattedDate;
  };

  

  return (
      <>
         <div className="container-fluid">
              
              {randomUsers.map(user => (
                  
                  <div className="row mb-4 d-flex justify-content-center align-items-center">
                      
                      <div className="col-sm-12 col-md-4 col-lg-2">
                          <img src={user.picture.large} alt="User" className="rounded-circle mb-4" />
                      </div>
                      
                      <div className="col-sm-12 col-md-8 col-lg-10">
                          <p className="name">Name: {(user.name.first).charAt(0).toUpperCase() + (user.name.first).slice(1)} {(user.name.last).charAt(0).toUpperCase() + (user.name.last).slice(1)}</p>
                          <p className="email">E-mail: {user.email}</p>
                          <p className="date-of-birth">Date of Birth: {formatDate(user.dob.date)}.</p>
                      </div>
                      
                      <hr />
                  
                  </div>
              
              ))}
          
          </div>
      </>
  ); 


}