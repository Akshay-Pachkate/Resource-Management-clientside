/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getCookie } from "../utilities/getCSRF";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [csrf, setCSRF] = useState(null);
  const [isUserInfoReady, setIsUserInfoReady]  = useState(false);

  useEffect(() => {
    setCSRF(getCookie("csrftoken"));
    if (!user) {
      axios
        .get(
          "/UserInfo",
          {
            headers: {
            "X-CSRFToken": csrf
            },
        }
        )
        .then(({ data }) => {
          if(data.status === 200){
            setUser(data.userDetails);
          }  
          setIsUserInfoReady(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user, csrf]);

  return (
    <UserContext.Provider value={{ user, setUser , isUserInfoReady, setIsUserInfoReady}}>
      {children}
    </UserContext.Provider>
  );
};
