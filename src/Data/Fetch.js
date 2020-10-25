import axios from "axios";

const fetch = ({value,setSearchedData, pageNo}) =>{
  console.log(value);
  console.log(pageNo)
  axios
  .get(`https://api.jikan.moe/v3/search/anime?q=${value}&limit=15&page=${pageNo}`)
  .then((res) => {
    // console.log(res);
    setSearchedData(res.data);
  })
  .catch((err) => {
    console.log(err.msg);
  });
}

export {fetch};