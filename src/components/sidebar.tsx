
const Sidebar = ( {isOpen, toggleSidebar}: any) => {
    return (
        <> {isOpen &&
            <nav className="w-64 bg-white border-r p-4 hidden md:block">
                <div className="flex row gap-2 justify-between items-center pb-4">
                    <h2 className="text-lg font-semibold ">Challenges</h2>
                </div>
                <ul className="space-y-2">
                    <li><a href="/calculator" className="text-gray-700 hover:text-blue-600">Calculator</a></li>
                    <li><a href="/navbar" className="text-gray-700 hover:text-blue-600">Navbar</a></li>
                    <li><a href="/twosum" className="text-gray-700 hover:text-blue-600">Two Sum II</a></li>
                </ul>
            </nav>}
        </>
    );
}

export default Sidebar;
