const themes = {
  "Marcas populares de periféricos gamers": [
    "ASUS", "Corsair", "EVGA", "Genius",
    "Logitech", "Razer", "Steelseries", "HyperX",
    "Redragon", "Fortrek", "Gigabyte", "Acer",
    "Astro"
  ],
  "Modalidades presentes nos Jogos da Commonwealth": [
    "Atletismo", "Badminton", "Basquetebol", "Boxe",
    "Ciclismo", "Críquete", "Natação", "Ginástica",
    "Saltos ornamentais", "Halterofilismo", "Hóquei sobre a grama", "Lawn bowls",
    "Levantamento de peso", "Lutas", "Netball", "Rugby sevens",
    "Squash", "Tênis de mesa", "Tiro", "Tiro com arco",
    "Triatlo", "Voleibol de praia"
  ],
  "Marcas de carros": [
    "Aston Martin", "Audi", "BMW", "CAOA Cherry", "Chevrolet",
    "Citroën", "Dodge", "Ferrari", "Fiat", "Ford",
    "Honda", "Hyundai", "Iveco", "Jaguar", "Jeep",
    "Kia", "Lamborghini", "Land Rover", "Lexus", "Maserati",
    "McLaren", "Mercedes-Benz", "Mitsubishi", "Nissan", "Peugeot",
    "Porsche", "Renault", "Rolls-Royce", "Subaru", "Suzuki",
    "Toyota", "Volkswagen", "Volvo", "Bentley", "Mazda",
    "Tesla"
  ],
  "Foram presidentes dos EUA (nome popular)": [
    "Franklin Roosevelt", "Abraham Lincoln", "George Washington", "Andrew Johnson",
    "John Kennedy", "Richard Nixon", "Jimmy Carter", "Ronald Reagan",
    "George Bush", "Bill Clinton", "Barack Obama", "Donald Trump",
    "Joe Biden", "Thomas Jefferson", "James Madison", "James Monroe",
    "John Tyler", "Franklin Pierce", "Harry Truman", "Lyndon Johnson",
    "Gerald Ford"
  ],
  "São peças de um motor de um automóvel": [
    "Válvulas", "Vela de ignição", "Pistão", "Anéis do pistão",
    "Biela", "Virabrequim", "Bloco do motor", "Cárter",
    "Filtro de óleo", "Radiador", "Alternador", "Bateria",
    "Cabeçote", "Cilindros"
  ],
  "Principais bandeiras de cartão de crédito": [
    "Mastercard", "Elo", "Visa", "American Express",
    "Hipercard", "Alelo", "Diners Club", "JCB",
    "Sorocred"
  ],
  "Grandes nomes da música clássica (nome popular)": [
    "Mozart", "Beethoven", "Tchaikovsky", "Stravinsky",
    "Vivaldi", "Bach", "Wagner", "Chopin",
    "Schubert", "Brahms", "Debussy", "Villa-Lobos"
  ],
  "Furacões de categoria 5 no Atlântico (após 1990)": [
    "Andrew", "Mitch", "Isabel", "Ivan", 
    "Emily", "Katrina", "Rita", "Wilma", 
    "Dean", "Felix", "Matthew", "Irma", 
    "Maria", "Michael", "Dorian", "Lorenzo"
  ],
  "Países localizados na África Oriental": [
    "Comores", "Djibouti", "Eritreia", "Etiópia", "Quênia", "Seychelles",
    "Moçambique", "Somália", "Tanzânia", "Burundi", "Ruanda", "Uganda",
    "Zimbábue", "Zâmbia", "Malawi"
  ]
};

function getTheme(): [string, string[]] {
  let keys: string[] = Object.keys(themes);
  const key = keys[Math.floor(Math.random() * keys.length)];
  let words: string[] = themes[key].sort(() => Math.random() - 0.5);
  return [key, words.slice(0, 5).map(el => el.toLowerCase())];
}

export default getTheme;