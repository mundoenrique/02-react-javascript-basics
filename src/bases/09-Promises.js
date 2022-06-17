import { getHeroreById } from "./08-ImportExportFuncions";

export default function Promises() {

	heroePrmise(1)
		.then(data => {
			const paraghap = document.getElementById('heroe');
			paraghap.append(JSON.stringify(data))
		})
		.catch(console.warn)

	return (
		<>
			<h2>Promesas</h2>
			<p id="heroe"></p>
		</>
	)
}

const heroePrmise = (id) => {
	return new Promise((resolve, reject) => {
		const heroe = getHeroreById(id);

		if (heroe !== undefined) {
			resolve(heroe)
		} else {
			reject('el heroe no existe');
		}
	});

}
