import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import { Flip } from "gsap/Flip";

export const GSAPInitializer = (): null => {
  useEffect(() => {
    gsap.registerPlugin(useGSAP, Flip);
  }, []);

  return null;
};
