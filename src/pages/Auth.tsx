import { createSignal } from "solid-js";

export const Auth = (props) => {
  const [nickname, setNickname] = createSignal("");
  const authenticate = (ev: SubmitEvent) => {
    ev.preventDefault();
    props.updateGame("nickname", nickname());
    setNickname("");
  }

  return (
    <form class="py-3 px-4 sm:flex sm:gap-4" onSubmit={authenticate}>
      <div class="sm:flex-1">
        <label class="sr-only">Usuário</label>
        <input placeholder="Usuário" value={nickname()} required
          onInput={(ev) => setNickname(ev.currentTarget.value)} class="w-full p-3 rounded-md bg-gray-800 placeholder-gray-400 focus:text-gray-400"
        />
      </div>
      <button type="submit"
        class="flex w-full group mt-4 px-5 py-3 rounded-md justify-center items-center bg-gray-800 text-gray-400 sm:mt-0 sm:w-auto"
      >
        <span class="text-sm font-medium">Jogar</span>
      </button>
    </form>
  );
}