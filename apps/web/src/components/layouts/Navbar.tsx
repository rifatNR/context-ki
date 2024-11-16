import Image from "next/image";

const Navbar = () => {
    return (
        <div className="fixed w-full bg-black">
            <div className="max-w-5xl mx-auto px-5 py-5 flex items-center justify-between">
                <div className="text-2xl font-bold">💡 Patent Ideas™️</div>
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
