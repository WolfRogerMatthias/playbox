import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
    render() {
        return (
            <header className="sticky top-0 z-10 w-full border-b border-gray-200 py-5 bg-white">
                <div className="max-w-2xl mx-auto px-4">
                    <nav>
                        <Link href="/" className="mr-5 font-bold hover:text-blue-600 transition-colors">
                            About Me
                        </Link>
                        <Link href="/blog" className="mr-5 hover:text-blue-600 transition-colors">
                            Blog
                        </Link>
                        <Link href="/log" className="hover:text-blue-600 transition-colors">
                            Log
                        </Link>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;

