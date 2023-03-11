import { createSignal, onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";

const themes = {
  "Marcas populares de periféricos gamers": [
    "ASUS", "Corsair", "EVGA", "Genius",
    "Logitech", "Razer", "Steelseries", "HyperX",
    "Redragon", "Fortrek", "Gigabyte", "Acer",
    "Astro"
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
  "Modalidades presentes nos Jogos da Commonwealth": [
    "Atletismo", "Badminton", "Basquetebol", "Boxe",
    "Ciclismo", "Críquete", "Natação", "Ginástica",
    "Saltos ornamentais", "Halterofilismo", "Hóquei sobre a grama", "Lawn bowls",
    "Levantamento de peso", "Lutas", "Netball", "Rugby sevens",
    "Squash", "Tênis de mesa", "Tiro", "Tiro com arco",
    "Triatlo", "Voleibol de praia"
  ]
}

interface IGame {
  nickname?: string;
  theme: string;
  words: string[]
  answereds: number;
  time: number;
  guesses: string[];
}

function getTheme(): [string, string[]] {
  let keys: string[] = Object.keys(themes);
  const key = keys[Math.floor(Math.random() * keys.length)];
  let words: string[] = themes[key].sort(() => Math.random() - 0.5);
  return [key, words.slice(0, 5).map(el => el.toLowerCase())];
}

function createGame() {
  let interval: NodeJS.Timeout;
  const [currentGuess, setCurrentGuess] = createSignal<string>("");
  const [guesses, setGuesses] = createSignal<any[]>([]);
  
  const _theme = getTheme();
  const [game, updateGame] = createStore<IGame>({
    theme: _theme[0], 
    words: _theme[1], 
    answereds: 0, 
    time: 90, 
    guesses: []
  });

  const addGuess = (ev: SubmitEvent) => {
    ev.preventDefault();
    setGuesses([...guesses(), {
      guess: currentGuess(), 
      author: game.nickname, 
      correct: game.words.includes(currentGuess().toLowerCase())
    }]);
    
    if(game.words.includes(currentGuess().toLowerCase())) {
      updateGame("words", prev => {
        const copy: string[] = prev.slice();
        copy.splice(game.words.indexOf(currentGuess().toLowerCase()), 1);
        return copy;
      });
      updateGame("answereds", game.answereds + 1);
    }
    setCurrentGuess("");
  }

  onMount(() => {
    interval = setInterval(() => {
      if(!game.nickname) return;
      else if(game.time > 0) return updateGame("time", game.time - 1);
      else if(game.answereds === 5 || !game.time) {
        const _newTheme = getTheme();
        updateGame("theme", _newTheme[0]);
        updateGame("words", _newTheme[1]);
        updateGame("time", 90);
        updateGame("answereds", 0);
      }
    }, 1000);
  });
  onCleanup(() => clearInterval(interval));

  return { 
    game,
    updateGame,
    currentGuess,
    setCurrentGuess,
    guesses,
    addGuess
  };
}

export { createGame };
