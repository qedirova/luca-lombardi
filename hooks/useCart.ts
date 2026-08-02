import { useAppSelector } from "@/redux/hooks";

const FREE_SHIPPING_THRESHOLD = 200;
const SHIPPING_RATE = 0.1;
const TAX_RATE = 0.05;

export const useCart = () => {
  const { items: cartItems } = useAppSelector((state) => state.cart);

  const subtotal = cartItems.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0,
  );

  const shipping =
    subtotal > FREE_SHIPPING_THRESHOLD
      ? 0
      : Number((subtotal * SHIPPING_RATE).toFixed(2));

  const tax = Number((subtotal * TAX_RATE).toFixed(2));

  const total = Number((subtotal + shipping + tax).toFixed(2));

  return { cartItems, subtotal, shipping, tax, total };
};
