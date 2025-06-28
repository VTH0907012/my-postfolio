// About component
const About = () => {
  return (
    <section id="about" className="py-20 bg-primary text-light">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
            <span className="text-secondary mr-4">01.</span> About
          </h2>
          <div className="w-full md:w-1/3 h-px bg-slate ml-4"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-secondary mb-2">Personal Info</h3>
                <ul className="space-y-2 text-slate">
                  <li className="flex">
                    <span className="w-24 font-medium">Dob:</span>
                    <span>09/07/2001</span>
                  </li>
                  <li className="flex">
                    <span className="w-24 font-medium">Gender:</span>
                    <span>Male</span>
                  </li>
                  <li className="flex">
                    <span className="w-24 font-medium">Phone:</span>
                    <span>0914549857</span>
                  </li>
                  <li className="flex">
                    <span className="w-24 font-medium">Email:</span>
                    <span>thanhheu090701@gmail.com</span>
                  </li>
                  <li className="flex">
                    <span className="w-24 font-medium">Address:</span>
                    <span>Ninh Kieu District, Can Tho City</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-secondary mb-2">Links</h3>
                <ul className="space-y-2 text-slate">
                  <li className="flex">
                    <span className="w-24 font-medium">Github:</span>
                    <a
                      href="https://github.com/VTH090701"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline"
                    >
                      VTH090701
                    </a>
                  </li>
                  <li className="flex">
                    <span className="w-24 font-medium"></span>
                    <a
                      href="https://github.com/VTH0907012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline"
                    >
                      VTH0907012
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-bold text-light mb-4">OBJECTIVE</h3>
            <p className="mb-4 text-slate">
              I want to develop my programming skills and build professional
              websites. My goal is to create practical products, optimize
              performance and bring value to businesses and users.
            </p>
            <ul className="space-y-2 text-slate mb-6">
              <li className="flex">
                <span className="text-secondary mr-2">▹</span>
                <span>
                  Short term: Continue to improve programming skills, optimize
                  software development processes and expand knowledge of system
                  architecture.
                </span>
              </li>
              <li className="flex">
                <span className="text-secondary mr-2">▹</span>
                <span>
                  Long term: Become a programmer capable of building and
                  developing complete web systems, aiming for the best user
                  experience and contributing to business development.
                </span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-light mb-4">EDUCATION</h3>
            <div className="bg-secondary/10 p-4 rounded-lg mb-4">
              <h4 className="font-bold">Can Tho University</h4>
              <p className="text-slate">Information Technology</p>
              <p className="text-sm text-slate/80">2019 - 2024</p>
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 group">
              <div className="absolute inset-0 border-2 border-secondary rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]"></div>

              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl group-hover:shadow-secondary/20 transition-all duration-300">
                <img
                  src={`${import.meta.env.BASE_URL}images/Anh_CV.jpg`}
                  alt="V6 Thanh Hieu"
                  className="w-full h-full object-cover 
                  brightness-95 contrast-110 
                  group-hover:brightness-100 
                  group-hover:contrast-100 
                  transition-all duration-500 ease-in-out"
                />

                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300"></div>
              <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
