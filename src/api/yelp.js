import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 2HYD-NMNsIx9s4di_LcrXWQH61-Yik-2EAa_a3-uZ-u_Kr-B4l1af611buLqVBmAiMPldtzx7iHOyLyFGDapK5qtjkWeQtBxf4cBHUqeZ3IxD31SH-rbwWBAml8JXnYx"
  }
});
