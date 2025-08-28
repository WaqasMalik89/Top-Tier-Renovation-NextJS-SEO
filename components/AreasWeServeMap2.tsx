'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { LatLngTuple } from 'leaflet';
import { useState, useEffect } from 'react';

// Fix Leaflet marker icons in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom icon for markers
const createCustomIcon = (cityName: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div class="marker-pin"><span>${cityName.charAt(0)}</span></div>`,
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [0, -40],
  });
};

// City coordinates with additional info
const cities: { 
  name: string; 
  coords: LatLngTuple;
  description: string;
  projects: number;
}[] = [
  { 
    name: "Toronto", 
    coords: [43.65107, -79.347015],
    description: "Downtown condos & heritage home renovations",
    projects: 127
  },
  { 
    name: "Mississauga", 
    coords: [43.589045, -79.64412],
    description: "Modern kitchen & bathroom transformations",
    projects: 94
  },
  { 
    name: "Brampton", 
    coords: [43.731548, -79.762418],
    description: "Basement developments & whole-home remodels",
    projects: 78
  },
  { 
    name: "Milton", 
    coords: [43.518299, -79.877404],
    description: "New construction & custom home projects",
    projects: 63
  },
  { 
    name: "Vaughan", 
    coords: [43.837208, -79.508278],
    description: "Luxury estate homes & commercial spaces",
    projects: 85
  },
  { 
    name: "Markham", 
    coords: [43.8561, -79.3370],
    description: "High-end kitchen & living space renovations",
    projects: 72
  },
  { 
    name: "Guelph", 
    coords: [43.5448, -80.2482],
    description: "Historic home restorations & additions",
    projects: 41
  },
  { 
    name: "Newmarket", 
    coords: [44.0592, -79.4613],
    description: "Family home expansions & modernizations",
    projects: 56
  },
  { 
    name: "Barrie", 
    coords: [44.3894, -79.6903],
    description: "Lakefront properties & cottage renovations",
    projects: 48
  },
  { 
    name: "Ajax", 
    coords: [43.8509, -79.0204],
    description: "Suburban home upgrades & outdoor living spaces",
    projects: 37
  },
];

export default function AreasWeServeMap() {
  const [mounted, setMounted] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100 h-96 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-200">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 text-white">
        <h2 className="text-xl font-bold text-center">Areas We Serve</h2>
        <p className="text-center text-blue-100 text-sm mt-1">
          Top Tier Renovation proudly serves the Greater Toronto Area and beyond
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <MapContainer
            center={[43.7, -79.4]}
            zoom={9}
            style={{ height: '450px', width: '100%' }}
            zoomControl={true}
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            {cities.map((city, idx) => (
              <Marker 
                key={idx} 
                position={city.coords}
                icon={createCustomIcon(city.name)}
                eventHandlers={{
                  click: () => setSelectedCity(city.name)
                }}
              >
                <Popup className="custom-popup">
                  <div className="p-2">
                    <h3 className="font-bold text-lg text-blue-800">{city.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{city.description}</p>
                    <div className="flex items-center mt-2">
                      <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                      <span className="text-xs font-medium text-gray-700">{city.projects} projects completed</span>
                    </div>
                    <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-1 px-3 rounded-full transition-colors">
                      View Projects
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        
        <div className="w-full md:w-1/3 bg-gray-50 p-4 border-t md:border-t-0 md:border-l border-gray-200">
          <h3 className="font-bold text-gray-800 mb-3">Cities We Serve</h3>
          <div className="overflow-y-auto max-h-80">
            {cities.map((city, idx) => (
              <div 
                key={idx} 
                className={`p-3 rounded-lg mb-2 cursor-pointer transition-all ${selectedCity === city.name ? 'bg-blue-100 border-l-4 border-blue-600' : 'bg-white hover:bg-gray-100'}`}
                onClick={() => setSelectedCity(city.name)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{city.name}</span>
                  <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2 py-1 rounded-full">
                    {city.projects} projects
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-1">{city.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .custom-marker {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .marker-pin {
          width: 30px;
          height: 42px;
          position: relative;
          display: flex;
          justify-content: center;
        }
        
        .marker-pin::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 42"><path fill="%233b82f6" d="M15 0C9.7 0 5.4 4.3 5.4 9.5c0 5.2 9.1 17.3 9.3 17.6l0.3 0.4 0.3-0.4c0.2-0.3 9.3-12.4 9.3-17.6C24.6 4.3 20.3 0 15 0z"/><circle cx="15" cy="9" r="5" fill="%23ffffff"/></svg>');
          background-size: contain;
          background-repeat: no-repeat;
        }
        
        .marker-pin span {
          position: relative;
          font-weight: bold;
          color: white;
          margin-top: 8px;
          font-size: 14px;
          z-index: 1;
        }
        
        .custom-popup .leaflet-popup-content-wrapper {
          border-radius: 8px;
          padding: 1px;
        }
        
        .custom-popup .leaflet-popup-content {
          margin: 8px;
          line-height: 1.4;
        }
        
        .leaflet-popup-tip {
          background: white;
        }
      `}</style>
    </div>
  );
}