import React, {useContext}  from "react";
import StoreContext from "../../../context/Store/StoreContext";
import { Link } from "react-router-dom"

import { useParams } from "react-router-dom";

export default function SingleStore() {

    //ESTADO GLOBAL
    const ctx = useContext(StoreContext)
    const { singleStore, getStore } = ctx

    const params = useParams()
    const id = params.id

    return (
        <div>
            <h1> Página individual de cada tienda</h1>

            <button onClick={() => { getStore(id) }}>
                Más info (tienda)
            </button>

            <h1>{singleStore.domicilio}</h1>
            <p> {singleStore.telefono}</p>
        </div>
    )
}