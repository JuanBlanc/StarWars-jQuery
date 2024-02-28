$(document).ready(function() {
  $('.tarjeta').click(function() {
    var url = $(this).data('url');
    obtenerInformacion(url);
    
    // Oculta las otras tarjetas
    $('.tarjeta').not(this).hide();

    // Mueve la tarjeta clickeada a la izquierda y aplica la rotación y posición
    $(this).animate({left: '50px', top: '50px'}).css('transform', 'rotate(0deg)');
    
    // Muestra el div con id "datos"
    $('#datos').css('display', 'block');
  });

  $('#volver').click(function() {
    window.location.reload();
  });

  function obtenerInformacion(url) {
    $.ajax({
      url: url,
      method: 'GET',
      success: function(data) {
        // Manipula los datos recibidos para mostrar los que quieras
        var info = '<h2>' + data.name + '</h2>';
        info += '<p>Altura: ' + data.height + ' cm</p>';
        info += '<p>Peso: ' + data.mass + ' kg</p>';
        info += '<p>Color de pelo: ' + data.hair_color + '</p>';
        info += '<p>Color de piel: ' + data.skin_color + '</p>';
        info += '<p>Color de ojos: ' + data.eye_color + '</p>';
        info += '<p>Año de nacimiento: ' + data.birth_year + '</p>';
        info += '<p>Género: ' + data.gender + '</p>';
        
        // Obtener información sobre el planeta de nacimiento
        obtenerPlaneta(data.homeworld, function(planeta) {
          info += '<h3>Planeta Natal</h3>';
          info += '<p>Nombre: ' + planeta.name + '</p>';
          info += '<p>Período de rotación: ' + planeta.rotation_period + ' horas</p>';
          info += '<p>Período orbital: ' + planeta.orbital_period + ' días</p>';
          info += '<p>Diámetro: ' + planeta.diameter + ' km</p>';
          info += '<p>Clima: ' + planeta.climate + '</p>';
          info += '<p>Gravedad: ' + planeta.gravity + '</p>';
          info += '<p>Terreno: ' + planeta.terrain + '</p>';
          info += '<p>Agua en la superficie: ' + planeta.surface_water + '</p>';
          info += '<p>Población: ' + planeta.population + '</p>';
          
          // Mostrar la información completa
          $('#info').html(info);
        });
      },
      error: function(err) {
        console.log('Error al obtener información de la API');
      }
    });
  }
  
  function obtenerPlaneta(url, callback) {
    $.ajax({
      url: url,
      method: 'GET',
      success: function(data) {
        callback(data);
      },
      error: function(err) {
        console.log('Error al obtener información del planeta');
      }
    });
  }
});
function generarLuvia(nGotas) {
  const  divLuvia =$(".lluvia");
for (let i = 0; i < nGotas; i++) {
  const gota=$("<gota></gota>");
  const tamano=Math.random()*$(window).width();
  const tempo=20*Math.random();
  const altura=Math.floor(Math.random()*10)+5;
  gota.css({
    "animation-duration": tempo+"s",
    "left": tamano+"px",
    "height": altura+"px",
    "opacity":Math.random()
  });
  divLuvia.append(gota);
}
}

generarLuvia(600);