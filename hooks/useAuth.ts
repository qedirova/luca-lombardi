import { firebaseAuth } from "@/lib/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/hooks";

const providers = {
  google: new GoogleAuthProvider(),
};

type Provider = keyof typeof providers;

export const useAuth = () => {
  const [, setCookie, removeCookie] = useCookies(["auth_token"]);

  const router = useRouter();
  const dispatch = useAppDispatch();

  async function saveToken() {
    const user = firebaseAuth.currentUser;

    if (!user) return;

    const firebaseToken = await user.getIdToken();

    setCookie("auth_token", firebaseToken, {
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
  }

  async function handleLogin(provider: Provider) {
    try {
      const { user } = await signInWithPopup(firebaseAuth, providers[provider]);

      await saveToken();

      router.push("/");
      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async function handleEmailRegister(email: string, password: string) {
    try {
      const { user } = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );

      await saveToken();

      router.push("/");

      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async function handleEmailLogin(email: string, password: string) {
    try {
      const { user } = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password,
      );

      await saveToken();

      router.push("/");

      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }

  async function handleLogout() {
    await signOut(firebaseAuth);
    dispatch(logout());

    removeCookie("auth_token", { path: "/" });

    router.push("/login");
  }

  return {
    handleGoogleLogin: () => handleLogin("google"),
    handleLogout,
    handleEmailRegister,
    handleEmailLogin,
  };
};
