// components/Layout.tsx

import Head from 'next/head';
import styles from './Layout.module.css';

interface LayoutProps {
    children: React.ReactNode;
    title: string;
}

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{title} - My Blog</title>
                <meta name="description" content="A static blog built with Next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <h1>My Blog</h1>
            </header>
            <main className={styles.main}>{children}</main>
            <footer className={styles.footer}>
                <p>© 2024 My Blog. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
