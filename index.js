function suma(a, b) {
  return a + b;
}

console.log("Iniciando el contenedor suma-container...");

// Ejecuta la función cada minuto (60,000 ms) de manera indefinida
setInterval(() => {
  const resultado = suma(2, 3);  // Puedes cambiar estos valores si necesitas otros números
  console.log(`Resultado de suma(2, 3): ${resultado}`);
}, 60000);

// Mantiene el proceso activo
process.stdin.resume();
