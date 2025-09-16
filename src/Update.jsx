import React, { useState } from "react";
import GangaFoundationLandingPage from "./GangaFoundationLandingPage";

function Update() {
  const [clickCount, setClickCount] = useState(0);
  const [unlocked, setUnlocked] = useState(false);

  const handleSecretClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 5) {
      setUnlocked(true); // Unlock the secret content
      setClickCount(0); // Reset counter
    }

    // Reset if not completed within 3 seconds
    setTimeout(() => {
      setClickCount(0);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 relative">
      {!unlocked ? (
        <>
          {/* Default message */}
          <h1 className="text-5xl font-bold text-gray-800 tracking-wide">
            🚀 Coming Soon...
          </h1>

          {/* Hidden secret clickable area */}
          <div
            onClick={handleSecretClick}
            className="absolute bottom-0 right-0 w-10 h-10 cursor-pointer"
            style={{ backgroundColor: "transparent" }}
          />
        </>
      ):(
<GangaFoundationLandingPage/>
      )}
    </div>
  );
}

export default Update;

