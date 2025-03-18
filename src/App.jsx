import React from "react";

export const App = () => {
  return (
    <>
    <div className="ProfileContainer">
      <NameCard 
        name="Dev Jogani" 
        age={21} 
        status="Single" 
        imgSrc="dev.jpg" 
      />
      <NameCard 
        name="Kushal Rajani" 
        age={22} 
        status="Committed" 
        imgSrc="kushal.jpg" 
      />
      <NameCard 
        name="Jigar Jogani" 
        age={23} 
        status="Married" 
        imgSrc="jigar.jpg" 
      />
    </div>
      <h1>
        Hello Developer Kushal, Welcome to the hustle of Coding with Dev Jogani.
      </h1>
      </>
  );
};

const NameCard = ({ name, age, status, imgSrc }) => {
  return (
    <div className="ProfileCard">
      <img className="profile-img" src={imgSrc} alt={name} width={"25%"} />
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>Relationship: {status}</h3>
    </div>
  );
};
