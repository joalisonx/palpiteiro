import { RankingItem } from "../components";

export const Ranking = () => {
  return (<>
    <header class="pt-6 pb-4 px-5 border-b border-gray-200">
      <div class="flex justify-between items-center mb-3">
        <div class="flex items-center">
          <h2 class="inline-flex text-xl leading-snug font-bold text-gray-300">
            Ranking
          </h2>
        </div>
      </div>
    </header>

    <div class="py-3 px-5">
      <div class="h-[266px] overflow-y-auto">
        <RankingItem player="gozonaro" points={0}/>
        <RankingItem player="mula" points={0}/>
        <RankingItem player="simone step" points={0}/>
        <RankingItem player="cangaciro" points={0}/>
        <RankingItem player="padre ateu" points={0}/>
        <RankingItem player="da vila" points={0}/>
      </div>
    </div>
  </>);
}