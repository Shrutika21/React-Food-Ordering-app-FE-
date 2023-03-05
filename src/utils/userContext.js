import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Shrutika Kulkarni",
    email: "kulkarnishrutika2121@gmail.com",
  },
});

export default UserContext;
