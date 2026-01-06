import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeCollectionModal from './components/HomeCollectionModal';
import BackToTopButton from './components/BackToTopButton';

const TOPBAR_HEIGHT = 40;
const HEADER_HEIGHT = 80;

const Layout = () => {
    const [showTopbar, setShowTopbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const current = window.scrollY;

            if (current > lastScrollY && current > 60) {
                setShowTopbar(false);
            } else {
                setShowTopbar(true);
            }

            setLastScrollY(current);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [lastScrollY]);

    return (
        <div className="min-h-screen bg-background">
            <Topbar isVisible={showTopbar} />

            <Header topOffset={showTopbar ? TOPBAR_HEIGHT : 0} />

            <main className={`pt-[${TOPBAR_HEIGHT + HEADER_HEIGHT}px]`}>
                <Outlet />
            </main>

            <Footer />
            <HomeCollectionModal />
            <BackToTopButton />
        </div>
    );
};

export default Layout;
