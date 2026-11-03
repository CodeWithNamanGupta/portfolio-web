import "./page.css";
import ImageReveal from "../components/ImageReveal";
import CustomCursor from "../components/CustomCursor";
import HairlineShowcase from "../components/HairlineShowcase";
import PatternWaves from "../components/reactbits/PatternWaves";

const projects = [
  {
    number: "01",
    type: "FULL-STACK PROJECT · GRADCIRCLE INNOVATION CHALLENGE",
    title: "Pet Community Platform",
    description:
      "A community platform designed to bring pet owners and useful pet-care services closer together. I worked on both the frontend and backend, building the product across its user-facing experience and server-side functionality.",
    tags: ["Frontend", "Backend", "Web application"],
    note: "Built for the Technology Track",
  },
  {
    number: "02",
    type: "FULL-STACK PROJECT · GRADCIRCLE FINAL ROUND",
    title: "Civic Issue Reporting Platform",
    description:
      "A web-based civic workflow concept focused on making it easier to report, track and resolve local issues such as waste overflow, damaged infrastructure and water shortages. I contributed across both frontend and backend development.",
    tags: ["Frontend", "Backend", "Civic technology"],
    note: "4th place · GradCircle Innovation Challenge",
  },
];

const skills = [
  ["Java", "DSA and problem solving"],
  ["HTML & CSS", "Web structure and styling"],
  ["Python", "Programming fundamentals"],
  ["Full-stack development", "Frontend and backend project experience"],
  ["UI/UX", "Interest in clear, user-focused interfaces"],
];

export default function PortfolioHome() {
  return (
    <div className="portfolio-home">
      <PatternWaves className="portfolio-waves-bg" preset="silk" color="#f25c27" backgroundColor="#0d0d0d" opacity={0.22} interactive={true} speed={0.22} />
      <CustomCursor />

      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Naman Gupta home">NG<span>.</span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECTS</a>
          <a href="#community">COMMUNITY</a>
          <a href="/portfolio4" className="contact-btn">CONTACT ↗</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-kicker"><span className="status-dot" /> STUDENT DEVELOPER / INDIA</div>
          <div className="hero-meta-grid">
            <div className="meta-box"><p>Currently</p><h4>Class 12 · ISC</h4></div>
            <div className="meta-box"><p>Focus</p><h4>Software & Web Development</h4></div>
            <div className="meta-box learning-meta">
              <div><p>Learning</p><h4>Data Structures & Algorithms in Java</h4></div>
              <HairlineShowcase />
            </div>
          </div>
          <div className="hero-image-wrapper"><ImageReveal /></div>
          <div className="hero-title-row">
            <div>
              <p className="eyebrow">HELLO, I'M NAMAN GUPTA</p>
              <h1>Ideas into <span>working</span><br />digital experiences.</h1>
            </div>
            <p className="hero-intro">I’m a student developer who enjoys building useful products, solving problems and learning by making things.</p>
          </div>
          <div className="hero-actions">
            <a className="primary-link" href="#projects">EXPLORE MY WORK <span>↘</span></a>
            <a className="text-link" href="/portfolio4">LET’S CONNECT ↗</a>
          </div>
        </section>

        <section className="content-section about-section" id="about">
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>Curious by nature.<br /><span>Builder by practice.</span></h2>
          </div>
          <div className="about-copy">
            <p>I’m currently pursuing Class 12 (ISC) at City Montessori School. I’m interested in software engineering, thoughtful design and technology that solves real problems.</p>
            <p>Hackathons have given me the chance to take ideas from a problem statement to a working product, collaborate under deadlines and learn beyond the classroom. I’m currently strengthening my foundations in Data Structures and Algorithms using Java.</p>
            <div className="stat-strip">
              <div><strong>140+</strong><span>LeetCode problems solved</span></div>
              <div><strong>4th</strong><span>GradCircle challenge finish</span></div>
              <div><strong>2027</strong><span>ISC board examination year</span></div>
            </div>
          </div>
        </section>

        <section className="content-section projects-section" id="projects">
          <div className="section-heading projects-heading">
            <span className="section-index">02 / SELECTED WORK</span>
            <h2>Projects with a<br /><span>purpose.</span></h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-topline"><span>{project.number} / PROJECT</span><span>{project.type}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-bottom">
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <span className="project-note">{project.note}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-heading">
            <span className="section-index">03 / TOOLKIT</span>
            <h2>Learning, building<br /><span>and improving.</span></h2>
          </div>
          <div className="skill-list">
            {skills.map(([name, detail], i) => (
              <div className="skill-row" key={name}>
                <span className="skill-number">0{i + 1}</span><h3>{name}</h3><p>{detail}</p><span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="content-section community-section" id="community">
          <div className="section-heading">
            <span className="section-index">04 / COMMUNITY</span>
            <h2>Good ideas need<br /><span>great teams.</span></h2>
          </div>
          <div className="community-copy">
            <p className="community-name">HackMates<span>.</span></p>
            <p>I started HackMates, a WhatsApp community that helps students connect with potential teammates and find people to build with for hackathons. The goal is simple: make it easier for motivated students to meet, collaborate and turn ideas into projects.</p>
            <span className="community-label">STUDENT-LED HACKATHON COMMUNITY</span>
          </div>
        </section>

        <section className="achievement-band">
          <div className="tensor-achievement"><span className="section-index">SCHOLARSHIP</span><p><strong>Tensor School of Technology</strong> — Awarded a scholarship following my first interview.</p></div>
          <span className="section-index">HIGHLIGHT / GRADCIRCLE INNOVATION CHALLENGE</span>
          <div><strong>4th Place</strong><p>Recognised in the Technology Track, representing CMS Mahanagar. The final round focused on building a civic issue reporting and tracking platform.</p></div>
        </section>

        <section className="resume-section">
          <div><span className="section-index">THE NEXT CHAPTER</span><h2>Let’s build<br /><span>something useful.</span></h2></div>
          <div className="resume-copy">
            <p>Interested in collaborating, discussing ideas or connecting around technology and hackathons? I’d be glad to hear from you.</p>
            <a className="primary-link" href="/portfolio4">GET IN TOUCH <span>↗</span></a>
            <a className="resume-link" href="/Naman-Gupta-Resume.pdf" download="Naman-Gupta-Resume.pdf">DOWNLOAD RÉSUMÉ ↓</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 NAMAN GUPTA</span>
        <div><a href="https://github.com/CodeWithNamanGupta" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/in/naman-gupta-721a97446/" target="_blank" rel="noreferrer">LINKEDIN ↗</a><a href="https://leetcode.com/u/Naman__Gupta/" target="_blank" rel="noreferrer">LEETCODE ↗</a><a href="/portfolio4">CONTACT ↗</a></div>
        <span>BUILT WITH CURIOSITY.</span>
      </footer>
    </div>
  );
}
