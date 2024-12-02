const FAQ = () => {
    return (
        <section className="border border-[#1b865b] p-6 rounded-lg">
            <h2 className="text-[#1b865b] text-3xl font-bold text-center mb-6">
                FAQs
            </h2>
            <div className="space-y-4">
                <div>
                    <h3 className="font-bold">Q: Can someone steal my idea?</h3>
                    <p>
                        A: Nope! Your ideas are safe here. But remember, this
                        isn’t a legal patent. 🛡️
                    </p>
                </div>
                <div>
                    <h3 className="font-bold">
                        Q: What if my idea is too weird?
                    </h3>
                    <p>A: Even better. The weirder, the cooler. 🌈🤪</p>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
