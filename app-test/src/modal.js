import { useEffect, useState } from "react";

export default function Modal(props) {

    const [personas, setPersonas] = useState([]);

    function apiCall() {

        //se uso esta por problemas de cors en el nestjs
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then(data => data.json())
    }

    useEffect(() => {
        let mon = true;
        apiCall()
            .then(per => {
                if (mon) {
                    setPersonas(per)
                }
            })
        return () => mon = false
    }, [])

    if (!props.mostar) {
        return null
    }

    return (

        <>
            <div className="modal">
                <div> nombre modal</div>
                <div className="modal-body">
                    <ul >
                        {personas.map(
                            persona => <li key={persona.id}>{persona.name}</li>
                        )}
                    </ul>
                </div>
            </div>

        </>
    );
}