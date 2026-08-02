"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebase";
import { logout, setLoading, setUser } from "@/redux/slices/authSlice";
import { CustomLoading } from "@/widgets/CustomLoading";
import { addToCart, setCart } from "@/redux/slices/cartSlice";

export default function AuthListener() {
  const dispatch = useAppDispatch();
  const { isLoading, user } = useAppSelector((state) => state.auth);
  const cart = useAppSelector((state) => state.cart.items);
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
        const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
        dispatch(setCart(cart));

        const pending = sessionStorage.getItem("pendingCartItem");
        if (pending) {
          dispatch(addToCart(JSON.parse(pending)));
          sessionStorage.removeItem("pendingCartItem");
        }
      } else {
        dispatch(logout());
      }

      dispatch(setLoading(false));
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    if (!user) return;
    localStorage.setItem(`cart_${user?.uid}`, JSON.stringify(cart));
  }, [cart, user]);

  if (isLoading) return <CustomLoading />;

  return null;
}
