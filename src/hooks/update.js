import firebase from "firebase";
function updateimg(url, update) {
  const store = firebase
    .firestore()
    .collection("images")
    .where("url", "==", url);
  if (update === "likes") {
    store.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.update({
          likes: firebase.firestore.FieldValue.increment(1)
        });
      });
    });
  } else {
    store.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.update({
          dislikes: firebase.firestore.FieldValue.increment(1)
        });
      });
    });
  }

  return 1;
}
export default updateimg;
