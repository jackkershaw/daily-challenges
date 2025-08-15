"use client";

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
    name: "Crossword (New Yorker)",
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

export default function ChallengesList() {
  return (
    <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2">
      {defaultChallenges.map((challenge) => (
        <a
          key={challenge.id}
          href={challenge.url}
          target="_blank"
          rel="noreferrer"
        >
          <button
            className="font-bold
              border border-gray-300 rounded-lg
              bg-gray-100 hover:bg-gray-200
              transition-colors duration-200
            "
            onClick={() => clickButton(challenge.url, challenge.id)}
          >
            {challenge.name}
          </button>
        </a>
      ))}
    </div>
  );
}
