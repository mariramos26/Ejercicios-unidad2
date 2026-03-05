let docentes = JSON.parse(localStorage.getItem("docentes")) || [];
let indiceEditando = -1;

function agregarDocente() {

  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let fecha = document.getElementById("fecha").value;

  if (nombre === "" || apellido === "" || fecha === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  let docente = {
    tipo: document.getElementById("tipoDoc").value,
    nombre: nombre,
    apellido: apellido,
    fecha: fecha,
    nivel: document.getElementById("nivel").value,
    area: document.getElementById("area").value
  };

  if (indiceEditando === -1) {
    docentes.push(docente);
  } else {
    docentes[indiceEditando] = docente;
    indiceEditando = -1;
    document.getElementById("btnAgregar").textContent = "Agregar";
  }

  mostrarDocentes();
  guardarEnStorage();
  limpiarFormulario();
}

function editarDocente(index) {
  let d = docentes[index];

  document.getElementById("tipoDoc").value = d.tipo;
  document.getElementById("nombre").value = d.nombre;
  document.getElementById("apellido").value = d.apellido;
  document.getElementById("fecha").value = d.fecha;
  document.getElementById("nivel").value = d.nivel;
  document.getElementById("area").value = d.area;

  indiceEditando = index;
  document.getElementById("btnAgregar").textContent = "Guardar cambios";
}

function mostrarDocentes() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  let textoBuscar = document.getElementById("buscar").value.toLowerCase();

  let resultado = docentes.filter(d =>
    d.nombre.toLowerCase().includes(textoBuscar)
);

  resultado.forEach((d, index) => {
    lista.innerHTML += `
      <li style="border: 1px solid #ccc; padding: 10px; margin-bottom: 8px; list-style: none; border-radius: 6px;">
        <strong>${d.nombre} ${d.apellido}</strong><br>
        <small>${d.tipo} | ${d.fecha} | ${d.nivel} | ${d.area}</small><br>
        <button class="btn-tarjeta" onclick="editarDocente(${docentes.indexOf(d)})" style="background:#007bff; color:white; border:none; padding:4px 10px; border-radius:4px; cursor:pointer; margin-right:6px;">Editar</button>
        <button class="btn-tarjeta" onclick="eliminarDocente(${docentes.indexOf(d)})" style="background:red; color:white; border:none; padding:4px 10px; border-radius:4px; cursor:pointer;">Eliminar</button>
      </li>
    `;
  });
}

function limpiarFormulario() {
  document.getElementById("tipoDoc").value = "C.C";
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("nivel").value = "Pregrado";
  document.getElementById("area").value = "Matemáticas";
}


function eliminarDocente(index) {
  docentes.splice(index, 1);
  mostrarDocentes();
  guardarEnStorage();
}


function guardarEnStorage() {
  localStorage.setItem("docentes", JSON.stringify(docentes));
}

//mostrarDocentes();