import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface PropType {
    url: string;
    totalPage?: number;
    currPage?: number;
}

const Pagination = ({ url, totalPage = 4, currPage = 2 }: PropType) => {
    const start = currPage <= 2 ? 1 : currPage - 2;
    const end = Math.min(currPage + 2, totalPage);

    const generatePageLink = (
        url: string,
        params: { [key: string]: string | number }
    ) => {
        const urlObj = new URL(url);

        for (const [key, value] of Object.entries(params)) {
            urlObj.searchParams.set(key, value?.toString());
        }

        return urlObj.toString();
    };

    return (
        <div className="flex items-center justify-between sm:justify-end space-x-4 my-5 font-inter">
            {currPage > 1 && (
                <a
                    href={generatePageLink(url, { page: currPage - 1 })}
                    className="flex items-center space-x-2 px-3 py-1 border border-transparent hover:border-gray-600 cursor-pointer"
                >
                    <FiChevronLeft />
                    <div>Prev</div>
                </a>
            )}

            {totalPage > 1 && (
                <div className="hidden sm:flex items-center space-x-2">
                    {Array.from(
                        { length: end - start + 1 },
                        (_, index) => start + index
                    ).map((x) => (
                        <a
                            key={x}
                            href={generatePageLink(url, { page: x })}
                            className={`px-3 py-1 border border-transparent cursor-pointer ${
                                x === currPage
                                    ? "bg-white text-black hover:border-white"
                                    : "hover:border-gray-600"
                            }`}
                        >
                            {x}
                        </a>
                    ))}
                </div>
            )}

            {currPage < totalPage && (
                <a
                    href={generatePageLink(url, { page: currPage + 1 })}
                    className="flex items-center space-x-2 px-3 py-1 border border-transparent hover:border-gray-600 cursor-pointer"
                >
                    <div>Next</div>
                    <FiChevronRight />
                </a>
            )}
        </div>
    );
};

export default Pagination;
