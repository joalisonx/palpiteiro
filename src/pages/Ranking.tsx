import { useNavigate } from "@solidjs/router";
import { RankingItem } from "../components";

export const Ranking = () => {
  const navigate = useNavigate();

  return (<>
    <header class="pt-6 pb-4 px-5 border-b border-gray-200">
      <div class="flex justify-between items-center mb-3">
        <div class="flex items-center">
          <h2 class="inline-flex text-xl leading-snug font-bold text-gray-300">
            Ranking
          </h2>
        </div>
        <div class="flex items-center">
          <button type="button" onClick={() => navigate("/")} class="inline-flex justify-center p-2 bg-neutral-900 text-white hover:bg-gray-500 rounded-lg cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <div class="py-3 px-5">
      <div class="h-[266px] overflow-y-auto">
        <RankingItem player="cupim" points={0}/>
      </div>
    </div>
  </>);
}