const Terms = () => {
    return (
        <div className="max-w-5xl mx-auto px-5 pb-10">
            <div className="container mx-auto mt-10">
                <h1 className="text-4xl font-bold">Terms and Conditions</h1>
                <p className="text-lg mt-2">
                    Let’s keep it cool, respectful, and fun! 🚀
                </p>
            </div>

            <section className="shadow-md rounded-lg py-8">
                <h2 className="text-2xl font-bold mb-4">
                    1. What We Do (and Don’t Do)
                </h2>
                <p className="mb-4">
                    <strong>What we do:</strong> We provide a platform for you
                    to save and timestamp your amazing (or weird) ideas. Think
                    of us as a digital diary for your brainwaves.
                </p>
                <p className="mb-4">
                    <strong>What we don’t do:</strong>
                </p>
                <ul className="list-disc ml-6">
                    <li>
                        We don’t legally patent your ideas. This isn’t the
                        USPTO, folks.
                    </li>
                    <li>
                        We don’t guarantee that no one will independently come
                        up with the same idea (great minds think alike).
                    </li>
                    <li>
                        We’re not responsible if you accidentally share your
                        billion-dollar concept with the world.
                    </li>
                </ul>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">
                    2. Your Responsibilities
                </h2>
                <ul className="list-disc ml-6">
                    <li>
                        <strong>Be Original:</strong> Only upload ideas that you
                        came up with. Plagiarism is uncool.
                    </li>
                    <li>
                        <strong>No Illegal Stuff:</strong> Don’t submit ideas
                        that are illegal, harmful, or offensive. Keep it classy.
                    </li>
                    <li>
                        <strong>Respect Privacy:</strong> Avoid including
                        private or sensitive personal information in your
                        submissions (yours or others’).
                    </li>
                </ul>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">
                    3. Intellectual Property
                </h2>
                <p className="mb-4">
                    <strong>Your Ideas, Your Ownership:</strong> Whatever you
                    submit is yours, and we’re not claiming ownership of your
                    ideas.
                </p>
                <p className="mb-4">
                    <strong>We’re Just the Vault:</strong> By submitting your
                    ideas, you give us permission to store them securely and
                    display them back to you whenever you need them.
                </p>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">4. Privacy</h2>
                <p>
                    We value your privacy. Your ideas are private by default,
                    visible only to you unless you choose to share them
                    publicly. Check our <strong>Privacy Policy</strong> (if we
                    have one yet) for details on how we handle your data.
                </p>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">5. No Liability</h2>
                <p className="mb-4">
                    We try our best to keep your ideas safe, but we’re not
                    liable if something goes wrong (e.g., server issues, someone
                    else having the same idea, or your pet accidentally hitting
                    &quot;delete&quot;).
                </p>
                <p>
                    Use the platform at your own risk. This is all for fun, not
                    a legal guarantee.
                </p>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">
                    6. Fair Use of the Platform
                </h2>
                <ul className="list-disc ml-6">
                    <li>
                        <strong>No Spamming:</strong> Don’t flood the system
                        with irrelevant or nonsensical ideas.
                    </li>
                    <li>
                        <strong>No Hacking:</strong> Don’t try to break our app
                        (or anyone else’s). Let’s keep this fun for everyone.
                    </li>
                </ul>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
                <p>
                    We might update these terms now and then to make things
                    clearer or to add new rules. Keep an eye out for changes.
                </p>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                <p>
                    If you break the rules, we reserve the right to suspend or
                    delete your account (but don’t worry, we’ll play fair).
                </p>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
                <p>
                    Got questions, complaints, or just want to share a cool
                    idea? Reach out at{" "}
                    <a
                        href="mailto:support@patentideas.example.com"
                        className="text-indigo-700 hover:underline"
                    >
                        support@patentideas.example.com
                    </a>
                    .
                </p>
            </section>
        </div>
    );
};

export default Terms;
