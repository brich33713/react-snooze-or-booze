import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getItems(type) {
    try {
    const result = await axios.get(`${BASE_API_URL}/${type}`);
    return result.data;
    } catch(e){
      return "not found"
    }
  }

  static async getItem(type,id) {
    try {
    const result = await axios.get(`${BASE_API_URL}/${type}/${id}`)
    return result.data;
    } catch(e){
      return "not found"
    }
    
  }

  static async postItem(type,data){
    const result = await axios.post(`${BASE_API_URL}/${type}`,data)
    console.log(result)
  }

}

export default SnackOrBoozeApi;
