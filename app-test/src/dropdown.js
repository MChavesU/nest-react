import { useState } from "react";
import Modal from "./modal";
import './dropdown.css'
import './modal.css'


export default function Dropdown() {


    const [mostar, setMostrar] = useState(false)
    function click() {

        if (!mostar)
            setMostrar(true)
        else
            setMostrar(false)

    }

    return (
        <>
            <div className="dropdown">
                <select onChange={click}>
                    <option>Primera</option>
                    <option>open Modal</option>
                </select>

                <Modal class="modal" mostar={mostar} ></Modal>
            </div>
        </>
    );
}