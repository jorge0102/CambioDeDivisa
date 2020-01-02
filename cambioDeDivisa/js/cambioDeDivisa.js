
let save = new Array();
let err = new Array();

//Pinta los datos en la pantalla  tengo que hacer casos de error 	
function add(dato){
	let pan = document.getElementById("pantalla").value += dato;
	toImport(dato);
	
	if (save[0] == punto){
		document.getElementById("pantalla").value = "NaN";
	
	}
	for(let i = 0; i < save.length; i++){
		if (save[i] == punto && save[i+1] == punto){
			document.getElementById("pantalla").value = "NaN";
		}
	}
	
	return parseFloat(pan);
}

//Borra la pantalla
function erase(){
	document.getElementById("pantalla").value = "";
	save = []
}

//introduce los numero y la comas en el array
function toImport(dato){	
	save.push(dato);
}

//tengo que hacer operaciones todas las operaciones
function change(chang){
	if(document.getElementById("pantalla").value == "NaN"){
		document.getElementById("pantalla").value = "";
	}
	let divisa = document.getElementById("divisa").value;
	error(chang);
	let divisa1 = add();
	parseFloat(divisa1);
	if (divisa == 0 || divisa == 1 || divisa == 2 || divisa == 3 || divisa == 4){
		let num = divisa1 * moneda[divisa][chang];
		document.getElementById("pantalla").value = num;
	}
}


function error(dato){
	let err2 = err.pop()
	parseInt(err2);
	if (dato == err2){	
		document.getElementById("pantalla").value = "NaN";
	}
	err.push(dato);
}

//con este array controlo las operaciones
let moneda = new Array(
	new Array(1, 1.13755, 0.88489, 1.51186 ,1.58559),
	new Array(0.87968, 1, 0.77615, 1.32632, 1.3951),
	new Array(1.1324, 1.28697, 1, 1.70693, 1.79544),
	new Array(0.66299, 0.75367, 0.58496, 1, 1.05144),
	new Array(0.62993, 0.71566, 0.55546, 0.94919, 1));

//constantes para controlar la entrada de datos del index
const uno = 1;
const dos = 2;
const tres = 3;
const cuatro = 4;
const cero = 0;
const punto = "."


