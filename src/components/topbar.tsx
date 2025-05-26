const Topbar = ({ toggleSidebar }: any) => {
    return (
        <nav className="border-b px-4 py-3 flex items-center gap-4 relative">
            <button className="text-2xl cursor-pointer" onClick={() => toggleSidebar()}>
                {"☰"}
            </button>
            <a href="/" className="text-xl font-bold text-blue-600">Assessment</a>
            {/*Menus*/}
            <div className="hidden md:flex space-x-6 text-sm text-gray-700">

            </div>
        </nav>
    );
}

export default Topbar;