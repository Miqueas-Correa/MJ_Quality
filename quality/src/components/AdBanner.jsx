import { useEffect, useRef, useState } from 'react';

const AdBanner = () => {
    const [loaded, setLoaded] = useState(false);
    const adRef = useRef(null);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            if (adRef.current?.innerHTML.trim() !== '') {
                setLoaded(true);
            }
        });

        if (adRef.current) {
            observer.observe(adRef.current, { childList: true, subtree: true });
        }

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error:', e);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={adRef} style={{ display: loaded ? 'block' : 'none' }}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                data-ad-slot="XXXXXXXXXX"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
        </div>
    );
};

export default AdBanner;