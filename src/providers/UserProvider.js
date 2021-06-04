import React, { useState, useEffect, useMemo, createContext } from "react";
import { auth } from "./firebase/firebase.js";
export const UserCredentials = createContext({
  user: { displayName: "", photoURL: "", email: "", login: "" }
});
export default (props) => {
  const [users, setUser] = useState({
    displayName: "",
    email: "",
    photoUrl: "",
    login: false
  });
  useMemo(() => {
    auth.onAuthStateChanged((use) => {
      const { displayName, email, photoURL } = use;
      const login = true;
      setUser({
        displayName,
        email,
        photoURL,
        login
      });
    });
  }, []);

  return (
    <UserCredentials.Provider value={users}>
      {props.children}
    </UserCredentials.Provider>
  );
};
