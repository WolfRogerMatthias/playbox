import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="sticky bottom-0 z-10 w-full border-t border-gray-200 py-5 text-center bg-white">
                <div className="max-w-2xl mx-auto px-4">
                    <p>© {new Date().getFullYear()} Wolf Roger</p>
                </div>
            </footer>
        );
    }
}

export default Footer;

