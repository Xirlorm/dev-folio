import Navbar from "../components/Navbar";

function Header() {
    return (
        <header className="flex flex-wrap justify-between gap-3.5 py-3 px-2.5 items-center">
            <h1 className="text-stone-700 text-shadow-sm text-shadow-stone-400 text-2xl">&lt;Selorm/&gt;</h1>
            <div className="block sticky t-0 left-0"><div>
                <Navbar />
            </div></div>
        </header>
    );
}

export default Header;