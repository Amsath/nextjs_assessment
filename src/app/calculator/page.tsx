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

            <main className="min-h-screen p-6 bg-gray-50 text-gray-800">
                <Calculator></Calculator>
            </main>
        </div>
    );
};

export default page;