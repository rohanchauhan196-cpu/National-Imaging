import { useEffect } from 'react';

const GoogleReviews = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://elfsightcdn.com/platform.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="elfsight-app-ffb86313-0e62-4445-9615-069872291097" data-elfsight-app-lazy></div>
            </div>
        </section>
    );
};

export default GoogleReviews;
