import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../../store/authStore";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);
  const logoutUser = useAuthStore((state) => state.logout);

  const signup = async (inputs) => {
    const { email, password, username, fullname } = inputs;

    if (!email || !password || !username || !fullname) {
      showToast("Error", "Please fill in all fields", "error");
      return;
    }

    const usersRef = collection(firestore, "users");

    const q = query(usersRef, where("username", "==", inputs.username));

    const querySnapShot = await getDocs(q);

    if (!querySnapShot.empty) {
      showToast("Error", "Username already exists", "error");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(email, password);
      if (!newUser && error) {
        showToast("Error", "Failed to create user. Please try again.", "error");
        return;
      }

      const userDoc = {
        uid: newUser.user.uid,
        email: email,
        username: username,
        fullname: fullname,
        bio: "",
        profilePicURL: "",
        followers: [],
        following: [],
        posts: [],
        createdAt: Date.now(),
      };

      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
      localStorage.setItem("user-info", JSON.stringify(userDoc));
      loginUser(userDoc);
      showToast("Success", "User registered successfully!", "success");
    } catch (error) {
      showToast(
        "Error",
        error.message || "An error occurred during signup",
        "error"
      );
    }
  };

  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
