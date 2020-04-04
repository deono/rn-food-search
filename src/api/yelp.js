import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer kHhFRyvXKeV7lx8Y9cdg7ASodPiUfIitEXV97qhfI1CAz-Flw1gTLdXajt0hmRSusEXKHARpNDe8eU99q5u7641sJTLXoA_DGkoUmCYya9fv_tXg7dpBquT6jjiIXnYx"
  }
});
