"use client";

import CardsSection from "@/app/Homepage/CardsSection";
import Hero from "@/app/Homepage/Hero";
import WhyUse from "@/app/Homepage/WhyUse";
import { trpc } from "@/trpc/client";

const Home = () => {
    const user = trpc.users.getUser.useQuery({ username: "SPAWN" });
    console.log(user.data?.message);

    return (
        <div className="overflow-hidden">
            <div className="fixed -left-96 top-0 h-[30rem] w-[30rem] rounded-full bg-gray-600 blur-[200px] z-decoration"></div>
            <div className="fixed -right-96 top-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-gray-600 blur-[250px] z-decoration"></div>
            <div className="z-body">
                <Hero />

                <main className="max-w-7xl mx-auto mb-10">
                    <div className="relative h-0.5 w-full overflow-hidden">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[50rem] w-[50rem] rounded-full bg-gray-600 blur-[200px]"></div>
                    </div>

                    <CardsSection />

                    <WhyUse />

                    {/* <WhatPeopleSay /> */}

                    {/* <FAQ /> */}
                </main>

                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default Home;
