import { useState } from "react";
import settingss from "../assets/settingss.json";

export const PesquisaPage = () => {
  const [selecionado, setSelecionado] = useState<any>(undefined);
  const [pesquisa, setPesquisa] = useState("");
  const [etapa, setEtapa] = useState("");

  function filtrar() {
    let json = settingss.data;
    if (etapa !== "") {
      json = filtrarEtapaAtiva();
    }
    return json.filter((item) =>
      item.nome.toUpperCase().includes(pesquisa.toUpperCase()),
    );
  }

  function filtrarEtapaAtiva() {
    return settingss.data.filter(
      (item) =>
        item.nome.toUpperCase().includes(etapa.toUpperCase()) &&
        item.ativo == true,
    );
  }

  const resultado = filtrar();
  return(
    <div>
        <input type="text" placeholder="Pesquisar" value={pesquisa} onChange={(e) => setPesquisa(e.target.value)}/>
        {resultado.map(item =>(
            <div key={item.id}>
                {item.nome}
            </div>
        ))}
    </div>
  )
};
