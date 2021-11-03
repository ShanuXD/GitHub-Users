import React from "react";

const Card = ({ userInfo }) => {
  const { login: name, avatar_url, id, url, repos_url } = userInfo;
  const cardRef = React.useRef(null);
  const [show, setShow] = React.useState(false);

  const handleCard=()=>{
      if(!show){
          cardRef.current.style.display="block"
          setShow(true)
      }else{
            cardRef.current.style.display="none"
            setShow(false)
      }
  }

  return (
    <div className="card">
      <img src={avatar_url} alt="avatar" style={{ height: "200px" }} />
      <div className="name">{name}</div>
      <button onClick={handleCard}>{show?"Show Less": "Show More"}</button>
      <div className="card-info" style={{display:"none"}} ref={cardRef}>
          <div className="">id:{id}</div>
          <a href={repos_url}>Resository</a>
      </div>
    </div>
  );
};

export default Card;
