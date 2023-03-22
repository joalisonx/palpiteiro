import { Component } from "solid-js";
import { Routes, Route } from "@solidjs/router";
import { Main } from "./pages/Main";
import { Auth } from "./pages/Auth";
import { Ranking } from "./pages/Ranking";
import { createGame } from "./utils";

const App: Component = () => {
  const { game, updateGame, currentGuess, setCurrentGuess, messages, addGuess } = createGame();
  
  return (
    <div class="flex flex-col justify-center antialiased min-h-screen p-4">
      <div class="h-full">
        <div class="relative max-w-[540px] mx-auto bg-neutral-900 shadow-lg rounded-lg">
          <Routes>
            <Route path="/" element={
              !game.nickname ? 
                <Auth updateGame={updateGame}/>
              : 
              <Main game={game} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} 
                messages={messages} addGuess={addGuess}
              />
            }/>
            <Route path="/ranking" element={<Ranking/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;