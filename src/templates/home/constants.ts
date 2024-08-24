import type { Variant, VariantLabels } from "framer-motion";

export default {
  title: "Treding Recipes",
  subtitle: "Difficulty",
  description: "You can filter recipes by difficulty.",
  options: ["easy", "medium", "hard"],
  animation: {
    cardsWrapper: {
      initial: "hidden" as VariantLabels,
      animate: "visible" as VariantLabels,
      variants: {
        visible: {
          transition: {
            staggerChildren: 0.25,
          },
        },
      },
    },
    card: {
      hidden: { opacity: 0, y: 200 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    } as Record<string, Variant>,
  },
} as const;
