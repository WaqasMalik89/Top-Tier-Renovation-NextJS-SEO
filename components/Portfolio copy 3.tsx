'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const portfolioItems = [
  { src: '/images/uploaded-image-0.jpg', alt: 'Custom outdoor patio with interlocking stonework and seating area', category: 'hardscaping' },
  { src: '/images/uploaded-image-1.jpg', alt: 'Elegant front patio design with flower beds and decorative lighting', category: 'lighting' },
  { src: '/images/uploaded-image-2.jpg', alt: 'Modern backyard landscape with lush greenery and stone pathway', category: 'landscaping' },
  { src: '/images/uploaded-image-3.jpg', alt: 'Luxury outdoor living space with custom landscaping and patio', category: 'hardscaping' },
  { src: '/images/uploaded-image-4.jpg', alt: 'Natural Stone Steps Installation', category: 'hardscaping' },
  { src: '/images/uploaded-image-5.jpg', alt: 'Quality Craftmanship with precision', category: 'landscaping' },
  { src: '/images/uploaded-image-6.jpg', alt: 'Natural Stone Steps Installation', category: 'hardscaping' },
  { src: '/images/uploaded-image-7.jpg', alt: 'Decorative Retaining Wall with Paved Driveway', category: 'hardscaping' },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const [filter, setFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  
  // Filter items based on selected category
  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === filter));
    }
  }, [filter]);

  // Helper function to add DOM elements to our references array
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current[index] = el;
    }
  };

  useEffect(() => {
    // Check if refs are available
    if (!portfolioRef.current || !sectionRef.current || imagesRef.current.length === 0) return;

    // Set initial state for animation - more subtle starting position
    gsap.set(imagesRef.current, {
      opacity: 0,
      y: 30, // Reduced from 100px to 30px
      scale: 0.95, // Reduced from 0.8 to 0.95
    });

    // Get the title and filter buttons elements safely
    const titleElement = sectionRef.current.querySelector('h2');
    const filterButtonsElement = sectionRef.current.querySelector('.filter-buttons');

    // Create a master timeline for the portfolio animation
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%', // Start animation a bit later
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    });

    // Animation 1: Section title animation (only if element exists)
    if (titleElement) {
      masterTl.fromTo(titleElement, 
        { opacity: 0, y: 20 }, // Reduced from 50px to 20px
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' } // Reduced duration
      );
    }

    // Animation 2: Filter buttons animation (only if element exists)
    if (filterButtonsElement) {
      masterTl.fromTo(filterButtonsElement, 
        { opacity: 0, y: 15 }, // Reduced from 30px to 15px
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, // Reduced duration
        '-=0.2' // Reduced overlap
      );
    }

    // Animation 3: Staggered grid items with subtle effects
    masterTl.to(imagesRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: {
        amount: 0.5, // Reduced from 0.8
        from: 'center', // Changed from random to center for more orderly appearance
        grid: 'auto',
      },
      duration: 0.8, // Reduced from 1.2
      ease: 'power2.out', // Simpler easing
    });

    // Animation 4: Add subtle hover effects
    imagesRef.current.forEach((image) => {
      if (!image) return;
      
      // Hover animation - subtle elevation effect
      image.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.02, // Reduced from 1.05
          y: -5, // Reduced from -15
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)', // Reduced shadow
          duration: 0.3, // Faster
          ease: 'power2.out',
        });
        
        // Animate the image inside
        const imgElement = image.querySelector('img');
        if (imgElement) {
          gsap.to(imgElement, {
            scale: 1.03, // Reduced from 1.1
            duration: 0.4,
            ease: 'power2.out',
          });
        }
      });

      image.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          y: 0,
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)', // Reduced shadow
          duration: 0.4,
          ease: 'power2.out',
        });
        
        // Reset the image inside
        const imgElement = image.querySelector('img');
        if (imgElement) {
          gsap.to(imgElement, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        }
      });
    });

    // Clean up function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredItems]);

  // Handle filter changes
  const handleFilterChange = (newFilter: string) => {
    if (newFilter === filter) return;
    setFilter(newFilter);
  };

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      style={{ 
        margin: '80px 0', 
        padding: '40px 20px',
        background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)',
      }}
    >
      <h2 style={{ 
        textAlign: 'center', 
        marginBottom: '30px',
        fontSize: '2.5rem', // Slightly smaller
        color: '#2d4a2d',
        fontWeight: '700', // Reduced from 800
        opacity: 0,
      }}>
        Our Portfolio
      </h2>

      {/* Filter buttons */}
      <div className="filter-buttons" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px', // Reduced from 15px
        marginBottom: '30px', // Reduced from 40px
        flexWrap: 'wrap',
        opacity: 0
      }}>
        {['all', 'hardscaping', 'landscaping', 'lighting'].map(cat => (
          <button
            key={cat}
            onClick={() => handleFilterChange(cat)}
            style={{
              padding: '8px 16px', // Reduced from 10px 20px
              border: 'none',
              borderRadius: '20px', // Reduced from 25px
              background: filter === cat ? '#4a7c4a' : '#e5e7eb',
              color: filter === cat ? 'white' : '#4b5563',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease', // Faster transition
              textTransform: 'capitalize',
              fontSize: '0.9rem', // Slightly smaller
            }}
            onMouseEnter={(e) => {
              if (filter !== cat) {
                gsap.to(e.currentTarget, {
                  background: '#9ae6b4',
                  color: '#22543d',
                  duration: 0.2 // Faster
                });
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== cat) {
                gsap.to(e.currentTarget, {
                  background: '#e5e7eb',
                  color: '#4b5563',
                  duration: 0.2 // Faster
                });
              }
            }}
          >
            {cat === 'all' ? 'All Projects' : cat}
          </button>
        ))}
      </div>

      <div
        ref={portfolioRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', // Slightly smaller minmax
          gap: '20px', // Reduced from 30px
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {filteredItems.map(({ src, alt, category }, index) => (
          <div
            key={src}
            ref={(el) => addToRefs(el, index)}
            className="portfolio-item"
            data-category={category}
            style={{
              borderRadius: '12px', // Reduced from 16px
              overflow: 'hidden',
              boxShadow: '0 8px 20px rgba(0,0,0,0.1)', // Reduced shadow
              transform: 'translateY(30px)', // Reduced from 100px
              opacity: 0,
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              position: 'relative',
            }}
          >
            <div style={{
              position: 'absolute',
              top: '12px', // Reduced from 15px
              right: '12px', // Reduced from 15px
              background: 'rgba(255,255,255,0.9)',
              padding: '4px 10px', // Reduced from 5px 12px
              borderRadius: '10px', // Reduced from 12px
              fontSize: '0.75rem', // Reduced from 0.8rem
              fontWeight: '600',
              color: '#4a7c4a',
              zIndex: 2,
              textTransform: 'capitalize'
            }}>
              {category}
            </div>
            
            <ImageModal key={src} src={src} alt={alt}>
              <Image
                src={src}
                alt={alt}
                width={400}
                height={300}
                style={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '250px', // Reduced from 280px
                  transition: 'transform 0.3s ease' // Faster
                }}
                priority={index < 4}
              />
              <div style={{
                padding: '20px', // Reduced from 25px
                background: '#fff',
                textAlign: 'center'
              }}>
                <h3 style={{
                  margin: '0 0 10px 0', // Reduced from 12px
                  color: '#2d4a2d',
                  fontSize: '1.1rem', // Reduced from 1.3rem
                  fontWeight: '600'
                }}>
                  {alt}
                </h3>
                <p style={{
                  margin: 0,
                  color: '#6b7280',
                  fontSize: '0.85rem' // Reduced from 0.95rem
                }}>
                  Click to view full project
                </p>
              </div>
            </ImageModal>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Additional styles for enhanced appearance */
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)) !important;
            gap: 15px !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          
          h2 {
            font-size: 1.7rem !important;
          }
        }
      `}</style>
    </section>
  );
}