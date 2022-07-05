import Card from "./components/Card";
import Nav from "./components/Nav";
import data from "./components/data";

function App() {
  const Items = data.map((item) => {
    return <Card key={item.title} item={item} />;
  });
  return (
    <div>
      <Nav />
      <section>{Items}</section>
    </div>
  );
}

export default App;
