import React, { useEffect, useContext } from 'react'
import StoreContext from '../../context/Store/StoreContext'

export default function Stores() {

    //ESTADO GLOBAL
    const ctx = useContext(StoreContext)

    const { stores, hello, changeText } = ctx

    //ESTADO LOCAL
    return (
        <>
            <p> Listado de tiendas</p>
            <p> { hello }</p>

            <button onClick = { () => {changeText() }} >
                Change text
            </button>
        </>
    )
}
