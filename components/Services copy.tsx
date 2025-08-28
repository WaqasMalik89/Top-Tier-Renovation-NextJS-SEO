export default function Services() {
    const services = [
      'Landscape Design',
      'Interlocking & Stonework',
      'Outdoor Lighting',
      'Garden Installation',
      'Sod & Turf',
      'Seasonal Maintenance',
    ];
  
    return (
      <section id="services" style={{ marginBottom: 40 }}>
        <h2>Our Services</h2>
        <div
          className="service-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
          }}
        >
          {services.map((service) => (
            <article
              key={service}
              style={{
                padding: 20,
                border: '1px solid #ccc',
                borderRadius: 8,
                backgroundColor: '#fff',
              }}
              aria-label={service}
            >
              {service}
            </article>
          ))}
        </div>
      </section>
    );
  }
  