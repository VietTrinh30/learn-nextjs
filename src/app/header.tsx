import Image from 'next/image';
function Header() {
  return (
    <div className="p-4 shadow-md text-white bg-blackRussian">
      <div className="max-w flex justify-between items-center h-10 px-2">
        {/* App Icon */}
        <div className="flex items-center space-x-2">
          <img src="/favicon.ico" alt="App Icon" className="w-8 h-8" />
          <span className="text-xl font-semibold">Civitai</span>
        </div>
        <div className="relative w-2/5 border-2 border-blackBorder bg-[#25262b] rounded-md p-1 flex justify-between cursor-pointer h-full items-center">
          <div className="box-border flex">
            <Image className="inline" src="/icons/search.svg" alt="search" width="24" height="24" />
            <div className="text-blackBorder px-2 inline">Quick Search</div>
          </div>
          <div className="rounded-md bg-black border-1 font-bold w-6 text-center">/</div>
        </div>
        {/* Login Button */}
        <button className="text-center h-full font-medium border-2 border-blackBorder bg-[#25262b] hover:bg-black px-4 rounded-md transition">
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Header;
