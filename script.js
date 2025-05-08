function buscar() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let resultados = document.getElementById("resultados");
    resultados.innerHTML = ""; // Limpiar resultados anteriores

    let filtrados = datos.filter(item => item.toLowerCase().includes(input));

    if (filtrados.length > 0) {
        filtrados.forEach(item => {
            let div = document.createElement("div");
            div.textContent = item;
            resultados.appendChild(div);
        });
    } else {
        resultados.innerHTML = "<p>No se encontraron resultados</p>";
    }
}