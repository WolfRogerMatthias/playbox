import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer style={{ padding: '20px 0', borderTop: '1px solid #eaeaea', marginTop: '50px', textAlign: 'center' }}>
                <p>© {new Date().getFullYear()} Wolf Roger</p>
            </footer>
        );
    }
}

export default Footer;
