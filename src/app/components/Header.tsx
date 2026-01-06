const Header = () => {
  return (
    <header className="text-lg">
      <div className="flex-row flex justify-between items-center mt-6 mb-6">
        <div className="flex items-center pr-2">
          <img
            className="inline-block w-8 h-8 rounded-full mr-2"
            src="https://avatars.githubusercontent.com/u/113851739?s=400&u=6dc4fa43506fd766cd247f7fc679ba142432697e&v=4"
            alt="Avatar"
          ></img>
          <div className="title inline-block font-semibold text-neutral-200">
            ztzt
          </div>
        </div>
        <hr className="border-neutral-700 border-t border flex-grow" />
      </div>
    </header>
  );
};
export default Header;
