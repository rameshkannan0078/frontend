import { API_KEY } from '@/Global/ApiKey/apiKey';
import React, { useRef, useEffect } from 'react';

interface MapComponentProps {
    latitude: number;
    longitude: number;
    className:string;
}

const PrMapComponent: React.FC<MapComponentProps> = ({ latitude, longitude,className }) => {
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY.GOOGLE_MAP_API_KEY}`;
        script.async = true;
        script.onload = initializeMap;
        document.body.appendChild(script);
    }, []);

    const initializeMap = () => {
        if (mapRef.current && window.google) {
            const mapOptions = {
                center: { lat: latitude, lng: longitude },
                zoom: 10
            };

            const map = new window.google.maps.Map(mapRef.current, mapOptions);

            const marker = new window.google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map: map,
                title: 'Marker'
            });
        }
    };
    return <div ref={mapRef} className={`${className}`} />;
};

export default PrMapComponent;
