import Rating from './Rating';
function ImageCard() {
  return (
    <div className="pb-[128.571%] rounded-md relative w-full max-w-full">
      <div className="absolute flex w-full h-full">
        <div className="absolute p-2 flex justify-between w-full">
          <div className="px-2 py-1 bg-black rounded-xl bg-opacity-30">
            <p className="text-sm">LoRA</p>
          </div>
          <div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="absolute p-2 justify-between w-full bottom-0">
          <button className="" type="button">
            <div className="flex">
              <div className="w-8 h-8 relative ">
                <img
                  loading="lazy"
                  className="absolute w-full h-full rounded-md"
                  src="https://cdn.discordapp.com/avatars/194115235190145024/dab662221e58db4ad61879432baf6712.png"
                  alt="stunningFlesh's Avatar"
                />
              </div>
              <div className="ml-3  self-center">
                <p className="">stunningFlesh</p>
              </div>
            </div>
          </button>
          <div className="font-bold text-2xl mt-1">Goosebumps SDXL</div>
        </div>
        <img
          className="min-w-full rounded-md"
          src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/aedfa342-7fd8-4537-b400-48ca296b4f58/width=450/slop_02206_.jpeg"
          alt="image"
        />
      </div>
    </div>
  );
}

export default ImageCard;
