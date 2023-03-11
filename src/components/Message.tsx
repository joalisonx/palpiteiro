export interface IMessage {
  message: string;
  system?: boolean;
  author?: string;
  correct?: boolean;
}

export const Message = (props: IMessage) => {
  return (
    !props.system ? (
    <div class="w-full text-left py-2">
      <div class="flex items-center">
        <img class="flex-shrink-0 w-8 h-8 mr-3 items-start rounded-full" 
          src={`https://avatars.dicebear.com/api/identicon/${props.author}.svg`}
        />
        <div>
          <h4 class="text-base text-gray-200 font-semibold">
            {props.author}:
          </h4>
          <div class={`text-sm ${props.correct ? "text-lime-500" : "text-red-600"}`}>
            {props.message}
          </div>
        </div>
      </div>
    </div>
    ) : (
      <p class="my-4 text-gray-200 text-center">{props.message}</p>
    )
  );
}