// funcion//
let arrayDeempleado=[]
function TiposDeTrabajos() {

    const trabajos = [
        { trabajo1: "limpieza.humeda", empleado: "adrian duete", edad: "30" },
        { trabajo2: "limpieza.seca", empleado: "julieta guercetti", edad: "30" },
        { trabajo3: "limpieza.en.altura", empleado: "luciano guercetti", edad: "30" },
        { trabajo4: "construccion", empleado: "raul guercetti", edad: "30" },
        { trabajo5: "maquinaria", empleado: "ana brofman", edad: "30" },
    ]


    alert("Pumas M.I le da la bienvenida, seleccione el empeado a cargo del trabajo a realizar:")

    let SeleccioneTrabajo = prompt("Busqueda de empleado").toLowerCase()



    while (SeleccioneTrabajo != "salir") {
        switch (SeleccioneTrabajo) {
            case "adrian duete":
                if (SeleccioneTrabajo == "adrian duete") {
                    alert("Se encontro a: adrian duete");
                    const busquedaTrabajo1 = empleado.filter((el) => el.apellido.includes("adrian duete"));
                    console.log(busquedaTrabajo1);
                    alert(JSON.stringify(busquedaTrabajo1));
                }
                else if (SeleccioneTrabajo != "adrian duete") {
                    alert("No se encontro en empleado indicado, por favor de realizar una nueva busqueda respetando minusculas y espacios");
                }
                break;
            case "julieta guercetti":
                if (SeleccioneTrabajo == "julieta guercetti") {
                    alert("Se encontro a: julieta guercetti");
                    const busquedaTrabajo2 = empleado.filter((el) => el.apellido.includes("julieta guercetti"));
                    console.log(busquedaTrabajo2);
                    alert(JSON.stringify(busquedaTrabajo2));
                }

                else if (SeleccioneTrabajo != "julieta guercetti") {
                    alert("No se encontro en empleado indicado, por favor de realizar una nueva busqueda respetando minusculas y espacios");
                }
                break;
            case "brown":
                if (SeleccioneTrabajo == "luciano guercetti") {
                    alert("Se encontro a: luciano guercetti");
                    const busquedaTrabajo3 = empleado.filter((el) => el.apellido.includes("luciano guercetti"));
                    console.log(busquedaTrabajo3);
                    alert(JSON.stringify(busquedaTrabajo3));
                }

                else if (SeleccioneTrabajo != "luciano guercetti") {
                    alert("No se encontro en empleado indicado, por favor de realizar una nueva busqueda respetando minusculas y espacios");
                }
                break;
            case "raul guercetti":
                if (SeleccioneTrabajo == "raul guercetti") {
                    alert("Se encontro a: raul guercetti");
                    const bbusquedaTrabajo4 = empleado.filter((el) => el.apellido.includes("raul guercetti"));
                    console.log(bbusquedaTrabajo4);
                    alert(JSON.stringify(bbusquedaTrabajo4));
                }

                else if (SeleccioneTrabajo != "raul guercetti") {
                    alert("No se encontro en empleado indicado, por favor de realizar una nueva busqueda respetando minusculas y espacios");
                }
                break;

            case "ana brofman":

                if (SeleccioneTrabajo == "ana brofman") {
                    alert("Se encontro a: ana brofman");
                    const busquedaTrabajo5 = empleado.filter((el) => el.apellido.includes("ana brofman"));
                    console.log(busquedaTrabajo5);
                    alert(JSON.stringify(busquedaTrabajo5));
                }

                else if (SeleccioneTrabajo != "ana brofman") {
                    alert("No se encontro en empleado indicado, por favor de realizar una nueva busqueda respetando minusculas y espacios");
                }
                break;

            default:
                console.log("Sin empleo seleccionado");
                alert("No se encontro en empleado indicado, por favor de realizar una nueva busqueda respetando minusculas y espacios");
                break;
        }
        SeleccioneTrabajo = prompt("Busca otro tipo de trabajo? si quiere salir escriba salir");
    }
    console.log("fin de la busqueda");
    
    mostrarListado()
}



function mostrarListado()
 {
    let listadoLI=document.getElementById('listadoUL');
    listadoLI.innerHTML="";
    for(empleado of arrayDeempleado)
    {
        listadoLI.appendChild(empleado.retornarNodoLI());
    }
}

class Empleado
{
    constructor(nombre,apellido,edad,)
    {
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.fecha=new Date();
    }
    retornarNodoLI()
    {
         let nodo =document.createElement('li');
        nodo.innerText=`${this.nombre} -- ${this.apellido} -- ${this.edad} `;
        return nodo;
    }
}