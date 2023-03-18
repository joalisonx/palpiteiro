import { createSignal, onCleanup, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import getTheme from "./themes";

interface IGame {
  nickname?: string;
  theme: string;
  words: string[]
  answereds: string[];
  time: number;
  guesses: string[];
}

interface IMessage {
  message: string;
  author?: string;
  correct?: boolean;
}

function createGame() {
  let interval: NodeJS.Timeout;
  const [currentGuess, setCurrentGuess] = createSignal<string>("");
  const [messages, setMessages] = createSignal<IMessage[]>([]);
  
  const _theme = getTheme();
  const [game, updateGame] = createStore<IGame>({
    theme: _theme[0], 
    words: _theme[1], 
    answereds: [], 
    time: 90, 
    guesses: []
  });

  const addGuess = (ev: SubmitEvent) => {
    ev.preventDefault();
    if(game.answereds.includes(currentGuess().toLowerCase())) {
      setMessages([...messages(), {message: `${currentGuess()} já foi descoberta.`}]);
      return;
    }
    
    setMessages([...messages(), {
      message: currentGuess(), 
      author: game.nickname, 
      correct: game.words.includes(currentGuess().toLowerCase())
    }]);
    if(game.words.includes(currentGuess().toLowerCase())) {
      updateGame("words", prev => {
        const copy: string[] = prev.slice();
        copy.splice(game.words.indexOf(currentGuess().toLowerCase()), 1);
        return copy;
      });
      updateGame("answereds", prev => {
        const copy: string[] = prev.slice();
        copy.push(currentGuess().toLowerCase());
        return copy;
      });
    }
    setCurrentGuess("");
  }

  onMount(() => {
    interval = setInterval(() => {
      if(!game.nickname) return;
      else if(game.time > 0) return updateGame("time", game.time - 1);
      else if(game.answereds.length === 5 || !game.time) {
        setMessages([...messages(), {message: "Começando nova rodada..."}]);
        const _newTheme = getTheme();
        updateGame("theme", _newTheme[0]);
        updateGame("words", _newTheme[1]);
        updateGame("time", 90);
        updateGame("answereds", []);
      }
    }, 1000);
  });
  onCleanup(() => clearInterval(interval));

  return { 
    game, updateGame, currentGuess,
    setCurrentGuess, messages, addGuess
  };
}

export { createGame }; 
export type {
  IGame,
  IMessage
};

