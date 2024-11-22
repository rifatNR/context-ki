import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="fixed w-full bg-black z-navbar">
            <div className="max-w-5xl mx-auto px-5 py-5 flex items-center justify-between">
                <Link href={"/"}>
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            className=""
                            width={24}
                            height={24}
                            priority
                        />
                        <div className="text-lg font-bold">
                            Patent Ideas™️ 💡
                        </div>
                    </div>
                </Link>
                <div className="relative h-10 w-10 aspect-square rounded-full bg-gray-500 overflow-hidden mb-[-5px]">
                    <Image
                        src="https://avatar.iran.liara.run/public/42"
                        alt="Avatar"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
