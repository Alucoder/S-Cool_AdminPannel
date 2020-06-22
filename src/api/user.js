import axios from "axios";
const url = "http://localhost:3001/users";

export const userLogin = async (user) => {
  try {
    const admin = await axios.post(`${url}/login/admin`, user);
    console.log("userdata", admin);
  } catch (e) {
    throw e;
  }
};
