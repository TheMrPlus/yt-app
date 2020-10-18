import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID IAlBDW7b-2VTfhjp5nkjdyuNb5A7LrnEyblZ71VViaE",
  },
});
