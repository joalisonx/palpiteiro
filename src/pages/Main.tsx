import { For } from "solid-js";
import { Guess } from "../components";
import { IMessage } from "../utils";

export const Main = (props) => {
  return (<>
    <header class="pt-6 pb-4 px-5 border-b border-gray-200">
      <div class="flex justify-between items-center mb-3">
        <div class="flex items-center">
          <h2 class="inline-flex text-xl leading-snug font-bold text-gray-300">
            {props.game.theme}
          </h2>
        </div>
      </div>
      <div class="flex flex-wrap justify-between items-center space-x-4 text-gray-300">
        <div class="inline-flex items-center">
          <span class="text-base font-medium whitespace-nowrap mx-2">
            🕛 {new Date(props.game.time * 1000).toISOString().substring(14, 19)}
          </span>
        </div>
        <div class="flex items-center">
          <span class="text-base font-medium whitespace-nowrap mx-2">
            ✅ {props.game.answereds.length}/5
          </span>
        </div>
        <div class="flex items-center">
          <span class="text-base font-medium whitespace-nowrap mx-2">👥 1</span>
        </div>
      </div>
    </header>

    <div class="py-3 px-5">
      <h3 class="text-sm font-semibold uppercase text-gray-200 mb-1">
        Palpites
      </h3>
      <div class="h-[266px] overflow-y-auto">
        <For each={props.messages()}>{(message: IMessage) => (
          message.author ?
            <Guess message={message.message} author={message.author} correct={message.correct}/>
          :
            <p class="my-1.5 text-gray-200 text-center">⚠ {message.message}</p>
        )}</For>
      </div>
    </div>

    <div class="bottom-0">
      <div class="max-w-2xl mx-auto">
        <form onSubmit={props.addGuess}>
          <div class="flex items-center py-2 px-1 bg-neutral-800 rounded-lg">
            <button type="button" class="inline-flex justify-center p-2 bg-neutral-900 text-white hover:bg-gray-500 rounded-lg cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 00-.629.74v.387c-.827.157-1.642.345-2.445.564a.75.75 0 00-.552.698 5 5 0 004.503 5.152 6 6 0 002.946 1.822A6.451 6.451 0 017.768 13H7.5A1.5 1.5 0 006 14.5V17h-.75C4.56 17 4 17.56 4 18.25c0 .414.336.75.75.75h10.5a.75.75 0 00.75-.75c0-.69-.56-1.25-1.25-1.25H14v-2.5a1.5 1.5 0 00-1.5-1.5h-.268a6.453 6.453 0 01-.684-2.202 6 6 0 002.946-1.822 5 5 0 004.503-5.152.75.75 0 00-.552-.698A31.804 31.804 0 0016 2.562v-.387a.75.75 0 00-.629-.74A33.227 33.227 0 0010 1zM2.525 4.422C3.012 4.3 3.504 4.19 4 4.09V5c0 .74.134 1.448.38 2.103a3.503 3.503 0 01-1.855-2.68zm14.95 0a3.503 3.503 0 01-1.854 2.68C15.866 6.449 16 5.74 16 5v-.91c.496.099.988.21 1.475.332z" clip-rule="evenodd" />
              </svg>
            </button>
            <input placeholder="Digite seu palpite" value={props.currentGuess()} required
              onInput={ev => props.setCurrentGuess(ev.currentTarget.value)} class="block w-full resize-none mx-1 p-2.5 text-sm bg-neutral-800 text-gray-200 placeholder-gray-200" 
            ></input>
            <button type="submit" class="inline-flex justify-center p-2 text-white hover:bg-gray-500 rounded-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
              </svg>                                                                                        
            </button>
          </div>
        </form>
      </div>
    </div>
  </>);
}