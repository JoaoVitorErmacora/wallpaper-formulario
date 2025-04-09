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
//         if (!response.ok) {   //se a resposta não tiver ok, será impresso uma mensagem de erro

//           throw new Error("Erro na resposta da API");
//         }

//         return response.json();
//       })
//       .then((data) => {
//data = response.json()
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
    const dados = await resposta.json();
    console.log("Endereço encontrado: ", dados);
  } catch (error) {
    console.log(error);
  }
}

buscarEndereco("01001000");
console.log("Requisição enviada!");

class Endereço {
  constructor(
    cep = "",
    rua = "",
    bairro = "",
    cidade = "",
    uf = "",
    complemento = ""
  ) {
    this.cep = cep;
    this.rua = rua;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
    this.complemento = complemento;
  }
  async buscarEndereco(cep) {
    try {
      let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      let dados = await resposta.json();

      console.log(dados);

      this.cep = dados.cep;
      this.rua = dados.logradouro;
      this.bairro = dados.bairro;
      this.cidade = dados.localidade;
      this.uf = dados.uf;
      this.complemento = dados.complemento || "";
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

class TipoEndereco extends Endereço {
  constructor(
    cep = "",
    rua = "",
    bairro = "",
    cidade = "",
    uf = "",
    complemento = "",
    tipo
  ) {
    super(
      (cep = ""),
      (rua = ""),
      (bairro = ""),
      (cidade = ""),
      (uf = ""),
      (complemento = "")
    );
    this.tipo = this.tipo;
  }
  exibirEndereco() {
    return {
      tipo: this.tipo,
      cep: this.cep,
      rua: this.rua,
      bairro: this.bairro,
      cidade: this.cidade,
      ud: this.uf,
      complemento: this.complemento,
    };
  }
}

document.getElementById("cep").addEventListener("input", async function () {
  const cep = event.target.value;

  console.log(cep);

  if (cep.length === 8) {
    const endereco = new Endereco();
    const results = await endereco.buscarEndereco(cep);

    if (results) {
      document.getElementById("rua").value = results.rua;
      document.getElementById("bairro").value = results.bairrp;
      document.getElementById("cidade").value = results.cidade;
      document.getElementById("uf").value = results.uf;
      document.getElementById("complemento").value = results.complemento || "";
    } else {
      alert("CEP INVÁLIDO!");
    }
  }
});
