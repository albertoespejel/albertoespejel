const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Utilizo el selector por 'id' ya que en HTML cambiamos de clase a id
const $n = document.querySelector('#name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('#location');

async function displayUser(username) {
  try {
    // Mensaje de carga mientras se obtiene la respuesta
    $n.textContent = 'Cargando...';

    // Obtengo los datos del usuario desde la API
    const response = await fetch(`${usersEndpoint}/${username}`);
    
    // Chequeo si la respuesta es correcta
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Convierto la respuesta en un objeto JSON
    const data = await response.json();

    // Asigno los datos obtenidos a los elementos correspondientes
    $n.textContent = data.name || 'Nombre no disponible';
    $b.textContent = data.blog || 'Blog no disponible';
    $l.textContent = data.location || 'Ubicación no disponible';

  } catch (err) {
    // Llamo a handleError en caso de error
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Mensaje de error para el usuario
  $n.textContent = `Algo salió mal: ${err.message}`;
}

// Llamo a la función displayUser para mostrar los datos de un usuario
displayUser('stolinski');