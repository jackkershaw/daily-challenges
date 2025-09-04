"use client";

import ChallengesList from "./challengesList";
import Popup from "./popup";
import { useEffect, useState } from "react";

export default function Home() {
  const [popupShown, setPopupShown] = useState<boolean | null>(null);

  useEffect(() => {
    const shown = localStorage.getItem("popupShown") === "true";
    setPopupShown(shown);
  }, []);

  if (popupShown === null) {
    return <div className="min-h-screen bg-black"></div>;
  }

  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col items-center justify-center sm:items-start mx-auto">
        {/* -- add delay before showing popup -- */}
        {popupShown ? <ChallengesList /> : <Popup />}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
