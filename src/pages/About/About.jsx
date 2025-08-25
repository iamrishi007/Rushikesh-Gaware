import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hi, I’m Rushikesh Gaware, a passionate Full Stack Developer with a strong focus on building scalable web applications and seamless user experiences. My journey started with curiosity about how the web works, which grew into a deep love for coding, problem-solving, and creating impactful solutions.{" "}
                <span className="font-bold text-white">
                  As the developer of multiple real-world MERN projects
                </span>
                , I focus on writing clean, maintainable code and designing applications with performance and scalability in mind.
              </p>
              <p className="text-white">
             I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), along with strong skills in Data Structures & Algorithms, API integration, and UI development. I enjoy transforming ideas into interactive, user-friendly products — from crafting responsive frontends to architecting secure backends.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Beyond just writing code, I value clean architecture, collaboration, and continuous learning. I thrive in agile environments, where innovation and creativity meet real-world challenges.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Rushikesh Gaware
                    </cite>
                    
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
