// const minhaPromise = new Promise((resolve, object) => {
//   let sucesso = true;

//   setTimeout(() => {
//     if (sucesso) {
//       resolve("A PROMISE FOI UM SUCESSO!");
//     } else {
//       reject("A PROMISE NÃO FOI UM SUCESSO!");
//     }
//   }, 2000);
// });

// minhaPromise
//   .then((resultado) => console.log(resultado))
//   .catch((erro) => console.log(erro));

function buscarEndereco(cep) {
  return new Promise((resolve, reject) => {
    console.log("Buscando endereço...");

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na resposta da API");
        }

        return response.json();
      })
      .then((data) => {
        if (data.erro) {
          reject("CEP não foi encontrado!");
        } else {
          resolve(data);
        }
      })
      .catch((error) => {
        reject("Erro na requisição:" + error);
      });
  });
}
