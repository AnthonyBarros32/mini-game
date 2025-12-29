<script>
function elegir(opcion) {
  const msg = document.getElementById("msg");

  msg.innerText = mensajes[opcion];

  // Activar animación y visibilidad
  msg.classList.remove("show");
  void msg.offsetWidth; // reinicia animación
  msg.classList.add("show");

  document.getElementById("next").classList.remove("hidden");
}
</script>
