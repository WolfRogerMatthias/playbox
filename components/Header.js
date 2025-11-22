import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
    render() {
        return (
            <header style={{ padding: '20px 0', borderBottom: '1px solid #eaeaea' }}>
                <nav>
                    <Link href="/" style={{ marginRight: '20px', fontWeight: 'bold' }}>
                        About Me
                    </Link>
                    <Link href="/blog">
                        Blog
                    </Link>
                </nav>
            </header>
        );
    }
}

export default Header;
