let btnCargarListado = document.getElementById('btn-cargar-listado');
btnCargarListado.addEventListener('click', cargarListadoGifs );








async function getGifs(){

	let apiKey = 'Hhli4pP1vrJ8QgAFm85OogcEUA0bw1Xw';
	let url = 'https://api.giphy.com/v1/gifs/search';

	let cantidad = 5;


	let terminoBuscado = document.getElementById('txt-busqueda').value;

	url += `?api_key=${apiKey}&q=${terminoBuscado}&limit=${cantidad}`;

	let response = await fetch( url );
	let datos    = await response.json();

	
	return datos;
}




function cargarListadoGifs(){


	getGifs().then(	mostrarGifs	);

} 

function mostrarGifs ( gifs ){
	

	let listadoGifs= document.getElementById('listado-Gifs');

	listadoGifs.innerHTML= '';

	
	for (gif of gifs.data){
		listadoGifs.innerHTML += `<img src="${gif.images.original.url}">`;
	}
}





