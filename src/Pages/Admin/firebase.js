import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBPa5DlOZ3S_P_8AH8wNH1NvBxmNLfiJIc",
  authDomain: "khangkhuiphungdhar.firebaseapp.com",
  databaseURL:
    "https://khangkhuiphungdhar-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "khangkhuiphungdhar",
  storageBucket: "khangkhuiphungdhar.appspot.com",
  messagingSenderId: "215801539078",
  appId: "1:215801539078:web:6481240700540c509bb187",
  measurementId: "G-P0Q9QPT2FS",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
