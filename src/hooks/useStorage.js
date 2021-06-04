import { useState, useEffect } from "react";
import { projStorage, projFireStore, timestamp } from "../firebase/config.js";
//creating custom hooks

//takes in the uploaded file(image)
const useStorage = (file) => {
  //creating 3 states
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  // const [likes, setLikes] = useState(0);
  // const [dislikes, setDislikes] = useState(0);
  useEffect(() => {
    //logic to upload the file....triggered every time a new file is uploaded
    const storgeRef = projStorage.ref(file.name); //creating a reference to the file default firebase in storage bucket
    //asynchronously uploading the file in the bucket using the refrence
    const collectionRef = projFireStore.collection("images");
    //creating a reference fo rcollection in the firebase firestore database

    storgeRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

        //monitoring the state of upload and taking snapshots of the upload at various instance of time
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        //generating an asynchronous function
        const url = await storgeRef.getDownloadURL();
        const createdAt = timestamp;
        // collectionRef.add({ url: url, createdAt });
        collectionRef.add({
          url: url,
          createdAt: createdAt,
          likes: 0,
          dislikes: 0
        });
        //adding data to the database using the reference
        //created at is uset to store the timestamp
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
