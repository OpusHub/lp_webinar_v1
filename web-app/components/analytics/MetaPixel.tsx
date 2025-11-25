"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

export const FB_PIXEL_ID = "1310751963807969";

export const pageview = () => {
    if (typeof window.fbq !== "undefined") {
        window.fbq("track", "PageView");
    }
};

export const event = (name: string, options = {}) => {
    if (typeof window.fbq !== "undefined") {
        window.fbq("track", name, options);
    }
};

export default function MetaPixel() {
    const pathname = usePathname();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) return;
        pageview();
    }, [pathname, loaded]);

    return (
        <div>
            <Script
                id="fb-pixel"
                src="https://connect.facebook.net/en_US/fbevents.js"
                strategy="afterInteractive"
                onLoad={() => {
                    setLoaded(true);
                    window.fbq("init", FB_PIXEL_ID);
                    window.fbq("track", "PageView");
                }}
            />
            <Script id="fb-pixel-init" strategy="afterInteractive">
                {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
            </Script>
        </div>
    );
}
