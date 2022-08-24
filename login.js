let nombreIngresado;
function LogIn()
{
    nombreIngresado = document.getElementById("username").value;
    claveIngresado = document.getElementById("password").value;
    let mensaje;
    let listadoDeUsuarios=traerUsuariosDeLaBase();
    let usuarioRetornado=listadoDeUsuarios.find((usuario)=>usuario.nombre==nombreIngresado);
    if(usuarioRetornado)
    {
        if(usuarioRetornado.clave==claveIngresado)
        {
            mensaje="bienvenido;"
            window.location.assign("inicio.html")
        }
        else
        {
            mensaje="Clave Incorrecta"
            return;
        }
    }
    else
    {
        mensaje="Usario incorrecto"
        alert("Usario incorrecto y/o Password")
        alert("Favor de iniciar como invitado y 123")
    }
}
function traerUsuariosDeLaBase()
 {
    let usuarios=[];
    usuarios.push(new Usuario("invitado","123"));
    return usuarios;
 }
 class Usuario{
    constructor(nombre,clave)
    {
        this.nombre=nombre;
        this.clave=clave;
    }
 }