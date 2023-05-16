var database = require("../database/config");

function listar() {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
        SELECT * FROM usuario;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function entrar(email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    email,
    senha
  );
  var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrarRepresentante(nome, email, senha, cpf, celular, foto, idEmpresa) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nome,
    email,
    senha
  );

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.

  console.log(idEmpresa);

  var instrucao = `INSERT INTO Funcionario (cpf, nome, email, senha, celular, fkEmpresa, foto) VALUES ('${cpf}', '${nome}', '${email}', '${senha}', '${celular}', ${idEmpresa}, '${foto}');`;

  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function cadastrarEmpresa(cnpj, nome, foto) {
  var instrucao = `
        INSERT INTO Empresa (cnpj, nome, foto) VALUES ('${cnpj}', '${nome}', '${foto}');
    `;

  return database.executar(instrucao);
}

function capturarIdEmpresa(cnpj) {
  var instrucao = `SELECT idEmpresa FROM Empresa WHERE cnpj = '${cnpj}';`;

  return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao

function cadastrarFuncionario(
  nome,
  email,
  senha,
  cpf,
  fkEmpresa,
  fkRepresentante,
  celular,
  foto
) {

  // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
  //  e na ordem de inserção dos dados.
  var instrucao = `
    INSERT INTO Funcionario (nome, email, senha, cpf, fkEmpresa, fkRepresentante, celular, foto) VALUES ('${nome}', '${email}', '${senha}', '${cpf}', ${fkEmpresa}, ${fkRepresentante},'${celular}','${foto}');
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}


module.exports = {
  entrar,
  cadastrarRepresentante,
  listar,
  capturarIdEmpresa,
  cadastrarEmpresa,
  cadastrarFuncionario
};
