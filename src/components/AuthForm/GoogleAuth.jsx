import { Image, Flex, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../firebase/firebase";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../../store/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";

const GoogleAuth = ({ prefix }) => {
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle();
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }
      const userRef = doc(firestore, "users", newUser.user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userDoc = userSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
        showToast("Sucess", "Logged in successfully", "success");
      } else {
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split("@")[0],
          fullname: newUser.user.displayName,
          bio: "",
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
        showToast("Sucess", "Logged in successfully", "success");
      }
    } catch (error) {
      showToast("Error", error, "error");
    }
  };

  return (
    <>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        mt={3}
        w={"full"}
        cursor={"pointer"}
        onClick={handleGoogleAuth}
      >
        <Image src={"./google.png"} alt="google" h={5} />
        <Text mx={2} color={"blue.500"}>
          {prefix} with Google
        </Text>
      </Flex>
    </>
  );
};

export default GoogleAuth;
