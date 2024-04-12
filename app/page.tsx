"use client"

import Example from "./components/landingPage";
import PopUp from "./components/popUp";

export default function Home() {
  return (
    <main style={{ height: "100%" }}>
      <div style={{ height: "100%" }}>
        <Example></Example>
        <PopUp></PopUp>
      </div>
    </main>
  );
}