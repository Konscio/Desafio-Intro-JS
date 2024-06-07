let precio = 400000;

let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

const valorSpan = document.querySelector(".valor-total");
const total = document.querySelector(".cantidad");
let cuenta = 0;

const aumento = () => {
  cuenta++;
  total.innerHTML = cuenta;
  valorSpan.innerHTML = total.innerHTML * precio;
};

const disminucion = () => {
  if (total.innerHTML >= 1) {
    cuenta--;
    total.innerHTML = cuenta;
    valorSpan.innerHTML = total.innerHTML * precio;
  }
};
