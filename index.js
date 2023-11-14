window.addEventListener("load", IniciarJS);

function IniciarJS()
{
    console.log("----------------------------------------------------------");
    console.log("Estándares y metricas para el desarrollo de software");
    console.log("TIADS MATUTINO 4D");
    console.log("Elaborado por: 15830 - José Miguel Angel Ibarra Velázquez");
    console.log("Elaborado por: 21089 - Luis Anselmo Hernandez Perez");
    console.log("----------------------------------------------------------");

    var Registrar = document.getElementById("Registrar");
    Registrar.addEventListener("click", Registro);
}

function Registro()
{
    var resultado = window.confirm('¿Quieres enviar tus datos de asistencia?');
    if (resultado === true)
    {
        Verificar();
    }
    
    else
    {
        window.alert('Abortando operación');
    }
}

function Verificar()
{
    var Matricula = document.forms["MiFormulario"]["Matricula"].value;
    var Nombres = document.forms["MiFormulario"]["Nombres"].value;
    var ApellidoP = document.forms["MiFormulario"]["ApellidoP"].value;
    var ApellidoM = document.forms["MiFormulario"]["ApellidoM"].value;

    Matricula = Matricula.trim();
    Nombres = Nombres.trim();
    ApellidoP = ApellidoP.trim();
    ApellidoP = ApellidoM.trim();

        if(Matricula == "" || Matricula == null)
        {
            window.alert("Por favor llene todos los campos con información válida");
            document.getElementById("Matricula").focus();
            document.getElementById("Matricula").value = "";
        }
        else if (Nombres == "" || Nombres == null)
        {
            window.alert("Por favor llene todos los campos con información válida");
            document.getElementById("Nombres").focus();
            document.getElementById("Nombres").value = "";
        }
        else if (ApellidoP == "" || ApellidoP == null)
        {
            window.alert("Por favor llene todos los campos con información válida");
            document.getElementById("ApellidoP").focus();
            document.getElementById("ApellidoP").value = "";
        }
        else if (ApellidoM == "" || ApellidoM == null)
        {
            window.alert("Por favor llene todos los campos con información válida");
            document.getElementById("ApellidoM").focus();
            document.getElementById("ApellidoM").value = "";
        }
        
        else
        {
            window.alert("Registro exitoso");
            AddToTable(Matricula, Nombres, ApellidoP, ApellidoM);
            document.getElementById("Matricula").value = "";
            document.getElementById("Nombres").value = "";
            document.getElementById("ApellidoP").value = "";
            document.getElementById("ApellidoM").value = "";
            document.getElementById("Matricula").focus();
            
        }
}

function AddToTable(Matricula, Nombres, ApellidoP, ApellidoM)
{
    const currentDate = new Date().toDateString();

    Matricula = Matricula.trim();
    Nombres = Nombres.trim();
    ApellidoP = ApellidoP.trim();
    ApellidoP = ApellidoM.trim();

    var TablaAsistencias = document.getElementById("Asistencias");

    TablaAsistencias.innerHTML += "<tr> <th>" + currentDate + "</th>" +
    "<th>" + Matricula.toUpperCase() + "</th>" +
    "<th>" + ApellidoP.toUpperCase() + "</th>" +
    "<th>" + ApellidoM.toUpperCase() + "</th>" +
    "<th>" + Nombres.toUpperCase() + "</th> </tr>";
}