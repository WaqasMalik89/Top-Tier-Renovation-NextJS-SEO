import Image from 'next/image';

const portfolioItems = [
  { src: '/images/UploadedImage0.jpg', alt: 'Beautifully landscaped garden project 1' },
  { src: '/images/UploadedImage1.jpg', alt: 'Beautifully landscaped garden project 2' },
  { src: '/images/UploadedImage3.jpg', alt: 'Beautifully landscaped garden project 3' },
  { src: '/images/UploadedImage4.jpg', alt: 'Beautifully landscaped garden project 4' },
  { src: '/images/UploadedImage5.jpg', alt: 'Beautifully landscaped garden project 5' },
  { src: '/images/UploadedImage6.jpg', alt: 'Beautifully landscaped garden project 6' },
  { src: '/images/UploadedImage7.jpg', alt: 'Beautifully landscaped garden project 7' },
  { src: '/images/UploadedImage8.jpg', alt: 'Beautifully landscaped garden project 8' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" style={{ marginBottom: 40 }}>
      <h2>Portfolio</h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'center',
        }}
      >
        {portfolioItems.map(({ src, alt }) => (
          <Image
            key={src}
            src={src}
            alt={alt}
            width={300}
            height={200}
            style={{ objectFit: 'cover', borderRadius: 8 }}
            priority={false}
          />
        ))}
      </div>
    </section>
  );
}
