// Importa la libreria de afirmación
const assert = require('assert');

// Definición del documento y sus elementos
const document = 
{
  forms: 
  {
    "MiFormulario": 
    {
      "Matricula": { value: "15830" },
      "Nombres": { value: "Jose" },
      "ApellidoP": { value: "y Luis" },
      "ApellidoM": { value: "4ever" }
    }
  },
  getElementById: (id) => ({focus: () => { }, value: "", }),
};

// Definición de la ventana de alerta.
const window = {confirm: () => true, alert: () => { },};

// Definición de los métodos declarados que operan la página
const { Registro, Verificar, AddToTable } = require('./index');


// Test 1: Comprueba que la función Verificar() compruebe que Matricula esté vacío.
describe('Ejecucion de Verificar', () => 
{
    it('Debe de mostrar que Matrícula es', () => 
    {
      document.forms["MiFormulario"]["Matricula"].value = "";
      const spy = sinon.spy(window, 'alert');
      Verificar();
      assert(spy.calledWith('Por favor llene todos los campos con información válida'));
      spy.restore();
    });
  });


// Test 2: Verifica que se inserte una nueva linea en la tabla.
describe('Ejecucion de AddToTable', () => {
    it('Debe insertar los valores en un nuevo renglón de la tabla', () => {
      const currentDate = new Date().toDateString();
      const table = { innerHTML: "" };
      document.getElementById = () => table;
      AddToTable("15830", "Jose", "y Luis", "4ever");
      assert(table.innerHTML.includes(currentDate));
    });
  });


// Test 3: Check if AddToTable handles trimming properly
describe('Verificacion de Trim en los campos', () => {
    it('El Trim() debe recortar los espacios vacios de los campos', () => {
      const currentDate = new Date().toDateString();
      const table = { innerHTML: "" };
      document.getElementById = () => table;
      AddToTable("  15830  ", "  Jose  ", "  y Luis  ", "  4ever  ");
      assert(!table.innerHTML.includes("  "));
    });
  });