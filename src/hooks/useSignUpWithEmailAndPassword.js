import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { doc, setDoc } from "firebase/firestore";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const signup = async (inputs) => {
    const { email, password, username, fullname } = inputs;

    if (!email || !password || !username || !fullname) {
      console.log("Please enter all the details");
      return;
    }

    try {
      const newUser = await createUserWithEmailAndPassword(email, password);
      if (!newUser) {
        console.error("User creation failed");
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
    } catch (error) {
      console.error("Error signing up:", error); // Better error logging
    }
  };

  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
