// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = +prompt("Digite a altura do retângulo:");
  const largura = +prompt("Digite a largura do retângulo:");
  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = +prompt("Digite o ano atual:");
  const anoNascimento = +prompt("E agora, digite o ano que você nasceu:");
  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual é o seu nome?");
  const idade = +prompt("Qual é a sua idade?");
  const email = prompt("E qual é o teu e-mail?");

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const coresPreferidas = [];
  const cor1 = prompt("Digite uma cor favorita:");
  coresPreferidas.push(cor1);
  const cor2 = prompt("Digite uma cor favorita:");
  coresPreferidas.push(cor2);
  const cor3 = prompt("Digite uma cor favorita:");
  coresPreferidas.push(cor3);
  console.log(coresPreferidas);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringMaiuscula = string.toUpperCase();
  return stringMaiuscula;
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const custoEspetaculo = custo;
  const ingressoValor = valorIngresso;
  const qtdeIngresso = custo / ingressoValor;
  return qtdeIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const comparaStrings = string1.length === string2.length;
  return comparaStrings;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0];
  return primeiroElemento;
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array[array.length - 1];
  return ultimoElemento;
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroElemento = array[0];
  const ultimoElemento = array[array.length - 1];
  array[0] = ultimoElemento;
  array[array.length - 1] = primeiroElemento;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const palavra1 = string1.toLowerCase();
  const palavra2 = string2.toLowerCase();
  return palavra1 === palavra2;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = +prompt("Informe o ano atual:");
  const anoNascimento = +prompt("Informe o ano do teu nascimento:");
  const anoRG = +prompt("Informe o ano de expedição do teu RG");
  const idade = anoAtual - anoNascimento;
  const validadeRG = anoAtual - anoRG;
  const primeiraCondicao = (idade <= 20) && (validadeRG >= 5);
  const segundaCondicao = (idade > 20) && (idade <= 50) && (validadeRG >= 10) && (validadeRG < 15);
  const terceiraCondicao = (idade > 50) && (validadeRG >= 15);
  console.log(primeiraCondicao || segundaCondicao || terceiraCondicao);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const divisivel4 = (ano % 4) === 0;
  const divisivel100 = (ano % 100) === 0;
  const divisivel400 = (ano % 400) === 0;

  return ((divisivel4 && !divisivel100) || (divisivel4 && divisivel100 && divisivel400));
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maioridade = prompt("Você tem mais de 18 anos? sim/nao") == "sim";
  const escolaridade = prompt("Você possui ensino médio completo? sim/nao") == "sim";
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso? sim/nao") == "sim";

  console.log(maioridade && escolaridade && disponibilidade);
}