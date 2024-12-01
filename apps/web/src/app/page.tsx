"use client";

import { trpc } from "@/trpc/client";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
    const user = trpc.users.getUser.useQuery({ username: "SPAWN" });
    console.log(user.data?.message);

    return (
        <div className="overflow-hidden">
            <div className="fixed -left-96 top-0 h-[30rem] w-[30rem] rounded-full bg-gray-600 blur-[200px] z-decoration"></div>
            <div className="fixed -right-96 top-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-gray-600 blur-[250px] z-decoration"></div>
            <div className="z-body">
                <header className="max-w-[1600px] mx-auto h-[700px] text-white p-10 flex items-center justify-between">
                    <div className="my-auto">
                        <h1 className="text-7xl font-bold gradient-hero-text pb-2">
                            Patent Your <br /> Crazy Ideas (Kinda)
                        </h1>
                        <p className="text-4xl mt-10">
                            Because being first is all that matters. 🚀✨
                        </p>
                        <div className="mt-10">
                            <Link href={"/patent"}>
                                <button className="gradient-button text-xl text-white rounded-lg font-bold">
                                    <div className="gradient-button-content px-5 py-3">
                                        Start Patenting Ideas
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="max-w-5xl mx-auto mb-10">
                    <section className="text-center my-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Got a wild idea but no time to build it?
                        </h2>
                        <p className="text-lg mb-6">
                            Let us save your brilliance so you can brag later.
                            Here’s how:
                        </p>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-gray-800 shadow-md p-6 rounded-lg">
                                <h3 className="font-bold text-xl mb-2">
                                    1. Share Your Idea
                                </h3>
                                <p>
                                    Give it a cool title, add juicy details, and
                                    timestamp it. 🧠
                                </p>
                            </div>
                            <div className="bg-gray-800 shadow-md p-6 rounded-lg">
                                <h3 className="font-bold text-xl mb-2">
                                    2. Secure Your Bragging Rights
                                </h3>
                                <p>
                                    We’ll keep your idea safe in our vault for
                                    future glory. 🔒
                                </p>
                            </div>
                            <div className="bg-gray-800 shadow-md p-6 rounded-lg">
                                <h3 className="font-bold text-xl mb-2">
                                    3. Show Off Later
                                </h3>
                                <p>
                                    Prove you thought of it first when it goes
                                    viral. 🎤
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="border border-[#1b865b] p-6 rounded-lg my-12">
                        <h2 className="text-3xl font-bold text-center mb-4">
                            Why Patent Ideas?
                        </h2>
                        <p className="text-center mb-6">
                            Because sometimes, it’s not about building the
                            thing... it’s about being the genius who thought of
                            it first. 🌟
                        </p>
                        <div className="text-center">
                            <Link href={"/patent"}>
                                <button className="bg-[#1b865b] hover:bg-[#0d744a] text-white px-6 py-3 rounded-lg font-bold transition">
                                    Start Patenting My Ideas
                                </button>
                            </Link>
                        </div>
                    </section>

                    <section className="my-12">
                        <h2 className="text-3xl font-bold text-center mb-6">
                            What People Are Saying
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <blockquote className="bg-gray-800 shadow-md p-6 rounded-lg">
                                <p className="italic">
                                    &quot;I knew I was ahead of my time, but now
                                    I have proof!&quot;
                                </p>
                                <footer className="mt-4 font-bold">
                                    - Future Innovator 🧠
                                </footer>
                            </blockquote>
                            <blockquote className="bg-gray-800 shadow-md p-6 rounded-lg">
                                <p className="italic">
                                    &quot;Patent Ideas helped me show off at
                                    every dinner party. Worth it!&quot;
                                </p>
                                <footer className="mt-4 font-bold">
                                    - Idea Hoarder 🎉
                                </footer>
                            </blockquote>
                            <blockquote className="bg-gray-800 shadow-md p-6 rounded-lg">
                                <p className="italic">
                                    &quot;Honestly, it’s just fun to see my old
                                    ideas. Also, I now have blackmail
                                    material.&quot;
                                </p>
                                <footer className="mt-4 font-bold">
                                    - Savvy Thinker 🤓
                                </footer>
                            </blockquote>
                        </div>
                    </section>

                    <section className="border border-[#1b865b] p-6 rounded-lg">
                        <h2 className="text-[#1b865b] text-3xl font-bold text-center mb-6">
                            FAQs
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold">
                                    Q: Can someone steal my idea?
                                </h3>
                                <p>
                                    A: Nope! Your ideas are safe here. But
                                    remember, this isn’t a legal patent. 🛡️
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold">
                                    Q: What if my idea is too weird?
                                </h3>
                                <p>
                                    A: Even better. The weirder, the cooler.
                                    🌈🤪
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="bg-gray-800 text-white text-center p-6">
                    <p>© 2024 Patent Ideas. All rights reserved. ✨</p>
                </footer>
            </div>
        </div>
    );
};

export default Home;
