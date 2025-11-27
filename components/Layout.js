import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-grow max-w-2xl mx-auto px-4 w-full mt-12 mb-24">{children}</main>
                <Footer />
            </div>
        );
    }
}

export default Layout;

