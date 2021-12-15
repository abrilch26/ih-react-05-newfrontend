import { useReducer } from "react"
import StoreContext from "./StoreContext"
import StoreReducer from "./StoreReducer"

import axiosClient from "./../../config/axios"

const StoreState = (props) => {
    //1.INITIAL STATE
    const initialState = {
        stores: [],
        singleStore: {
            domicilio: "",
            telefono: ""
        },
        hello: "Tamo' bien"
    }

    //2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
    const [globalState, dispatch] = useReducer(StoreReducer, initialState)

    //3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
    const changeText = () => {
        dispatch ({
            type: "CHANGE_TEXT",
            payload: "Auxilio, esto no es un meme"
        })
    }

    const getStores = async () => {

        const res = await axiosClient.get("stores/readall")
        console.log("getting stores...")

        const storesList = res.data.data

        dispatch ({
            type: "GET_STORES",
            payload: storesList
        })
    }

    const getStore = async (storeId) => {
        const res = await axiosClient.get(`stores/readone/${storeId}`)

        const selectedStore = res.data.data
        console.log(res)

        dispatch ({
            type: "GET_STORE",
            payload: selectedStore
        })
    }


    //4. RETORNO
    return (
        <StoreContext.Provider
            value={{
                stores: globalState.stores,
                hello: globalState.hello, 
                singleStore: globalState.singleStore,
                changeText,
                getStore,
                getStores
            }}

        >
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreState