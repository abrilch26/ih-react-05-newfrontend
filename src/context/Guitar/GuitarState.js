//ESTADO GLOBAL AKA STORE

//La arquitectura que se utiliza para generar el estado global, se le conoce como FLUX
 import { useReducer } from "react"
 import GuitarContext from "./GuitarContext"
 import GuitarReducer from "./GuitarReducer"

 import axiosClient from "./../../config/axios"



 const GuitarState = (props) => {

    //1. INITIAL STATE (ESTADO INICIAL)
    const initialState = { //forzosamente debe de ser un objeto SIEMPRE
        guitars: [],
        singleGuitar: {
            _id: "",
			nombre: "",
			descripcion: "",
			color: "",
			precio: "",
			imagen: ""
        },
        hola:"holamundo"
    }

    //2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
    //los reducers son funciones que alteran el estado global
    const [globalState, dispatch] = useReducer(GuitarReducer, initialState)

    //3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
    const changeText = () => {
        dispatch({ // ESTE OBJETO SE LE CONOCE COMO ACTION
			type: "CHANGE_TEXT",
			payload: "Estoy aprendiendo Context sin morir." 		
		})

	}

	const getGuitars = async () => {

		const res = await axiosClient.get("guitars/readall")

		console.log("Obteniendo guitarras...")
		
		const list = res.data.data

		dispatch({
			type: "GET_GUITARS",
			payload: list
		})

	}

	const getGuitar = async (guitarId) => {
		
		const res = await axiosClient.get(`guitars/readone/${guitarId}`)
        const selectedGuitar = res.data.data

		dispatch({
			type: "GET_GUITAR",
			payload: selectedGuitar
		})
	}

	const createGuitar = async (form) => {

		const res = await axiosClient.post("guitars/create", form)
		console.log(res)
	}


	// 4. RETORNO
	return (
		<GuitarContext.Provider
			value={{
				guitars: globalState.guitars,
				hola: globalState.hola,
				singleGuitar: globalState.singleGuitar,
				changeText,
				getGuitars,
				getGuitar,
				createGuitar
			}}
		>
			{props.children}
		</GuitarContext.Provider>
	)

}

export default GuitarState