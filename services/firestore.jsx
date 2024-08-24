import {
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  arrayUnion
} from "firebase/firestore";

export async function getCollections(query) {
  // leave its as any the data structure will change overtime
  let array = [];
  const querySnapshot = await getDocs(collection(db, query));
  for (const file of querySnapshot.docs) {
    array.push(file.data());
  }

  return array;
}

export function sendResetPassword(email) {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      console.log("Confirmantion password is sent");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
}

export async function registerUser(email, password, userName) {
  try {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    await createUserProfile({
      displayName: data.user.displayName ?? userName,
      email: data.user.email ?? "",
      photoUrl: data.user.photoURL ?? "",
      uid: data.user.uid,
      isMember:false,
    });
    return {
      // code 1 for success
      code: 1,
    };
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      return {
        // code 3 for already registered with email
        // code 4 for weak password
        code: 3,
      };
    }
    console.log(error.code);
  }
}

export async function addToScholar(data, uid) {
  return setDoc(doc(db, "scholarForm", uid), {
    status: 0,
    ...data,
  });
}

export async function addToProposal(data) {
  return addDoc(collection(db, data.collectionName), {
    name: data.firstName + " " + data.lastName,
    problem: data.message,
    title: data.title,
  });
}

export async function workWithUsForm(data) {
  return addDoc(collection(db, data.collectionName), {
    name: data.firstName + " " + data.lastName,
    ...data,
  });
}

export function getUserProfile(userId) {
  return doc(db, "users", userId);
}

export async function getUser(uid) {
  const userDoc = await getDoc(doc(db, "users", uid));
  const data = userDoc.data();
  return data;
}

export async function updateUserDoc(uid, data) {
  await updateDoc(doc(db, "users", uid), {
    ...data,
  }).then(() => {
    console.log("Updated");
  });
}

export async function addPurchaseToUser(uid, itemId) {
  await updateDoc(doc(db, "users", uid), {
    purchases: arrayUnion(itemId),
  }).then(() => {
    console.log("Purchase added");
  });
}

export async function fetchUserPurchases(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    return docSnap.data().purchases || [];
  } else {
    return [];
  }
}

export async function signUpWithPopUp() {
  const provider = new GoogleAuthProvider();
  const userData = await signInWithPopup(auth, provider);
  const userInfo = getAdditionalUserInfo(userData);
  const isNewUser = userInfo ? userInfo.isNewUser : false;
  if (isNewUser) {
    createUserProfile({
      displayName: userData.user.displayName ?? "",
      email: userData.user.email ?? "",
      photoUrl: userData.user.photoURL ?? "",
      uid: userData.user.uid ?? "",
    });
  }
}

export async function fetchCollection(collectionName) {
  try {
      // Reference to the specified Firestore collection
      const collectionRef = collection(db, collectionName);

      // Fetch all documents in the collection
      const querySnapshot = await getDocs(collectionRef);

      // Create an array to hold the JSON objects
      const jsonArray = [];

      // Loop through each document in the collection and push only the data to the array
      querySnapshot.forEach((doc) => {
          jsonArray.push(doc.data()); // No merging of document ID with data
      });

      // Return the array of JSON objects
      return jsonArray;
  } catch (error) {
      console.error("Error fetching collection: ", error);
      throw error;
  }
}

export async function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then((data) => {});
}

async function createUserProfile(data) {
  const docRef = doc(db, "users", data.uid);
  await setDoc(docRef, {
    ...data,
  });
}