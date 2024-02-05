export default function Footer() {
    return (
        <footer className="bg-stone-200 text-ston-950 py-6">
            <div className="container max-w-screen-lg px-6 mx-auto">
                <div className="flex justify-center gap-2 md:justify-between items-center flex-wrap text-xs ">
                    <p className="">
                        © {new Date().getFullYear()} <strong>Sahdani</strong>. All rights reserved.
                    </p>
                    <div className="">
                        Website ini dibuat oleh <a href='https://zulzidan.com/' className="hover:underline">zulzidan.com</a>
                    </div>
                    <div className="flex ">
                        <a href="/terms" className="hover:underline mr-4">Terms of Service</a>
                        <a href="/privacy" className="hover:underline">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
