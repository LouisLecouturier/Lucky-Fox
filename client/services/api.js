import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api/",

  // for dev : http://localhost:8080/api/
  // for production_test : https://animazonetest.herokuapp.com/api/
  headers: {
    "Content-Type": "application/json",

    Authorization:
      "Bearer a68a04bdc82791c139bb8ac2e5b73f074f3db40c2926dc3d9274107ef4a5624e29aeada95b4a0bd3d728be56a204ef5b8c57633af807b350e8e560b4d1e4aaadecc976f0fc2f416edce07db3543d8f34cffb14a225dd904b2cc3de28989e6889522f1f9f6a4837a81561f080963eb3455ab3f9ca00e74c4d8d0f566577d016fe",
  },
});

export default api;
