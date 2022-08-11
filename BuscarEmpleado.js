// funcion//
function BuscarEmpleados() {

    const BuscarEmpleados = [
        { empleado1: "adrian duete", edad: "30" },
        { empleado2: "julieta guercetti", edad: "30" },
        { empleado3: "luciano guercetti", edad: "30" },
        { empleado4: "raul guercetti", edad: "30" },
        { empleado5: "ana brofman", edad: "30" },
    ]


    alert("Pumas M.I le da la bienvenida, seleccione el empeado a cargo del trabajo a realizar:")

    let SeleccioneEmpleado = prompt("Busqueda de empleado").toLowerCase()



    while (SeleccioneEmpleado != "salir") {
        switch (SeleccioneEmpleado) {
            case "adrian duete":
                if (SeleccioneEmpleado == "adrian duete") {
                    alert("Se encontro a: adrian duete");
                    const busquedaEmpleado1 = empleado.filter((el) => el.apellido.includes("adrian duete"));
                    console.log(busquedaEmpleado1);
                    alert(JSON.stringify(busquedaEmpleado1));
                }
                else if (SeleccioneEmpleado != "adrian duete") {
                    alert("No se encontro en empleado indicado, por favor de realizar una nueva busqueda respetando minusculas y espacios");
                }
                break;
            case "julieta guercetti":
                if (SeleccioneEmpleado == "julieta guercetti") {
                    alert("Se encontro a: julieta guercetti");
                    const busquedaEmpleado2 = empleado.filter((el) => el.apellido.includes("julieta guercetti"));
                    console.log(busquedaEmpleado2);
                    alert(JSON.stringify(busquedaEmpleado2));
                }

                else if (SeleccioneEmpleado != "julieta guercetti") {
                    alert("No se encontro en empleado indicado, por favor de realizar una nueva busqueda respetando minusculas y espacios");
                }
                break;
            case "brown":
                if (SeleccioneEmpleado == "luciano guercetti") {
                    alert("Se encontro a: luciano guercetti");
                    const busquedaEmpleado3 = empleado.filter((el) => el.apellido.includes("luciano guercetti"));
                    console.log(busquedaEmpleado3);
                    alert(JSON.stringify(busquedaEmpleado3));
                }

                else if (SeleccioneEmpleado != "luciano guercetti") {
                    alert("No se encontro en empleado indicado, por favor de realizar una nueva busqueda respetando minusculas y espacios");
                }
                break;
            case "raul guercetti":
                if (SeleccioneEmpleado == "raul guercetti") {
                    alert("Se encontro a: raul guercetti");
                    const busquedaEmpleado4 = empleado.filter((el) => el.apellido.includes("raul guercetti"));
                    console.log(busquedaEmpleado4);
                    alert(JSON.stringify(busquedaEmpleado4));
                }

                else if (SeleccioneEmpleado != "raul guercetti") {
                    alert("No se encontro en empleado indicado, por favor de realizar una nueva busqueda respetando minusculas y espacios");
                }
                break;

            case "ana brofman":

                if (SeleccioneEmpleado == "ana brofman") {
                    alert("Se encontro a: ana brofman");
                    const busquedaEmpleado5 = empleado.filter((el) => el.apellido.includes("ana brofman"));
                    console.log(busquedaEmpleado5);
                    alert(JSON.stringify(busquedaEmpleado5));
                }

                else if (SeleccioneEmpleado != "ana brofman") {
                    alert("No se encontro en empleado indicado, por favor de realizar una nueva busqueda respetando minusculas y espacios");
                }
                break;

            default:
                console.log("Sin empleo seleccionado");
                alert("No se encontro en empleado indicado, por favor de realizar una nueva busqueda respetando minusculas y espacios");
                break;
        }
        SeleccioneEmpleado = prompt("Busca otro tipo de trabajo? si quiere salir escriba salir");
    }
    console.log("fin de la busqueda");
}



