import { useState } from "react";
import { Buttons } from "../components/Buttons";

interface ModalProps {
  onSearch: (value: string) => void;
}

export function Modal({ onSearch }: ModalProps) {
  const [modal, setModal] = useState("");
  return (
    <div>
      <div>
        <input
          type="text"
          id="search"
          placeholder="Pesquisa"
          onChange={(e) => setModal(e.target.value)}
          className="bg-blue p-4"
        />
        <Buttons onClick={() => onSearch(modal)}>Pesquisar</Buttons>
      </div>
    </div>
  );
}
