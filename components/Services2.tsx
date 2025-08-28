'use client';

import { useEffect, useRef } from 'react';

export default function Services() {
  const services = [
    'Landscape Design',
    'Interlocking & Stonework',
    'Outdoor Lighting',
    'Garden Installation',
    'Sod & Turf',
    'Seasonal Maintenance',
  ];

  const scrollItems = [...services, ...services];
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleMouseEnter = () => {
      track.style.animationPlayState = 'paused';
    };
    const handleMouseLeave = () => {
      track.style.animationPlayState = 'running';
    };

    track.addEventListener('mouseenter', handleMouseEnter);
    track.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      track.removeEventListener('mouseenter', handleMouseEnter);
      track.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="services"
      style={{
        marginBottom: 0, // Removed extra gap
        textAlign: 'center',
        padding: '40px 20px 20px', // Reduced bottom padding
      }}
    >
      <h2
         style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
        }}
      >
        Our Services
      </h2>

      <div className="marquee-container">
        <div ref={trackRef} className="marquee-track">
          {scrollItems.map((service, index) => (
            <span key={index} className="marquee-item">
              <span className="service-icon">🌿</span>
              {service}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
          position: relative;
        }

        .marquee-track {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 40s linear infinite;
          will-change: transform;
          padding: 10px 0;
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          margin: 0 50px;
          font-size: 1.5rem;
          font-weight: 600;
          line-height: 1.5;
          color: #2d3748;
          padding: 15px 30px;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .marquee-item:hover {
          color: #38a169;
          transform: translateY(-4px);
        }

        .service-icon {
          margin-right: 12px;
          transition: all 0.3s ease;
          font-size: 1.8rem;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .marquee-item {
            font-size: 1.2rem;
            padding: 12px 20px;
            margin: 0 30px;
          }

          .service-icon {
            font-size: 1.5rem;
            margin-right: 8px;
          }

          h2 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .marquee-item {
            font-size: 1rem;
            padding: 10px 15px;
            margin: 0 20px;
          }

          .service-icon {
            font-size: 1.2rem;
            margin-right: 6px;
          }
        }
      `}</style>
    </section>
  );
}
