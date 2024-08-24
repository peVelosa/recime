import { HomeTemplate } from "@/templates";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ReciMe",
  description: "ReciMe is a recipe sharing platform.",
};

export default function Home() {
  return <HomeTemplate />;
}
