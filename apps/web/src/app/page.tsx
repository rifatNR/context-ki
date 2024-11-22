"use client";

import { trpc } from "@/utils/trpc";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
    const user = trpc.users.getUser.useQuery({ username: "SPAWN" });
    console.log(user.data?.message);

    return (
        <main className="">
            <Link href={"/patent"}>
                <button>Your patents</button>
            </Link>

            <h1 className="text-custom-orange-200 text-xl underline">
                Patent Your Crazy Ideas (Kinda)
                https://chatgpt.com/c/673732bf-2e60-8012-ab7f-981d5bd5a821
            </h1>

            <article className="max-w-2xl text-red-400">
                <strong className="text-red-700">Lorem Ipsum: </strong>
                Dolor dolore consectetur exercitation dolor duis ea. Laboris ut
                aliqua Lorem occaecat dolore dolore officia ad anim
                reprehenderit voluptate nulla ullamco. Aute anim sunt voluptate
                duis laboris reprehenderit ut sint cillum occaecat ad Lorem
                culpa. Ipsum sit dolore exercitation ipsum Lorem occaecat
                voluptate qui enim quis aliquip excepteur. Dolor dolore
                consectetur exercitation dolor duis ea. Laboris ut aliqua Lorem
                occaecat dolore dolore officia ad anim reprehenderit voluptate
                nulla ullamco. Aute anim sunt voluptate duis laboris
                reprehenderit ut sint cillum occaecat ad Lorem culpa. Ipsum sit
                dolore exercitation ipsum Lorem occaecat voluptate qui enim quis
                aliquip excepteur. Dolor dolore consectetur exercitation dolor
                duis ea. Laboris ut aliqua Lorem occaecat dolore dolore officia
                ad anim reprehenderit voluptate nulla ullamco. Aute anim sunt
                voluptate duis laboris reprehenderit ut sint cillum occaecat ad
                Lorem culpa. Ipsum sit dolore exercitation ipsum Lorem occaecat
                voluptate qui enim quis aliquip excepteur. Dolor dolore
                consectetur exercitation dolor duis ea. Laboris ut aliqua Lorem
                occaecat dolore dolore officia ad anim reprehenderit voluptate
                nulla ullamco. Aute anim sunt voluptate duis laboris
                reprehenderit ut sint cillum occaecat ad Lorem culpa. Ipsum sit
                dolore exercitation ipsum Lorem occaecat voluptate qui enim quis
                aliquip excepteur.
            </article>
        </main>
    );
};

export default Home;
