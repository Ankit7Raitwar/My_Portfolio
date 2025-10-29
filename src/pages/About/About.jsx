import HeroImg from "@/assets/images/hero4.png";
import OlovaLogo from "@/assets/images/olova.png";
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
<Helmet>
        <title>Ankit Raitwar</title>
        <meta
          name="description"
          content="Welcome to My Website. Explore amazing features, services, and tutorials."
        />
        <meta
          name="keywords"
          content="React, SEO, React Helmet, Web Development, Tutorials"
        />
        <meta property="og:title" content="Home | My Website" />
        <meta property="og:description" content="Explore amazing features and tutorials on My Website." />
        <meta property="og:type" content="website" />
      </Helmet>


      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-1/1 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block aspect-[4/4] object-cover"
                  alt="payments illustration"
                  width={1207}
                  // height={529}
                  
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hi, I'm Ankit Raitwar – a passionate JavaScript developer with
                1.3+ years of hands-on experience building dynamic,
                user-friendly web interfaces. I specialize in React and modern
                JS frameworks, focusing on delivering clean, efficient, and
                scalable frontend solutions.{" "}
                <span className="font-bold text-white">
                  {/* As the creator of the OlovaJS UI Framework */}
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-white">
               Currently, I'm expanding into backend development to become a well-rounded full-stack developer, enabling me to build seamless, end-to-end web applications that combine performance with great user experience.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                   As a lifelong learner and active contributor to the developer community, I’m committed to innovating tools and ideas that bring real value to the tech ecosystem.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Ankit Raitwar
                    </cite>
                    {/* <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-white">OlovaJS</span>
                    </div> */}
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
