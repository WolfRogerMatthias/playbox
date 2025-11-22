import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Home.module.css';

class Layout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className={styles.container}>
                <Header />
                <main className={styles.main}>{children}</main>
                <Footer />
            </div>
        );
    }
}

export default Layout;
