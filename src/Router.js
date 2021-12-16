//1. IMPORTACIONES
import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./components/Home"
import Register from "./components/Auth/Register"
import Login from "./components/Auth/Login"

import Guitars from "./components/Guitars"
import CreateGuitar from "./components/Guitars/Create"
import Single from "./components/Guitars/Single"
import Edit from "./components/Guitars/Single/Edit"


import Stores from "./components/Stores"
import CreateStore from "./components/Stores/CreateStore"
import SingleStore from "./components/Stores/SingleStore"

import GuitarState from "./context/Guitar/GuitarState"
import StoreState from "./context/Store/StoreState"
import UserState from './context/User/UserState'


//2. FUNCION
const Router = () => {
    return (
        <>
        
		<UserState> 
            <GuitarState>
                <StoreState>
                    <BrowserRouter >
                        <Routes>
                            <Route path="/" element={<Layout />} >
                                <Route index element={<Home />} />
                                <Route path="registro" element={<Register />} />
                                <Route path="iniciar-sesion" element={<Login />} />
                                <Route path="guitars" element={<Guitars />} />
                                <Route path="guitars/create" element={<CreateGuitar />} />
                                <Route path="guitars/:id" element={<Single />} />
                                <Route path ="guitars/:id/edit" element= {<Edit />} />
                                <Route path="stores" element={<Stores />} />
                                <Route path="stores/create" element={<CreateStore />} />
                                <Route path="stores/:id" element={<SingleStore />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </StoreState>
            </GuitarState>
            </UserState>
        </>
    )
}

//3. EXPORTACIÓN
export default Router