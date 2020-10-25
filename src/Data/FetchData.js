import React from "react";

const FetchData = ({ searchedData }) => {
  return (
    <div className="wrapper">
      {searchedData.results &&
        searchedData.results.map(({ mal_id, title, image_url }) => (
          <div key={mal_id}>
            <img src={image_url} alt="img"/>
            <div className="tit">{title}</div>
          </div>
        ))}
    </div>
  );
};

export default FetchData;
