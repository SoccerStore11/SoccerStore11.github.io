function searchContent() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";
    if (input.trim() === "") {
        resultsContainer.innerHTML = ""; // Limpia los resultados
        return;
      }
      
  
    const filtered = camisetas.filter(c =>
      c.nombre.toLowerCase().includes(input) || c.liga.toLowerCase().includes(input)
    );
  
    if (filtered.length === 0) {
      resultsContainer.innerHTML = "<p style='color:red;'>No se encontraron resultados.</p>";
      return;
    }
  
    const grid = document.createElement("div");
grid.className = "search-results"; // Aplica los estilos del CSS

  
    filtered.forEach(item => {
      const card = document.createElement("div");
      card.style.border = "2px solid #070760";
      card.style.borderRadius = "10px";
      card.style.backgroundColor = "#fff";
      card.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
      card.style.padding = "10px";
      card.style.textAlign = "center";
  
      const img = document.createElement("img");
      img.src = item.imagen;
      img.alt = item.nombre;
      img.style.width = "100%";
      img.style.maxHeight = "200px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "8px";
  
      const title = document.createElement("h4");
      title.textContent = item.nombre;
      title.style.margin = "10px 0";
  
      const liga = document.createElement("p");
      liga.textContent = item.liga;
      liga.style.color = "#333";
  
      const btn = document.createElement("a");
      btn.href = item.url;
      btn.textContent = "Ver sección";
      btn.style.display = "inline-block";
      btn.style.marginTop = "10px";
      btn.style.padding = "8px 12px";
      btn.style.backgroundColor = "#070760";
      btn.style.color = "#fff";
      btn.style.borderRadius = "6px";
      btn.style.textDecoration = "none";
      btn.style.fontWeight = "bold";
  
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(liga);
      card.appendChild(btn);
      grid.appendChild(card);
    });
  
    resultsContainer.appendChild(grid);
  }
  