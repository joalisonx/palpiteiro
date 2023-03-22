import { IRankingItem } from "../utils";

export const RankingItem = (props: IRankingItem) => {
  return (
    <div class="flex items-center space-x-4 py-2">
      <div class="flex-shrink-0">
        <img class="w-8 h-8 mr-3 rounded-full" 
          src={`https://avatars.dicebear.com/api/identicon/${props.player}.svg`}
        />
      </div>
      <div class="flex-1 min-w-0">
        <h4 class="text-base text-gray-200 font-semibold">
          {props.player}
        </h4>
      </div>
      <div>
        <p class="inline-flex mr-4 items-center text-sm text-gray-200 font-semibold">
          ⭐ {props.points}
        </p>
      </div>
    </div>
  );
}