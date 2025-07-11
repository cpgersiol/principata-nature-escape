
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  className?: string;
  height?: string;
}

const Map: React.FC<MapProps> = ({ className = "", height = "h-96" }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  useEffect(() => {
    // Check if we have a token in localStorage
    const savedToken = localStorage.getItem('mapbox-token');
    if (savedToken) {
      setMapboxToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [19.9128, 41.8782], // Approximate coordinates for Vau i Dejës area
      zoom: 12,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add a marker for the camping location
    new mapboxgl.Marker({ color: '#16a34a' })
      .setLngLat([19.9128, 41.8782])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          '<div class="p-2"><strong>Camping Principata</strong><br/>Vau i Dejës - Koman Road</div>'
        )
      )
      .addTo(map.current);

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const token = formData.get('token') as string;
    
    if (token) {
      localStorage.setItem('mapbox-token', token);
      setMapboxToken(token);
    }
  };

  if (!mapboxToken) {
    return (
      <div className={`${height} ${className} bg-sage-50 rounded-2xl flex items-center justify-center p-6`}>
        <div className="text-center max-w-md">
          <h3 className="text-lg font-semibold text-forest-800 mb-4">
            Interactive Map
          </h3>
          <p className="text-gray-600 mb-4 text-sm">
            To display the interactive map, please enter your Mapbox public token. 
            You can get one for free at{' '}
            <a 
              href="https://mapbox.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-forest-600 hover:underline"
            >
              mapbox.com
            </a>
          </p>
          <form onSubmit={handleTokenSubmit} className="space-y-3">
            <input
              type="text"
              name="token"
              placeholder="Enter your Mapbox public token"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              required
            />
            <button
              type="submit"
              className="w-full bg-forest-600 hover:bg-forest-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
            >
              Load Map
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={`${height} ${className} rounded-2xl overflow-hidden shadow-lg`}>
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;
