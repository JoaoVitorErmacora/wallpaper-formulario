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

// function buscarEndereco(cep) {
//   return new Promise((resolve, reject) => {
//     console.log("Buscando endereço...");

//     fetch(`https://viacep.com.br/ws/${cep}/json/`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Erro na resposta da API");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         if (data.erro) {
//           reject("CEP não foi encontrado!");
//         } else {
//           resolve(data);
//         }
//       })
//       .catch((error) => {
//         reject("Erro na requisição:" + error);
//       });
//   });
// }

// buscarEndereco("13385084")
//   .then((endereco) => {
//     console.log("Endereço encontrado: ", endereco);
//   })
//   .catch((error) => console.log(error));

//async/await
async function buscarEndereco(cep) {
  try {
    console.log("Buscando endereço...");
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = resposta.json();
    console.log("Endereço encontrado: ", dados);
  } catch (error) {
    console.log(error);
  }
}

buscarEndereco("01001000");
console.log("Requisição enviada!");
