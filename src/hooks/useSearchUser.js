import { collection, getDocs, query, where } from "firebase/firestore";
import useShowToast from "./useShowToast";
import { firestore } from "../firebase/firebase";
import { useState } from "react";

const UseSearchUser = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const ShowToast = useShowToast();
  const getUserProfile = async (username) => {
    setIsLoading(true);
    setUser(null);
    try {
      const q = query(
        collection(firestore, "users"),
        where("username", "==", username)
      );

      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        ShowToast("Error", "User not found", "error");
      }
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (error) {
      ShowToast("Error", error, "error");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, getUserProfile, user, setUser };
};

export default UseSearchUser;
