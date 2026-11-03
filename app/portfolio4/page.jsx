'use client';
import './page.css';
export default function ContactPage() {
  function submit(event) {
    event.preventDefault();
    window.alert('Message Sent!');
  }
  return (
    <main className="contact-page">
      <div className="contact-container">
        <section className="profile-card">
          <svg className="decor-svg" viewBox="0 0 380 480" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M 20 60 A 80 80 0 0 1 120 10" stroke="#f25c27" strokeWidth="2.5" strokeDasharray="6 6" />
            <path d="M 30 380 Q 80 340 180 305" stroke="#f25c27" strokeWidth="2.5" strokeDasharray="6 6" />
          </svg>
          <div className="image-container"><img src="/images/Naman.png" alt="Naman Gupta" /></div>
          <h2 className="name-title">Naman Gupta</h2>
          <div className="flame-badge" aria-label="Featured"><i className="fa-solid fa-fire-flame-curved" /></div>
          <p className="bio-text">A Class 12th Student who wants to explore the world of software development.</p>
          <div className="social-icons">
            <a href="#" title="Instagram" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
            <a href="#" title="YouTube" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
          </div>
        </section>
        <section className="contact-section">
          <div className="headline"><span className="line1">LET&apos;S WORK</span><span className="line2">TOGETHER</span></div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <div className="form-group"><label htmlFor="name">Name</label><input type="text" id="name" className="form-control" placeholder="Your Name" required /></div>
              <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" className="form-control" placeholder="Your@email.com" required /></div>
            </div>
            <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" className="form-control" placeholder="Message" required /></div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
          <a className="back-link" href="/portfolio5">← Back to portfolio</a>
        </section>
      </div>
    </main>
  );
}
