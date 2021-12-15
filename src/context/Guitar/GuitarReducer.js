const reducer = (globalState, action) => {
    switch (action.type) {
        //action son las acciones para que podamos hacer cambios en el estado global
        //switch hace una comparacion de un parametro contra todos los casos
        case "GET_GUITAR":
            return {
                ...globalState,
                singleGuitar: action.payload
            }
        case "GET_GUITARS":
            return {
                ...globalState,
                guitars: action.payload
            }
            
        case "CHANGE_TEXT":
            return {
                ...globalState, //los tres puntos son para indicar que solamente queremos cambiar ciertas partes del estado global y a continuación, después d ela coma, se indican los que SÍ cambia
                hola: action.payload
            }
        default:
            return globalState
        }
}

export default reducer

