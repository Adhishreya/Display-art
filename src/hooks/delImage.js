import firebase from "firebase";
function delImage(url) {
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
  // console.log(store);
  const container = firebase.storage().refFromURL(url);
  // if (container.exists()) {
  container.delete().catch((e) => console.log(e));
  // }
  return 1;
}
export default delImage;
