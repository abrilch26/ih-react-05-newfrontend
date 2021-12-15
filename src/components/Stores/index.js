import React, { useEffect, useContext } from 'react'
import StoreContext from '../../context/Store/StoreContext'
import { Link } from "react-router-dom"

export default function Stores() {

    //ESTADO GLOBAL
    const ctx = useContext(StoreContext)

    const { stores, hello, changeText, getStores} = ctx

    //ESTADO LOCAL
    return (
        <>
           
            <button onClick = { () => {getStores() }} >
                Listar tiendas
            </button>

            <div>
                <h1> Listado de tiendas </h1>
                <ul>
                    {
                        stores.map((element) => {
                            return (
                                <li key={element.id}>
                                    <Link to={`/stores/${element._id}`}>
                                    <p>{element.domicilio}</p>
                                    </Link>
                        
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}
