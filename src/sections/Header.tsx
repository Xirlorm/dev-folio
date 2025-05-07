import Navbar from "../components/Navbar";

function Header() {
  return (
    <header className="flex flex-wrap justify-between gap-3.5">
      <h1 className="text-shadow-lg text-shadow-stone-300 text-2xl">
        &lt;Selorm/&gt;
      </h1>
      <div className="block sticky t-0 left-0">
        <div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}

export default Header;
