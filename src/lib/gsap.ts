import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

export const GSAPInitializer = (): null => {
  useEffect(() => {
    gsap.registerPlugin(useGSAP);
  }, []);

  return null;
};
