// Definindo a classe Heroi
class Heroi {
    // Construtor para inicializar as propriedades do herói
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que exibe a mensagem de ataque conforme o tipo do herói
    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'usou ataque desconhecido';
      }
      print(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Função principal para criar heróis e demonstrar ataques
  function main() {
    // Exemplo de criação de heróis
    const heroi1 = new Heroi('Aragorn', 87, 'guerreiro');
    const heroi2 = new Heroi('Gandalf', 2019, 'mago');
    const heroi3 = new Heroi('Liu Kang', 35, 'monge');
    const heroi4 = new Heroi('Naruto', 17, 'ninja');
  
    // Mostrando ataques dos heróis
    heroi1.atacar(); // O guerreiro atacou usando espada
    heroi2.atacar(); // O mago atacou usando magia
    heroi3.atacar(); // O monge atacou usando artes marciais
    heroi4.atacar(); // O ninja atacou usando shuriken
  }
  
  // Chama a função principal
  main();
  