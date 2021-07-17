const tarefas = [
  { nome: "Comprar leite", categoria: "compras", realizada: false },
  { nome: "Escutar chimbinha", categoria: "lazer", realizada: true },
];

const insereTarefaNaPagina = (objeto) => {
  const ulTarefa = document.getElementById("lista-tarefas");
  let liTarefa = document.createElement("li");

  liTarefa.appendChild(document.createTextNode(objeto.nome));

  liTarefa.classList.add("item-tarefa");
  liTarefa.classList.add(`categoria-${objeto.categoria}`);
  if (objeto.realizada) liTarefa.classList.add("marcado");

  ulTarefa.appendChild(liTarefa);
};

tarefas.forEach((tarefa) => {
  insereTarefaNaPagina(tarefa);
});

document.getElementById("incluir-nova-tarefa").addEventListener("click", () => {
  const nome = document.getElementById("nova-tarefa-nome");
  const categoria = document.getElementById("nova-tarefa-categoria");

  const tarefa = {
    nome: nome.value,
    categoria: categoria.value,
    realizada: false,
  };

  nome.value = "";
  nome.focus();
  tarefas.push(tarefa);
  insereTarefaNaPagina(tarefa);
});

document
  .getElementById("filtro-de-categoria")
  .addEventListener("change", (e) => {
      console.log(e.target)
    const lis = document.getElementsByTagName("li");
    lis.forEach((li) => {
      li.classList.contains(`categoria-${e.targer.value}`);
    });
  });
