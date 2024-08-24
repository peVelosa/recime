export default {
  title: "Treding Recipes",
  subtitle: "Difficulty",
  description: "You can filter recipes by difficulty.",
  options: ["easy", "medium", "hard"],
  Animation: {
    initial: {
      duration: 1,
      stagger: 0.1,
      x: 0,
      y: 0,
      opacity: 1,
    },
    reorder: {
      duration: 0.25,
      x: -100,
      y: -100,
    },
  },
} as const;
