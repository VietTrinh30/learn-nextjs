function Header() {
  return (
    <div className="p-4 shadow-md text-white bg-blackRussian">
      <div className="max-w flex justify-between items-center h-10 px-2">
        {/* App Icon */}
        <div className="flex items-center space-x-2">
          <img src="/favicon.ico" alt="App Icon" className="w-8 h-8" />
          <span className="text-xl font-semibold">Civitai</span>
        </div>

        {/* Search Bar */}
        {/* <div className="relative w-2/5">
          <input
            type="text"
            placeholder="Search..."
            className="bg-blue-700 p-2 pl-10 rounded-md focus:outline-none  focus:border-blue-500 w-full"
          />
          {/* <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <i className="fas fa-search text-gray-300"></i>
          </span> }
        </div> */}

        <div className="relative w-2/5 border-2 border-blackBorder bg-[#25262b] rounded-md p-1 flex justify-between cursor-pointer h-full items-center">
          <div className="box-border flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              color="#373A40"
            >
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
              <path d="M21 21l-6 -6"></path>
            </svg>
            <div className="text-blackBorder px-2">Quick Search</div>
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
