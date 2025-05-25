import Link from "next/link";
import Twosum from "../../components/twosum"

const page = () => {
    const numbers = [0, 1, 2, 2, 3, 5];
    const target = 4;
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
                <Link href="/" className="text-white hover:underline">
                    ← Go back to homepage
                </Link>
            </nav>

            <main className="flex-1 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold"><Twosum numbers={numbers} target={target} ></Twosum></h1>
                </div>
            </main>
        </div>
    );
};

export default page;