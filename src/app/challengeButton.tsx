import Link from "next/link";

import currentDate from "./date";

const clickButton = (url: string, id: string) => {
  window.open(url, "_blank");
  localStorage.setItem(id, currentDate);
  window.location.reload();
};

const deleteChallenge = (id: string) => {
  const savedChallenges = localStorage.getItem("challenges");
  if (savedChallenges) {
    const challenges = JSON.parse(savedChallenges);
    const updatedChallenges = challenges.filter(
      (challenge: { id: string }) => challenge.id !== id
    );
    localStorage.setItem(
      "challenges",
      JSON.stringify(updatedChallenges)
    );
  }

  const removedDefaults = JSON.parse(
    localStorage.getItem("removedDefaults") || "[]"
  );
  if (!removedDefaults.includes(id)) {
    removedDefaults.push(id);
    localStorage.setItem(
      "removedDefaults",
      JSON.stringify(removedDefaults)
    );
  }

  localStorage.removeItem(id);
  window.location.reload();
};

const challengeButton = ({
  id,
  name,
  url,
}: {
  id: string;
  name: string;
  url: string;
}) => {
  const completedDate = localStorage.getItem(id);
  const isCompletedToday = completedDate === currentDate;

  return (
    <div className="flex items-center justify-center flex-row space-x-2">
      <Link key={id} href={url} target="_blank" rel="noreferrer">
        <button
          className={`border border-gray-300 rounded-lg w-50
              transition-colors duration-200 rounded-xl
              ${
                isCompletedToday
                  ? "bg-[#618b54] hover:bg-green-700"
                  : "bg-[#3a3a3c] hover:bg-neutral-800"
              }`}
          onClick={() => clickButton(url, id)}
        >
          <p className="text-center">{name}</p>
        </button>
      </Link>
      <button
        className="bg-red-800 hover:bg-red-900 rounded-xl w-10"
        onClick={() => deleteChallenge(id)}
      >
        x
      </button>
    </div>
  );
};

export default challengeButton;
