'use client'

import { useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = (val: boolean) => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="flex h-screen">
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
            <div className="flex flex-col flex-1">
                <Topbar toggleSidebar={toggleSidebar} />
                <main className="flex-1 bg-gray-100">{children}</main>
            </div>
        </div>
    );
}

export default Layout;
