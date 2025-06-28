import { Link } from "react-scroll";

// Hero component
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-primary text-light pt-20"
    >
      <div className="container mx-auto px-6">
        <p className="text-secondary font-mono mb-4">Hi, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Võ Thanh Hiếu.</h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate mb-6">
          FRONT-END DEVELOPER
        </h2>
        <p className="max-w-lg text-slate mb-8">
          I build practical web applications with optimized performance that
          deliver value to businesses and users.
        </p>

        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-light hover:text-secondary cursor-pointer"
        >
          <button className="border border-secondary text-secondary px-6 py-3 rounded hover:bg-secondary/10 transition">
            View My Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
