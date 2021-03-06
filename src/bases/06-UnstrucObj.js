const persona = {
	nombre: 'Enrique',
	edad: 45,
	clave: 'Ironman',
};

const { nombre, edad, clave } = persona;

const retornaPersona = ({ nombre, rango = 'Capitán' }) => ({ nombre, rango });

const usContext = ({ edad, clave }) => {
	return {
		nombreClave: clave,
		anios: edad,
		latLng: {
			lat: 14.456464,
			lng: -18.646464,
		},
	};
};

const {
	nombreClave,
	anios,
	latLng: { lat, lng },
} = usContext(persona);

export default function UnstrucObj() {
	return (
		<>
			<h2>Desestructuración de objetos</h2>
			<p>Nombre: {nombre}</p>
			<p>Edad: {edad}</p>
			<p>clave: {clave}</p>
			<p>Obtener persona: {JSON.stringify(retornaPersona(persona))}</p>
			<p>
				Obtener avenger: {nombreClave} {anios} {lat} {lng}
			</p>
		</>
	);
}
