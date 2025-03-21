export const NameCard = ({ name, age, status, imgSrc }) => {
  return (
    <div className="ProfileCard">
      <img className="profile-img" src={imgSrc} alt={name} width={"25%"} />
      <h2>Name: {name}</h2>
      <h3>Age: {age}</h3>
      <h3>Relationship: {status}</h3>
    </div>
  );
};