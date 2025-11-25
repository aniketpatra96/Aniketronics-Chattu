import AsyncStorage, {
  AsyncStorageStatic,
} from "@react-native-async-storage/async-storage";
import { FirebaseApp, initializeApp } from "firebase/app";
// @ts-ignore
import { Auth, getReactNativePersistence, initializeAuth } from "firebase/auth";
import {
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  getFirestore,
} from "firebase/firestore";

interface ConfigProps {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: ConfigProps = {
  apiKey: String(process.env.EXPO_PUBLIC_FIREBASE_API_KEY),
  authDomain: "aniketronics-chat.firebaseapp.com",
  projectId: "aniketronics-chat",
  storageBucket: "aniketronics-chat.firebasestorage.app",
  messagingSenderId: String(process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID),
  appId: String(process.env.EXPO_PUBLIC_APP_ID),
  measurementId: String(process.env.EXPO_PUBLIC_MEASUREMENT_ID),
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

const storage: AsyncStorageStatic = AsyncStorage;

export const auth: Auth = initializeAuth(app, {
  persistence: getReactNativePersistence(storage),
});

export const db: Firestore = getFirestore(app);

export const usersRef: CollectionReference<DocumentData, DocumentData> =
  collection(db, "users");
export const roomRef: CollectionReference<DocumentData, DocumentData> =
  collection(db, "rooms");
