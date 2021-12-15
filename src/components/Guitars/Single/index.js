import React, { useContext } from 'react'
import GuitarContext from './../../../context/Guitar/GuitarContext'

import {useParams} from 'react-router-dom'


export default function Single() {

	const ctx = useContext(GuitarContext)
	const { singleGuitar, getGuitar } = ctx

	const params = useParams()
	const id = params.id


	return (
		<div>
			Página individual de guitarra			
            
			<button onClick={() => { getGuitar(id) }}>
				Obtener guitarra individual
			</button>

            <h1>Marca: {singleGuitar.nombre}</h1>
            <p>Descripción: {singleGuitar.descripcion}</p>
            <p>Precio: {singleGuitar.precio}</p>


		</div>
	)
}