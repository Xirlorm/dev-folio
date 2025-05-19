import Navbar from "@/ui/components/Navbar";

function Header() {
  return (
    <header className="p-1.5 sm:flex sm:justify-between sm:items-center">
      <h1 className="py-1 text-2xl font-bold text-shadow-md text-shadow-stone-400">
        &lt;Selorm/&gt;
      </h1>
      <Navbar />
    </header>
  );
}

export default Header;
