**set up a firestore database**
create a database in test mode,creating it in production mode involves setting some instructions

- each collection stores particular type of data.

**create storage service**

- alter the rules
- retain `allow read,write;` and delete the remaining....this ensures the users to use without authentication
- publish rules

https://youtu.be/vUe91uOx7R0
**References (for error)**

- https://firebase.google.com/docs/firestore/quickstart
- https://www.freecodecamp.org/news/the-firestore-tutorial-for-2020-learn-by-example/

# Animations using Framer Motions

- https://www.framer.com/motion/

# possible improvements

- Delete image feature
- like/dislike/follow
- login in

# deleting

https://stackoverflow.com/questions/47180076/how-to-delete-document-from-firestore-using-where-clause

# hosting

# material ui

https://material-ui.com/api/grid/

**To update a field value i.e. to increment/decrement a field value**
https://stackoverflow.com/questions/50762923/how-to-increment-existing-number-field-in-cloud-firestore

Firebase offers FieldValue object that can be used to obtain the current field value and then update that.

**To delete files from Storage if only url of the file is currently available ,obtain reference to the file using refFromURl**
This function accepts the url of the image and returns the reference to the file, which can then be used for manipulation like delete()
