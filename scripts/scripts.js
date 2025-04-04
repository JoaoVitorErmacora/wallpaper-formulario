const minhaPromise = new Promise((resolve, object) => {
  let sucesso = true;

  setTimeout(() => {
    if (sucesso) {
      resolve("A PROMISE FOI UM SUCESSO!");
    } else {
      reject("A PROMISE NÃO FOI UM SUCESSO!");
    }
  }, 2000);
});

minhaPromise
  .then((resultado) => console.log(resultado))
  .catch((erro) => console.log(erro));
