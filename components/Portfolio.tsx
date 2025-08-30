import Image from 'next/image';
import ImageModal from './ImageModal'; // client-side modal

const portfolioItems = [
  { src: '/images/uploaded-image-0.jpg', alt: 'Beautifully landscaped garden project 1' },
  { src: '/images/uploaded-image-1.jpg', alt: 'Beautifully landscaped garden project 2' },
  { src: '/images/uploaded-image-2.jpg', alt: 'Beautifully landscaped garden project 3' },
  { src: '/images/uploaded-image-3.jpg', alt: 'Beautifully landscaped garden project 4' },
  { src: '/images/uploaded-image-4.jpg', alt: 'Beautifully landscaped garden project 5' },
  { src: '/images/uploaded-image-5.jpg', alt: 'Beautifully landscaped garden project 6' },
  { src: '/images/uploaded-image-6.jpg', alt: 'Beautifully landscaped garden project 7' },
  { src: '/images/uploaded-image-7.jpg', alt: 'Beautifully landscaped garden project 8' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ marginBottom: 40 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Portfolio</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
        }}
      >
        {portfolioItems.map(({ src, alt }) => (
          <ImageModal key={src} src={src} alt={alt}>
            <Image
              src={src}
              alt={alt}
              width={300}
              height={200}
              style={{ objectFit: 'cover', borderRadius: 8 }}
              priority={false}
            />
          </ImageModal>
        ))}
      </div>
    </section>
  );
}
