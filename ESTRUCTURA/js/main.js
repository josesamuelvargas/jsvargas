// Crear Comentario simple

/**
 * Crear comentario de mùltiples lineas (un slash y dos asteriscos, finaliza el comentario con asterisco slash)
 * @argument salon (Cambia de color solo para resaltar que en el codigo hay un argumento llamado "salon")
 * (El argumento no afecta el còdigo porque esta dentro de los comentarios)
 */

//tipo de datos

// booleano (true/false)
//para declaracaiòn de variables usar la palabra reservada: var

var verificado = false; //variable de tipo booleano
verificado = true;

//negacion --> !
!verificado;
//and --> &&
verificado && false;
//or --> ||
verificado || true;


//DATOS NUMERICOS

var edad = 15;
var peso = 70.67;
var latitud = 4.14555;

edad++; //imcrementa en una unidad la variable edad (edad=edad+1)
edad--; //decrementa en una uniodad la variable edad (edad=edad-1)

//math para trabajar operaciones con numeros

var numeroAleatorio = Math.random() * 100;
var potencia = Math.pow(10, 3);
var logaritmo = Math.log10(1000);


/*console.log(numeroAleatorio, potencia);
console.log(logaritmo);
alert("logaritmo de 1000" + logaritmo); //la alerta detiene el còdigo, el + concatena string con operaciòn numerica
console.log("no esta verificado", !verificado);*/

var listaNombres = [
    'Juan',
    'Pablo',
    "David"
];

var listaEdades = [
    10, 15, 50, 30, 40
];

//OBJETOS --> deben tener siempre una llave y estar acompañados de un valor

var estudiantes = {
    nombre: 'juan',
    apellido: 'vargas',
    telefono: 12345,
    casas: [
        {
            direccion: "cra 20",
            viveAqui: false
        },
        {
            direccion: "cra 10 con calle 26",
            viveAqui: false
        },
        {
            direccion: "av calle 26 con av boyaca",
            viveAqui: true
        }
    ]
}
//console.log(estudiantes); //impresion en pantalla automàtica

//BUCLES
/*for (var i=0; i<50; i++){
    console.log(i);
}

for (var i=0; i<=50;i=i+2){
    console.log(i);
}
*/
/*for (var i=0; i< listaNombres.length[3]; i++){
    console.log(i);
}*/

for (var indice in listaNombres) { //Muestra posiciòn de listanombres
    //console.log(indice);
}
for (var valor of listaNombres) { //muestra el contenido de la posiciòn de listanombres
    //console.log(valor);
}

//Ejercicio: algoritmo que detecte palabras palìndromes

//trucos: funciones split (para texto), reverse(para arreglo), to locate uppercase (text), 
//to locate lowercase(texto), replace (texto)

var mifuncion = function (arg1, arg2, arg3) {
    return arg1 + arg2 + arg3;
}

//console.log(mifuncion(1, 2, 4));
//console.log(mifuncion("a", 2, 4));


var esPalindromo = function (palabra) {


    console.log(palabra);
    var palabra1 = palabra.split('');
    palabra1.reverse();
    
    for (i=0; i<=palabra1.lenght;i++){
        if(palabra1[1]=palabra[a]){
            console.log("es palindromo");
    }else{
        console.log("no es palindromo");
    }

    /*if (palabra = palabra2) {
        resultado = true;
        console.log("es palindromo");
    } else {
        resultado = false;
        console.log("no es palindromo");
    }*/
    //return resultado
}

esPalindromo("amor a roma");


/*var listaPalindrome=["Somos",
"Ligar es ser agil",
"Oso",
"Arañara",
"Reconocer",
"Sometemos",
"Aibofobia",
"Oro",
"Se es o no se es",
"Se laminan animales",
"Anita la gorda lagartona no traga la droga latina",
"Odio la luz azul al oido",
"Amo la pacifica paloma",
"O rey  o joyero",
"Oiras orar a Rosario",
"Sor Rebecca hace berros",
"Anna",
"Yo de lo minimo le doy",
"A ti no  bonita",
"Anita lava la tina",
"Oi lo de mama  me dolio",
"Sometamos o matemos",
"La ruta natural",
"Isaac no ronca asi",
"Aman a Panama",
"82228 (un numero que es palindromo  pero tambien representa el numero de palindromos dados por el pianista Victor Carbajo)",
"¿Acaso comi mocos aca?",
"Asi le follo Felisa",
"A ser prosa ¡sorpresa!",
"No di eso  Poseidon",
"¡Otro coito  tio corto!",
"¡a babor! Ojete jorobaba",
"Nazi: ni vida divinizan",
"“A Dubai cedere” decia Buda",
"A mi monogamo mago no mima",
"Arroz a la dama da la zorra",
"Ajos alojaba bajo la soja",
"Anais repuso su persiana",
"Amaba la rosa a sor Alabama",
"Soñare arte de traer años",
"A la jirafa sana  safari jala",
"Alli  ni cocina ni cocinilla",
"Anularemos a la somera luna",
"Asi rimara poeta ateo para mi risa",
"O partes ese culo  o luces ese trapo",
"A tu padre le traere arte  lerda puta",
"Romano cagado coloco daga con amor",
"Se va su sonoro mozo moro  no sus aves",
"Siete melones al glase no le meteis",
"Su rival fuma cosas o camufla virus",
"Adan no catara banana barata con nada",
"Amigo no gima",
"Alli ves  Sevilla",
"Ali tomo tila",
"Arde ya la yedra",
"Alla cae diagrama y amarga idea calla",
"Ana  ilusa  atara la mala rata a su liana",
"Asi  Maria  raparas a Sara para ir a misa",
"La ruta nos aplica facil paso natural",
"No era mareo ni era marein  o era mareon",
"Oca pedorra jodio roido jarro de Paco",
"Sere ya soledad abobada de los ayeres",
"Yo he dado mala lana anal a la moda de hoy",
"Abajo mortecina madama ni cetro mojaba",
"Da del osado tocologo loco toda soledad",
"Adan no cebara alli racana vacia lusa rapaza para su laica vana carilla arabe con nada",
"Note como solo con amor la osa pelada mamada le paso al romano coloso moceton",
"Anote como Jose  de sobarles el rabo  se desojo  mocetona",
"Ella te dara detalle",
"Edipo lo pide",
"echele leche",
"Atar a la rata",
"Abuson  aca no suba",
"Adan no calla con nada",
"animo Romina",
"Odiosa  ¿has oido?",
"¿Subo tu auto o tu autobus?",
"Si  le dare una lanosa medalla de mason a la nuera de Lis",
"O sea  ¡¿ese peon azul  alado  no da la luz a Noe pese a eso?!",
"Reviver",
"Arenera",
"Recocer",
"Rapar",
"¡A la gorda drogala!",
"No deseo yo ese don",
"No traces en ese carton",
"La tomo como tal",
"atale  demoniaco Cain  o me delata",
"Anas uso tu auto Susana",
"Eso lo dira mi marido  lo se",
"Sarita Sosa es idonea odiseas o satiras",
"¡Y el alababa la ley!",
"Yo soy augur uruguayo  voy alla  alla voy. Augur uruguayo soy",
"Alli ceso tu sed  ¿Oyes eso  Jair amada? ¿Has oido a la odiosa hada Maria Jose? Se yo de su tosecilla",
"Sorbi libros",
"Somos asomos",
"A la luna dañad  anulala",
"Oso come cena  mas amanece mocoso",
"La turba brutal",
"A la ruda mona  tal platano  madurala",
"Nace por otoño  toro pecan",
"agil ligar  fragil liga.",
"Aire bisoño terso os retoño Siberia.",
"Raido sea mi cutis si tu cima es odiar.",
"A Jorge no da ese dogo deseado negro  ¡ja!",
"Salome  me molas.",
"Soborno con robos.",
"Amo idiota  mato idioma.",
"Al amar  aporto otro par ¡Amala!",
"O bebo lo vivo o vivo lo bebo.",
"Ame o poema."];
for(frace of listaPalindrome){
  console.log(esPalindrome(frace));
}*/