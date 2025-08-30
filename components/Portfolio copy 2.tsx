// This tells Next.js that this component runs on the client side (browser)
// rather than the server side
'use client';

// Import React hooks for creating references and side effects
import { useRef, useEffect } from 'react';
// Import Next.js Image component for optimized image loading
import Image from 'next/image';
// Import our custom modal component for showing enlarged images
import ImageModal from './ImageModal';
// Import GSAP (GreenSock Animation Platform) for smooth animations
import { gsap } from 'gsap';
// Import ScrollTrigger plugin for animations that trigger on scrolling
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP, but only if we're in the browser
// (window doesn't exist during server-side rendering)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Array of portfolio items with image paths and descriptive text
// Each object represents one project in our portfolio
const portfolioItems = [
  { src: '/images/uploaded-image-0.jpg', alt: 'Custom outdoor patio with interlocking stonework and seating area' },
  { src: '/images/uploaded-image-1.jpg', alt: 'Elegant front patio design with flower beds and decorative lighting'},
  { src: '/images/uploaded-image-2.jpg', alt: 'Modern backyard landscape with lush greenery and stone pathway'},
  { src: '/images/uploaded-image-3.jpg', alt: 'Luxury outdoor living space with custom landscaping and patio' },
  { src: '/images/uploaded-image-4.jpg', alt: 'Natural Stone Steps Installation' },
  { src: '/images/uploaded-image-5.jpg', alt: 'Quality Craftmanship with precision' },
  { src: '/images/uploaded-image-6.jpg', alt: 'Natural Stone Steps Installation' },
  { src: '/images/uploaded-image-7.jpg', alt: 'Decorative Retaining Wall with Paved Driveway' },
];

// Main Portfolio component that displays our projects
export default function Portfolio() {
  // Create a reference to the entire portfolio section for animation triggers
  const sectionRef = useRef<HTMLDivElement>(null);
  // Create a reference to the portfolio grid container
  const portfolioRef = useRef<HTMLDivElement>(null);
  // Create an array to store references to each individual portfolio item
  const imagesRef = useRef<HTMLDivElement[]>([]);

  // Helper function to add DOM elements to our references array
  // This helps us keep track of all portfolio items for animation
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    // Only add the element if it exists and isn't already in our array
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current[index] = el;
    }
  };

  // useEffect hook runs after the component renders to the screen
  useEffect(() => {
    // Don't run animations if the portfolio container or items aren't ready
    if (!portfolioRef.current || imagesRef.current.length === 0) return;

    // Set the initial state for all portfolio items before animation begins
    // This makes them invisible, slightly down and rotated for the entrance effect
    gsap.set(imagesRef.current, {
      opacity: 0,        // Make completely transparent
      y: 50,             // Position 50 pixels down from normal position
      scale: 0.9,        // Shrink to 90% of normal size
      rotation: -5,      // Tilt slightly counter-clockwise
    });

    // Create the main animation timeline that controls the sequence of animations
    const tl = gsap.timeline({
      // Configure ScrollTrigger to start animations when user scrolls to this section
      scrollTrigger: {
        trigger: sectionRef.current, // Element that triggers the animation
        start: 'top 80%',           // Start when top of element is 80% down the viewport
        end: 'bottom 20%',          // End when bottom is 20% from top of viewport
        toggleActions: 'play none none reverse', // Play forward on enter, reverse on leave
      },
    });

    // Add the main animation to the timeline
    // This makes portfolio items fade in, move up, scale up, and straighten
    tl.to(imagesRef.current, {
      opacity: 1,        // Fade to fully visible
      y: 0,              // Move to normal vertical position
      scale: 1,          // Scale to normal size (100%)
      rotation: 0,       // Remove rotation (straighten)
      stagger: 0.15,     // Delay each item's animation by 0.15 seconds for cascade effect
      duration: 1,       // Each animation takes 1 second to complete
      ease: 'back.out(1.7)', // Use a "bounce back" easing function for playful effect
    });

    // Add hover effects to each portfolio item
    imagesRef.current.forEach((image) => {
      // Skip if this image reference is empty
      if (!image) return;
      
      // When mouse moves over an image
      image.addEventListener('mouseenter', () => {
        // Animate the image to appear to lift up and grow slightly
        gsap.to(image, {
          scale: 1.05,     // Enlarge to 105% size
          y: -10,          // Move 10 pixels upward
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)', // Enhance shadow for "lifted" effect
          duration: 0.5,   // Animation takes half a second
          ease: 'power2.out', // Smooth easing function
        });
      });

      // When mouse moves away from an image
      image.addEventListener('mouseleave', () => {
        // Return the image to its normal state
        gsap.to(image, {
          scale: 1,       // Return to normal size
          y: 0,           // Return to normal position
          boxShadow: '0 10px 20px rgba(0,0,0,0.1)', // Return to normal shadow
          duration: 0.5,  // Animation takes half a second
          ease: 'power2.out', // Smooth easing function
        });
      });
    });

    // Cleanup function that runs when component is removed from page
    return () => {
      // Remove all ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  // The JSX that defines what this component renders to the screen
  return (
    // The main portfolio section container
    <section 
      id="portfolio" // HTML ID for linking from navigation
      ref={sectionRef} // Attach our section reference for animations
      style={{ 
        margin: '80px 0', // Space above and below the section
        padding: '40px 20px', // Space inside the section
        background: 'linear-gradient(to bottom, #f8f9fa, #ffffff)' // Subtle background gradient
      }}
    >
      {/* Portfolio section heading */}
      <h2 style={{ 
        textAlign: 'center', // Center the text
        marginBottom: '50px', // Space below the heading
        fontSize: '2.5rem', // Large font size
        color: '#2d4a2d', // Dark green color
        fontWeight: '700', // Bold text
        opacity: 0, // Start invisible (will be animated by GSAP)
      }}>
        Our Portfolio
      </h2>

      {/* Grid container for all portfolio items */}
      <div
        ref={portfolioRef} // Attach our portfolio container reference
        style={{
          display: 'grid', // Use CSS grid layout
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Responsive columns
          gap: '25px', // Space between grid items
          maxWidth: '1200px', // Maximum width of the container
          margin: '0 auto', // Center the container horizontally
        }}
      >
        {/* Loop through each portfolio item and create a card for it */}
        {portfolioItems.map(({ src, alt }, index) => (
          <div
            key={src} // Unique key for React to track this element
            ref={(el) => addToRefs(el, index)} // Add this element to our references array
            style={{
              borderRadius: '12px', // Rounded corners
              overflow: 'hidden', // Hide anything that goes outside the border
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)', // Subtle shadow for depth
              transform: 'translateY(50px)', // Start position for animation
              opacity: 0, // Start invisible for animation
              cursor: 'pointer', // Show hand cursor on hover
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effects
            }}
          >
            {/* Wrap each image in our custom modal component */}
            <ImageModal key={src} src={src} alt={alt}>
              {/* Next.js optimized image component */}
              <Image
                src={src} // Image path
                alt={alt} // Accessibility description
                width={400} // Base width
                height={300} // Base height
                style={{ 
                  objectFit: 'cover', // Crop image to fill container
                  width: '100%', // Responsive width
                  height: '250px', // Fixed height
                  transition: 'transform 0.3s ease' // Smooth zoom on hover
                }}
                priority={index < 3} // Load first 3 images with high priority
              />
              {/* Text content below the image */}
              <div style={{
                padding: '20px', // Space inside the text area
                background: '#fff', // White background
                textAlign: 'center' // Center the text
              }}>
                {/* Project title */}
                <h3 style={{
                  margin: '0 0 10px 0', // Space below the title
                  color: '#2d4a2d', // Dark green color
                  fontSize: '1.2rem' // Slightly larger font
                }}>
                  {alt}
                </h3>
                {/* Call to action text */}
                <p style={{
                  margin: 0, // Remove default margin
                  color: '#6b7280', // Gray color
                  fontSize: '0.9rem' // Slightly smaller font
                }}>
                  View Project
                </p>
              </div>
            </ImageModal>
          </div>
        ))}
      </div>

      {/* Embedded CSS for responsive design */}
      <style jsx>{`
        /* Styles for medium screens (tablets) */
        @media (max-width: 768px) {
          div {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) !important;
            gap: 20px !important;
          }
          
          h2 {
            font-size: 2rem !important;
          }
        }

        /* Styles for small screens (mobile phones) */
        @media (max-width: 480px) {
          div {
            grid-template-columns: 1fr !important;
            gap: 15px !important;
          }
          
          h2 {
            font-size: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}