import Link from "next/link";
import Twosum from "../../components/twosum"

const page = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
                <Link href="/" className="text-white hover:underline">
                    ← Go back to homepage
                </Link>
            </nav>

            <Twosum />
        </div>
    );
};

export default page;

