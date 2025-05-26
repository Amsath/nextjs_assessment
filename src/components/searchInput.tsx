import Image from 'next/image';

const SearchInput = ({ placeholder, isMobileView }: any) => {
    return (
        <>
            {/* Desktop View: Input + Icon */}
            <div className="relative hidden md:block w-full max-w-xs">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5">
                    <Image
                        src="/icons/search.svg"
                        alt="Search"
                        width={20}
                        height={20}
                    />
                </div>
            </div>

            {/* Mobile View: Only Icon */}
            <div className="block md:hidden">
                <button className="p-2">
                    <Image
                        src="/icons/search.svg"
                        alt="Search Icon"
                        width={20}
                        height={20}
                    />
                </button>
            </div>
        </>
    );
};

export default SearchInput;
