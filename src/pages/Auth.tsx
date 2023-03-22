import { createSignal, Show } from "solid-js";

export const Auth = (props) => {
  const [nickname, setNickname] = createSignal<string>("");
  const [error, setError] = createSignal<string>("");

  const authenticate = (ev: SubmitEvent) => {
    ev.preventDefault();
    if(nickname().length < 4 || nickname().length > 10) {
      setNickname("");
      return setError("O nickname deve ter entre 4 e 10 caracteres.");
    }

    props.updateGame("nickname", nickname());
    if(error() !== "") setError("");
    setNickname("");
  }

  return (
    <form class="py-3 px-4" onSubmit={authenticate}>
      <div class="sm:flex-1">
        <label class="sr-only">Nickname</label>
        <input placeholder="Nickname" value={nickname()} required
          onInput={ev => setNickname(ev.currentTarget.value)} class="w-full p-3 rounded-md bg-neutral-800 text-gray-400 placeholder-gray-400 focus:text-gray-400"
        />
        <Show when={error}>
          <p class="mt-2 text-sm text-red-500">{error()}</p>
        </Show>
      </div>
      <button type="submit"
        class="w-full mt-4 h-10 px-6 rounded-lg bg-sky-700 text-sky-100 transition-colors duration-150 hover:bg-sky-800"
      >
        <span class="text-sm font-medium">Jogar</span>
      </button>
    </form>
  );
}