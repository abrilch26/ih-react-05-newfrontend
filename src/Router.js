//1. IMPORTACIONES
import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./components/Home"
import Register from "./components/Auth/Register"
import Login from "./components/Auth/Login"
import Guitars from "./components/Guitars"
import Stores from "./components/Stores"
import Single from "./components/Guitars/Single"
import SingleStore from "./components/Stores/SingleStores"

import GuitarState from "./context/Guitar/GuitarState"
import StoreState from "./context/Store/StoreState"


//2. FUNCION
const Router = () => {
    return (
        <>
            <GuitarState>
                <StoreState>
                    <BrowserRouter >
                        <Routes>
                            <Route path="/" element={<Layout />} >
                                <Route index element={<Home />} />
                                <Route path="registro" element={<Register />} />
                                <Route path="iniciar-sesion" element={<Login />} />
                                <Route path="guitars" element={<Guitars />} />
                                <Route path="guitars/:id" element={<Single />} />
                                <Route path="stores" element={<Stores />} />
                                <Route path="stores/:id" element={<SingleStore />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </StoreState>
            </GuitarState>
        </>
    )
}

//3. EXPORTACIÓN
export default Router