export function Modal() {
}

import { useState } from "react";
function Modals() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    const toggleModal = () => {
        setIsModalOpen(true)
    }
    return (
        <div>
            <h1 className="pt-56">Click on the Button to open the modal</h1>
            <button onClick={toggleModal}>Open</button>

            {isModalOpen && <Modals setIsModalOpen={setIsModalOpen} />}
        </div>
    )
}
