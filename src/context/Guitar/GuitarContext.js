//Inicialización del context, esto significa que empieza con un valor inicial de null
// pero conforme vayamos agregando nuevos valores, "null" cambiará a un objeto
import {createContext} from "react"

const GuitarContext = createContext(null)

export default GuitarContext