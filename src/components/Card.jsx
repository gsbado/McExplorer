export default function Card({ item }) {
  return (
    <div className="card">
      <img src={item.imagem} alt={item.titulo} />
      <h3>{item.titulo}</h3>
      <p>{item.descricao}</p>
      <span className="badge">{item.localizacao.nome}</span>
      <p className="curiosity">{item.curiosidade}</p>
      <a href={item.localizacao.link} target="_blank">View on map</a>
    </div>
  );
}