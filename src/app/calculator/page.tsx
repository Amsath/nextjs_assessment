import Link from "next/link";
import Calculator from "../../components/calculator"

const page = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
                <Link href="/" className="text-white hover:underline">
                    ← Go back to homepage
                </Link>
            </nav>

            <main className="flex-1 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold"><Calculator></Calculator></h1>
                </div>
            </main>
        </div>
    );
};

export default page;