import Link from "next/link";

import currentDate from "./date";

const clickButton = (url: string, id: string) => {
  window.open(url, "_blank");
  localStorage.setItem(id, currentDate);
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
  );
};

export default challengeButton;
