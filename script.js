* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background: #0f0f0f;
  color: white;
}

/* NAVBAR */
nav {
  display: flex;
  justify-content: space-between;
  padding: 20px 10%;
  position: sticky;
  top: 0;
  background: #0f0f0f;
}

.logo {
  font-weight: bold;
  font-size: 20px;
}

.nav-links {
  display: flex;
  gap: 25px;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: white;
}

/* HAMBURGER */
.hamburger {
  display: none;
  font-size: 22px;
  cursor: pointer;
}

/* HERO */
.hero {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;
}

.hero h1 {
  font-size: 3rem;
}

.hero h2 {
  color: #aaa;
  margin-top: 10px;
}

.highlight {
  color: #00f5d4;
}

/* TYPING CURSOR */
#typing::after {
  content: "|";
  animation: blink 1s infinite;
}

@keyframes blink {
  50% { opacity: 0; }
}

/* SOCIAL ICONS */
.socials {
  margin-top: 20px;
  display: flex;
  gap: 20px;
  font-size: 22px;
}

.socials i:hover {
  color: #00f5d4;
  cursor: pointer;
}

/* SECTIONS */
section {
  padding: 80px 10%;
}

h2 {
  margin-bottom: 20px;
}

/* PROJECTS */
.project-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.card {
  background: #1a1a1a;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-10px);
  background: #222;
}

/* SCROLL ANIMATION */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: 0.6s;
}

.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}

/* MOBILE */
@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 70px;
    right: 0;
    background: #111;
    flex-direction: column;
    width: 200px;
    display: none;
    padding: 20px;
  }

  .nav-links.active {
    display: flex;
  }

  .hamburger {
    display: block;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 2.2rem;
  }
}