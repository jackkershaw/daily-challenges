const currentDate = new Date().toLocaleString("default", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function Header() {
  return (
    <div>
      <h1>Daily Challenges</h1>
      <h2>{currentDate}</h2>
    </div>
  );
}
