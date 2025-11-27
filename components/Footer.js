import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="w-full border-t border-gray-200 py-5 mt-12 text-center">
                <div className="max-w-2xl mx-auto px-4">
                    <p>© {new Date().getFullYear()} Wolf Roger</p>
                </div>
            </footer>
        );
    }
}

export default Footer;

