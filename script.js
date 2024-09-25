const carta = `Querida Caro, tienes un cvlito muy<br>hermoso, podría dormir noche tras noche sobre él. Déjame decirte que quiero vivir<br>contigo y tener tu cvlo de sombrero<br>toda la eternidad.`;
let endCurrentPlay = true;
var audio = new Audio("qerido_kyle.mp3");

$(document).ready(function () {
  $(".card").click(function () {
    if (endCurrentPlay) {
      endCurrentPlay = false;
      audio.play();
      // Esperar 2 segundos antes de aplicar las clases
      setTimeout(function () {
        $("#rotate-card").toggleClass("is-flipped");
        $("#img-kyle").toggleClass("img-hidden");
        $("#img-kyle").toggleClass("img-display");
        $("iframe").toggleClass("opacity-hidden");
        $("#parrafo").html(carta);
      }, 3700); // 2000 milisegundos = 2 segundos
      setTimeout(function () {
        endCurrentPlay = true; // Marca como acabado
        $("#rotate-card").toggleClass("is-flipped");
        $("#img-kyle").toggleClass("img-hidden");
        $("#img-kyle").toggleClass("img-display");
        $("iframe").toggleClass("opacity-hidden");
        $("#parrafo").html(carta);
      }, (audio.duration - 2) * 1000); // Espera hasta 2 segundos antes de que termine el audio
    }
  });
});
