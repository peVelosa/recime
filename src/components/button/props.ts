export type ButtonProps = {
  children: React.ReactNode;
  isSelected?: boolean;
  edge?: "first" | "last";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
