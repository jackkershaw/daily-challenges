"use client";

import { useState } from "react";

const currentDate = new Date().toLocaleString("default", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const defaultChallenges = [
  {
    id: "wordle",
    name: "Wordle",
    url: "https://www.nytimes.com/games/wordle/index.html",
  },
  {
    id: "cluesbysam",
    name: "Clues By Sam",
    url: "https://cluesbysam.com/",
  },
  {
    id: "spellingbee",
    name: "Spelling Bee",
    url: "https://spellbee.org/",
  },
  {
    id: "newyorkercrossword",
    name: "New Yorker Crossword",
    url: "https://www.newyorker.com/puzzles-and-games-dept/crossword",
  },
  {
    id: "heardlehiphop",
    name: "Heardle Hip Hop",
    url: "https://hiphop.heardlegames.xyz/",
  },
  {
    id: "worldle",
    name: "Worldle",
    url: "https://worldle.teuteuf.fr/",
  },
  { id: "framed", name: "Framed", url: "https://framed.wtf" },
  {
    id: "waffle",
    name: "Waffle",
    url: "https://wafflegame.net/daily",
  },
  { id: "metrodle", name: "Metrodle", url: "https://metrodle.com/" },
  {
    id: "timeguessr",
    name: "Timeguessr",
    url: "https://timeguessr.com/",
  },
  { id: "hexcodle", name: "Hexcodle", url: "https://hexcodle.com/" },
  {
    id: "wordslicer",
    name: "Word Slicer",
    url: "https://wordslicer.com/",
  },
];

const clickButton = (url: string, id: string) => {
  window.open(url, "_blank");
  localStorage.setItem(id, currentDate);
};

const resetAll = () => {
  localStorage.clear();
  window.location.reload();
};

export default function ChallengesList() {
  const [addClicked, setAddClicked] = useState(false);
  const [newChallengeName, setNewChallengeName] = useState("");
  const [newChallengeUrl, setNewChallengeUrl] = useState("");

  const handleAddChallenge = () => {
    if (newChallengeName && newChallengeUrl) {
      const newChallenge = {
        id: newChallengeName.toLowerCase().replace(/\s+/g, ""),
        name: newChallengeName,
        url: newChallengeUrl,
      };
      defaultChallenges.push(newChallenge);
      setNewChallengeName("");
      setNewChallengeUrl("");
      setAddClicked(false);
    }
  };
  return (
    <div className="grid grid-cols-1 gap-y-3 mx-auto">
      {defaultChallenges.map((challenge) => (
        <a
          key={challenge.id}
          href={challenge.url}
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="
              border border-gray-300 rounded-lg w-50
              bg-[#3a3a3c] hover:bg-neutral-800

              transition-colors duration-200 rounded-xl
            "
            onClick={() => clickButton(challenge.url, challenge.id)}
          >
            <p className="text-center">{challenge.name}</p>
          </button>
        </a>
      ))}
      <button
        className="mt-6
         border border-gray-300 rounded-lg
               bg-[#3a3a3c] hover:bg-neutral-800
              transition-colors duration-200 rounded-xl
            "
        onClick={
          addClicked
            ? () => setAddClicked(false)
            : () => setAddClicked(true)
        }
        aria-label="Reset all challenges"
      >
        <p className="text-center"> + Add Your Own</p>
      </button>
      {addClicked && (
        <div className="flex flex-col items-center mt-4">
          <input
            type="text"
            placeholder="Challenge Name"
            value={newChallengeName}
            onChange={(e) => setNewChallengeName(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded-lg w-48 bg-[#3a3a3c] text-white"
          />
          <input
            type="text"
            placeholder="Challenge URL"
            value={newChallengeUrl}
            onChange={(e) => setNewChallengeUrl(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded-lg w-48 bg-[#3a3a3c] text-white"
          />
          <button
            onClick={handleAddChallenge}
            className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            Add Challenge
          </button>
        </div>
      )}
      <button
        className=" mt-8
         border border-gray-300 rounded-lg
               bg-[#3a3a3c] hover:bg-neutral-800
              transition-colors duration-200 rounded-xl
            "
        onClick={resetAll}
        aria-label="Reset all challenges"
      >
        <p className="text-center">Reset</p>
      </button>
    </div>
  );
}
