const Privacy = () => {
    return (
        <div className="max-w-5xl mx-auto px-5 pb-10">
            <div className="container mx-auto mt-10">
                <h1 className="text-4xl font-bold">Privacy Policy</h1>
                <p className="text-lg mt-2">Your ideas are safe with us! 🔒</p>
            </div>

            <section className="shadow-md rounded-lg py-8">
                <h2 className="text-2xl font-bold mb-4">
                    1. Information We Collect
                </h2>
                <p className="mb-4">
                    To provide our services, we collect the following types of
                    information:
                </p>
                <ul className="list-disc ml-6">
                    <li>
                        <strong>Account Information:</strong> When you sign up,
                        we may collect your name, email address, and password.
                    </li>
                    <li>
                        <strong>Idea Data:</strong> The titles, details, and
                        timestamps of the ideas you submit.
                    </li>
                    <li>
                        <strong>Usage Data:</strong> Information about how you
                        interact with the platform (e.g., pages visited,
                        clicks).
                    </li>
                </ul>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">
                    2. How We Use Your Information
                </h2>
                <ul className="list-disc ml-6">
                    <li>
                        To store and display your ideas for your future
                        reference.
                    </li>
                    <li>To improve our platform and user experience.</li>
                    <li>
                        To send you updates or notifications (if you opt in).
                    </li>
                </ul>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">
                    3. Sharing Your Information
                </h2>
                <p className="mb-4">
                    We do not sell or share your personal data with third
                    parties. Your ideas remain private unless you choose to
                    share them publicly.
                </p>
                <p className="mb-4">
                    However, we may share your information if required to comply
                    with legal obligations or to protect the safety and rights
                    of others.
                </p>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="mb-4">
                    We take security seriously. Your data is stored securely
                    using industry-standard practices. However, no system is
                    completely foolproof, so we cannot guarantee absolute
                    security.
                </p>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">5. Your Choices</h2>
                <ul className="list-disc ml-6">
                    <li>
                        You can update or delete your account information at any
                        time.
                    </li>
                    <li>
                        You can contact us if you want your ideas removed
                        permanently.
                    </li>
                </ul>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
                <p className="mb-4">
                    We may use cookies to improve your experience on our
                    platform. These are small files stored on your device that
                    help us remember your preferences.
                </p>
                <p>
                    You can disable cookies in your browser settings, but some
                    features of our platform may not work properly without them.
                </p>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">
                    7. Changes to This Policy
                </h2>
                <p>
                    We may update this Privacy Policy from time to time. If we
                    make significant changes, we’ll notify you via email or
                    through the platform. Be sure to review this policy
                    periodically.
                </p>
            </section>

            <section className="shadow-md rounded-lg py-5">
                <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                <p>
                    If you have any questions or concerns about this Privacy
                    Policy, feel free to reach out at{" "}
                    <a
                        href="mailto:privacy@patentideas.example.com"
                        className="text-purple-700 hover:underline"
                    >
                        privacy@patentideas.example.com
                    </a>
                    .
                </p>
            </section>
        </div>
    );
};

export default Privacy;
