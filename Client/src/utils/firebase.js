import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig); //is a container-like object that stores common configuration and shares authentication across Firebase services
const storage = getStorage(app);
export const firebaseAuth = getAuth(app);

export { app, storage };

export const uploadImage = async (file, bucket) => {
  try {
    const filename = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, `${bucket}/${filename}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    await uploadTask;
    let photoUrl = await getDownloadURL(uploadTask.snapshot.ref);
    return photoUrl;
  } catch (err) {
    throw err;
  }
};
