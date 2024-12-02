"use client";

import BrainSVG from "@/components/svg/BrainSVG";
import LockSVG from "@/components/svg/LockSVG";
import ProveSVG from "@/components/svg/ProveSVG";
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
                <header className="max-w-[1600px] mx-auto h-[100vh] text-white p-10 flex items-center justify-between">
                    <div className="my-auto">
                        <h1 className="text-7xl font-bold gradient-hero-text pb-2">
                            Patent Your <br /> Crazy Ideas (Kinda)
                        </h1>
                        <p className="text-4xl mt-10">
                            Because being first is all that matters. 🚀✨
                        </p>
                        <div className="mt-10">
                            <Link href={"/patent"}>
                                <button className="hover:scale-105 transition-all ease-linear gradient-button text-xl text-white rounded-lg font-bold">
                                    <div className="gradient-button-content px-5 py-3">
                                        Start Patenting Ideas
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="pr-48">
                        <div className="tilt-box-container relative rounded-lg h-[400px] w-[300px] text-black">
                            <div className="t_over"></div>
                            <div className="t_over"></div>
                            <div className="t_over"></div>
                            <div className="t_over"></div>
                            <div className="t_over"></div>
                            <div className="t_over"></div>
                            <div className="t_over"></div>
                            <div className="t_over"></div>
                            <div className="t_over"></div>
                            <div className="tilt-box relative transition-all duration-300 ease-in h-full w-full bg-white">
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl">
                                    HI
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="relative h-0.5 w-full overflow-hidden">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50rem] w-[50rem] rounded-full bg-gray-600 blur-[200px]"></div>
                </div>

                <main className="max-w-7xl mx-auto mb-10">
                    <section className="text-center my-12">
                        <h2 className="text-5xl font-bold mb-4 mt-20">
                            Got a wild idea but no time to build it?
                        </h2>
                        <p className="text-2xl mb-6">
                            Let us save your brilliance so you can brag later.
                            Here’s how:
                        </p>
                        <div className="grid md:grid-cols-3 gap-10 text-left mt-20">
                            <div className="bg-[#1A1A1B] shadow-md p-6 rounded-lg">
                                <div className="w-16 mb-5">
                                    <BrainSVG />
                                </div>
                                <h3 className="font-bold text-3xl mb-2">
                                    1. Share Your Idea
                                </h3>
                                <p className="text-lg text-[#89898D]">
                                    Give it a cool title, add juicy details, and
                                    timestamp it. 🧠
                                </p>
                            </div>
                            <div className="bg-[#1A1A1B] shadow-md p-6 rounded-lg">
                                <div className="w-16 mb-5">
                                    <LockSVG />
                                </div>
                                <h3 className="font-bold text-3xl mb-2">
                                    2. Secure Your Bragging Rights
                                </h3>
                                <p className="text-lg text-[#89898D]">
                                    We’ll keep your idea safe in our vault for
                                    future glory. 🔒
                                </p>
                            </div>
                            <div className="bg-[#1A1A1B] shadow-md p-6 rounded-lg">
                                <div className="w-16 mb-5">
                                    <ProveSVG />
                                </div>
                                <h3 className="font-bold text-3xl mb-2">
                                    3. Show Off Later
                                </h3>
                                <p className="text-lg text-[#89898D]">
                                    Prove you thought of it first when it goes
                                    viral. 🎤
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="relative py-32">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-gray-600 blur-[200px] z-decoration"></div>
                        <div className=" bg-black mx-auto w-[700px] h-[400px] p-6 rounded-lg grid place-items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-center mb-4">
                                    Why Patent Ideas?
                                </h2>
                                <p className="text-center mb-6">
                                    Because sometimes, it’s not about building
                                    the thing... it’s about being the genius who
                                    thought of it first. 🌟
                                </p>
                            </div>
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
