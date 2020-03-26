import { useEffect, useState } from "react";

type callbackType = (...values: string[]) => string;

type AnimationType = (
  watchers: string[],
  callback: string | callbackType
) => string;

export const useAnimation: AnimationType = (watchers, callback) => {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    const styles =
      typeof callback === "function" ? callback(...watchers) : callback;
    setAnimation(styles);
  }, watchers);

  useEffect(() => {
    animation && setTimeout(() => setAnimation(""), 200);
  }, [animation]);

  return animation;
};
