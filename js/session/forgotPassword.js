
const urlBasic = "https://teacher-test-backend-production-e58a.up.railway.app";
//const urlBasic = "https://teacher-test.herokuapp.com"
// RECUPERAR CONTRASEÑA
const recuperarContraseña = document.getElementById("recuperarContraseña");

recuperarContraseña.addEventListener("click", () => {
  mostrarSpinner();
  try {
    // Obtengo los datos
    let codigo = document.getElementById("inputCodigo").value;
    let documento = document.getElementById("inputDocumento").value;

    const data = {
      codigo,
      documento,
    };

    recuperarContraseñaServidor(data);
  } catch (error) {
    console.log(error);
    ocultarSpinner();
  }
});

async function recuperarContraseñaServidor(data) {
  await fetch(urlBasic + "/views/forgotPassword.html", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Headers": "Authorization",
      "Cache-Control": "no-store",
    },
    cache: "no-store",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.success) {
        // Contraseña recuperada con éxito
        body = `<div class="alert alert-success" role="alert">
          Contraseña recuperada con éxito. Se ha enviado un correo electrónico con la nueva contraseña.
        </div>`;
        document.getElementById("alert").innerHTML = body;
      } else {
        // Error al recuperar contraseña
        body = `<div class="alert alert-danger" role="alert">
          Ha ocurrido un error al recuperar la contraseña. Verifica los datos ingresados.
        </div>`;
        document.getElementById("alert").innerHTML = body;
      }
      ocultarSpinner();
      setTimeout(() => {
        document.getElementById("alert").innerHTML = "";
      }, 5000);
    })
    .catch((err) => {
      ocultarSpinner();
      console.log(err);
    });
}
