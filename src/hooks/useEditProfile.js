import { useState } from "react";
import useAuthStore from "../../store/authStore";
import useShowToast from "./useShowToast";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { storage, firestore } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import useUserProfileStore from "../../store/userProfileStore";

const useEditProfile = () => {
  const [isUpdating, setisUpdating] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const setAuthUser = useAuthStore((state) => state.setUser);
  const setUserProfile = useUserProfileStore((state) => state.setUserProfile);

  const showToast = useShowToast();

  const editProfile = async (input, selectedFile) => {
    if (isUpdating || !authUser) return;
    setisUpdating(true);
    const storageRef = ref(storage, `profilePics/${authUser.uid}`);
    const userDocRef = doc(firestore, "users", authUser.uid);

    let URL = "";

    try {
      if (selectedFile) {
        await uploadString(storageRef, selectedFile, "data_url");
        URL = await getDownloadURL(storageRef);
      }
      const updatedUser = {
        ...authUser,
        fullname: input.fullname || authUser.fullname,
        username: input.username || authUser.username,
        bio: input.bio || authUser.bio,
        profilePicURL: URL || authUser.profilePicURL,
      };
      await updateDoc(userDocRef, updatedUser);
      localStorage.setItem("user-info", JSON.stringify(updatedUser));
      setAuthUser(updatedUser);
      setUserProfile(updatedUser);
      showToast("Success", "Profile updated successfully", "success");
    } catch (error) {
      showToast("Error", error, "error");
      console.error(error);
    }
  };
  return { editProfile, isUpdating };
};

export default useEditProfile;
