"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebase";
import { logout, setLoading, setUser } from "@/redux/slices/authSlice";
import { CustomLoading } from "@/widgets/CustomLoading";

export default function AuthListener() {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch(
          setUser({
            uid: firebaseUser.uid!,
            email: firebaseUser.email!,
            displayName: firebaseUser.displayName!,
            photoURL: firebaseUser.photoURL!,
          }),
        );
      } else {
        dispatch(logout());
      }

      dispatch(setLoading(false));
    });

    return unsubscribe;
  }, [dispatch]);

  if (isLoading) return <CustomLoading />;

  return null;
}
