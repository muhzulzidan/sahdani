export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} MyBrand. All rights reserved.
                    </p>
                    <div className="flex">
                        <a href="/terms" className="text-sm hover:underline mr-4">Terms of Service</a>
                        <a href="/privacy" className="text-sm hover:underline">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
