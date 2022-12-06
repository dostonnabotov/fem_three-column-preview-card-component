import Card from "./components/Card/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <main>
      <div className="wrapper">{cards}</div>
    </main>
  );
}
