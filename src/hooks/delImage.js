import firebase from "firebase";
function delImage(url) {
  console.log(url);
  const store = firebase
    .firestore()
    .collection("images")
    .where("url", "==", url);
  // .document(url)
  // .delete();
  // .where("url", "==", url);
  store.get().then(function (querySnapshot) {
    querySnapshot.forEach(function (doc) {
      doc.ref.delete();
    });
  });
  console.log(store);
  return 1;
}
export default delImage;
