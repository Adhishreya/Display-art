import { useState, useEffect } from "react";
import { projectFireStore } from "../firebase/config.js";
import firebase from "firebase";
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  //initially no data is retrived hence the docs is set to an empty array
  useEffect(() => {
    const unsub = firebase
      .firestore()
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        //a callback function ....listeneing to realtime data objects and notified on the snapshot
        //takes a snapshot of the database at that moment in time
        let doc = [];
        snap.forEach((d) => {
          doc.push({ ...d.data() });
          //getting all the properties of the data
        });
        setDocs(doc);
      });

    return () => unsub();
    //unsubscibing from the collection when no longer used
  }, [collection]);
  //collection here is used as the dependency in useEffect hooks,that gets triggered everytime the dependency changes

  return { docs };
};

export default useFirestore;
