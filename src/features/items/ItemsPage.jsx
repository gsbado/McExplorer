import { useState } from "react";
import items from "./mockData";
import Card from "../../components/Card";

export default function ItemsPage() {
  const [query, setQuery] = useState("");

  const filtered = items.filter(i =>
    i.titulo.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="page">
      <h1>McExplorer</h1>

      <input
        type="text"
        placeholder="Search a McDonald's item..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      <div className="cards">
        {filtered.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}