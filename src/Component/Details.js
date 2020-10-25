import React, { useState } from "react";
import FetchData from "../Data/FetchData";
import { fetch } from "../Data/Fetch";

const Details = () => {
  const [value, setValue] = useState("");
  const [searchedData, setSearchedData] = useState({});
  const [pageNo, setPageNo] = useState(1);

  const onHandle = (e) => {
    if (e.key === "Enter") {
      setValue(e.target.value);
    }
    if (!value) {
      return;
    }
    setPageNo(1);
    fetch({ value, setSearchedData, pageNo });
  };

  const handlePage = () => {
    // console.log(pageNo);
    if (pageNo > 0 && value) setPageNo((pageNo) => pageNo + 1);
    fetch({ value, setSearchedData, pageNo });
  };

  const handlePreviousPage = () => {
    if (pageNo >= 1 && value) setPageNo((pageNo) => pageNo - 1);
    fetch({ value, setSearchedData, pageNo });
  };

  return (
    <>
      <div className="header">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={onHandle}
        />
        <button onClick={onHandle}>Go</button>
      </div>
      <div className="App">
        <FetchData searchedData={searchedData} />
      </div>
      <div className="footer">
        <button onClick={handlePage}>Load More</button>
        <button onClick={handlePreviousPage}>Previous</button>
      </div>
    </>
  );
};

export default Details;
