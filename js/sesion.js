var user_name, pass, reServicio, reMision, reProducto, result=0;
function sesion(){

        pass = document.getElementById("pass").value;

        if(pass=="questions"){
            window.location = document.formclave.pass.value + ".html"
            // window.location = "questions" + ".html"
        }else{
            alert("La clave es incorrecta")
            window.location = "index" + ".html"
        }
        return false;

}

function calcular(){
    reServicio = document.response.servicio.value;
    reMision = document.response.mision.value;
    reProducto = document.response.producto.value;
//debugger;
    switch(reServicio.toLowerCase()){
        case "programacion" ||  "diseño":
            result=result+5;
        default:
            result =result+0;
        break;
    }

    switch(reMision.toLowerCase()){
        case "comunicacion":
            result=result+5;
        default:
            result +=0;
        break;
    }

    switch(reProducto.toLowerCase()){
        case "web" ||  "tiendas":
            result=result+5;
        default:
            result = result+0;
        break;
    }
    var theDiv = document.getElementById("result");
    var content = document.createTextNode( "Resultado :" + result);
    theDiv.appendChild(content);

}
