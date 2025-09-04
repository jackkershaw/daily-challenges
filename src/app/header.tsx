const currentDate = new Date().toLocaleString("default", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function Header() {
  return (
    <div className="mx-auto text-center mt-4 space-y-3">
      <h1 className="text-3xl font-bold">Daily Challenges</h1>
      <h2 className="text-2xl">{currentDate}</h2>
    </div>
  );
}
