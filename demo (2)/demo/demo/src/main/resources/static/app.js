const API = "http://localhost:8081/docentes";
let indiceEditando = null;

async function agregarDocente() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let fecha = document.getElementById("fecha").value;

  if (nombre === "" || apellido === "" || fecha === "") {
    alert("Por favor completa todos los campos.");
    return;
  }

  let docente = {
    tipoDoc: document.getElementById("tipoDoc").value,
    nombre: nombre,
    apellido: apellido,
    fechaNac: fecha,
    nivel: document.getElementById("nivel").value,
    area: document.getElementById("area").value
  };

  if (indiceEditando === null) {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(docente)
    });
    mostrarMensaje("✅ Docente agregado correctamente", "exito");
  } else {
    await fetch(`${API}/${indiceEditando}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(docente)
    });
    indiceEditando = null;
    document.getElementById("btnAgregar").textContent = "Agregar";
    mostrarMensaje("✅ Docente actualizado correctamente", "exito");
  }
  mostrarDocentes();
  limpiarFormulario();
}

async function mostrarDocentes() {
  document.getElementById("contenedorLista").style.display = "block";
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  let textoBuscar = document.getElementById("buscar").value.toLowerCase();

  const response = await fetch(API);
  const docentes = await response.json();

  let resultado = docentes.filter(d =>
    d.nombre.toLowerCase().includes(textoBuscar)
  );

  resultado.forEach(d => {
    lista.innerHTML += `
      <tr>
        <td>${d.tipoDoc}</td>
        <td>${d.nombre}</td>
        <td>${d.apellido}</td>
        <td>${d.fechaNac}</td>
        <td>${d.nivel}</td>
        <td>${d.area}</td>
        <td>
          <button class="btn-tarjeta" onclick="editarDocente(${d.id})" style="background:#007bff; color:white; border:none; padding:4px 10px; border-radius:4px; cursor:pointer; margin-right:6px; width:70px;">Editar</button>
          <button class="btn-tarjeta" onclick="eliminarDocente(${d.id})" style="background:red; color:white; border:none; padding:4px 10px; border-radius:4px; cursor:pointer; width:70px;">Eliminar</button>
        </td>
      </tr>
    `;
  });
}

async function editarDocente(id) {
  const response = await fetch(`${API}/${id}`);
  const d = await response.json();

  document.getElementById("tipoDoc").value = d.tipoDoc;
  document.getElementById("nombre").value = d.nombre;
  document.getElementById("apellido").value = d.apellido;
  document.getElementById("fecha").value = d.fechaNac;
  document.getElementById("nivel").value = d.nivel;
  document.getElementById("area").value = d.area;

  indiceEditando = id;
  document.getElementById("btnAgregar").textContent = "Guardar cambios";
}

async function eliminarDocente(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  mostrarMensaje("🗑️ Docente eliminado correctamente", "error");
  mostrarDocentes();
}

function limpiarFormulario() {
  document.getElementById("tipoDoc").value = "C.C";
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("nivel").value = "Pregrado";
  document.getElementById("area").value = "Matemáticas";
}

function mostrarMensaje(texto, tipo) {
  let mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.style.display = "block";
  mensaje.style.background = tipo === "exito" ? "#d4edda" : "#f8d7da";
  mensaje.style.color = tipo === "exito" ? "#155724" : "#721c24";
  setTimeout(() => { mensaje.style.display = "none"; }, 3000);
}