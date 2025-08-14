export default function ContactForm() {
    return (
      <section id="contact" style={{ marginBottom: 40 }}>
        <h2>Contact Us</h2>
        <form action="#" method="POST" style={{ display: 'grid', gap: 12, maxWidth: 500 }}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Phone Number" />
          <textarea name="message" placeholder="Tell us about your project..." required rows={6}></textarea>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
        <p>Email: mail.waqas.malik@gmail.com | Phone: (647) 299-9100</p>
        <p>
          Serving Toronto, Brampton, Mississauga, Milton, Guelph, Vaughan, Bradford, Barrie, Newmarket and
          the GTA
        </p>
      </section>
    );
  }
  