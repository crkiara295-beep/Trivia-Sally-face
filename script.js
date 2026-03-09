const preguntas=[
{
pregunta:"¿Cómo se llama el protagonista de Sally Face?",
opciones:["Larry Johnson","Sal Fisher","Todd Morrison","Travis Phelps"],
correcta:1
},
{
pregunta:"¿Por qué Sal usa una máscara protésica?",
opciones:["Por tradición familiar","Porque sufrió un accidente traumático en su infancia","Porque pertenece a un culto","Para ocultar su identidad secreta"],
correcta:1
},
{
pregunta:"¿Cómo se llaman los apartamentos donde vive Sal?",
opciones:["Johnson Residence","Addison Apartments","Shadow Towers","Fisher Complex"],
correcta:1
},
{
pregunta:"¿Qué organización oscura aparece en la historia?",
opciones:["El Juicio Final","Los Ojos Rojos","Los Devoradores de Dios","La Orden Roja"],
correcta:2
},
{
pregunta:"¿Qué instrumento toca Sal?",
opciones:["Piano","Bajo","Guitarra eléctrica","Batería"],
correcta:2
},
{
pregunta:"¿Cómo se llama el gato de Sal?",
opciones:["Pelusa","Gizmo","Larry","Gringo"],
correcta:1
},
{
pregunta:"Es el mejor amigo de Sal y posteriormente su hermanastro.",
opciones:["Todd","Larry","Travis","Kenneth"],
correcta:1
},
{
pregunta:"Es una amiga cercana de Sal Fisher.",
opciones:["Ashley","Larry","Ash","Travis"],
correcta:0
},
{
pregunta:"Conocido inicialmente como el acosador de Sal.",
opciones:["Ash","Megan","Travis","Robert"],
correcta:2
},
{
pregunta:"¿Qué ingrediente secreto usaba la Sra. Packerton?",
opciones:["Carne humana","Carne podrida de cerdo","Carne de rata","Sustancias alucinógenas"],
correcta:0
}
];

let indice=0;
let puntaje=0;

function empezarTrivia(){

let musica=document.getElementById("musica");
musica.play();

document.getElementById("inicio").style.display="none";
document.getElementById("nombre").style.display="flex";
}

function comenzarPreguntas(){
let nombre=document.getElementById("nombreJugador").value;
if(nombre===""){
alert("Escribe tu nombre");
return;
}

document.getElementById("nombre").style.display="none";
document.getElementById("preguntas").style.display="flex";
mostrarPregunta();
}

function mostrarPregunta(){
if(indice>=preguntas.length){
mostrarResultado();
return;
}

let p=preguntas[indice];
document.getElementById("pregunta").innerText=p.pregunta;

let opcionesHTML="";
p.opciones.forEach((op,i)=>{
opcionesHTML+=`<button onclick="responder(${i})">${op}</button>`;
});

document.getElementById("opciones").innerHTML=opcionesHTML;
document.getElementById("contador").innerText=
"Pregunta "+(indice+1)+" de "+preguntas.length;
document.getElementById("puntaje").innerText=
"Puntaje: "+puntaje;

let progreso=(indice/preguntas.length)*100;
document.getElementById("progreso").style.width=progreso+"%";
}

function responder(opcion){
if(opcion===preguntas[indice].correcta){
puntaje+=10;
}

indice++;
mostrarPregunta();
}
function mostrarResultado(){
document.getElementById("preguntas").style.display="none";
document.getElementById("resultado").style.display="flex";
document.getElementById("puntosFinal").innerText=
"Tu puntaje fue: "+puntaje;
let texto="";
if(puntaje<=30){
texto="Aún no exploras lo suficiente los apartamentos Addison";
} else if(puntaje<=70){
texto="Buen detective paranormal";
} else if(puntaje<=90){
texto="Fan comprometido del lore";
} else{
texto="Experto absoluto en Sally Face";
}

document.getElementById("mensajeFinal").innerText=texto;
}