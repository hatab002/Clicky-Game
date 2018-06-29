import axios from "axios";

const BASEURL = "http://api.giphy.com/v1/gifs/search";
const APIKEY = "&api_key=LJM0Ju3GJueU4CqXjGNAkWn7DVGvEIg9";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};