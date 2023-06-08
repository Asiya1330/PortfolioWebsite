import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const [page, setPage] = useState("home");
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (pathname.includes("projects")) {
      setPage("projectDetails");
    } else setPage("home");
  }, [pathname]);

  const scrollToSection = (sectionId, marginTop) => {
    if (page !== "home") {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - marginTop,
            behavior: "smooth",
          });
        }
      }, 500);
      return;
    }
    flushSync(() => {
      const element = document.getElementById(sectionId);
      window.scrollTo({
        top: element.offsetTop - marginTop,
        behavior: "smooth",
      });
    });
  };

  return (
    <div className="container-fluid m-0 p-0  bg-[#2b2b3a]">
      <footer className=" text-white ">
        <div className="p-0">
          <section className="container">
            <div className="flex flex-col md:flex-row gap-4 p-4 text-left w-full">
              <div className="mt-3  flex flex-col w-full md:w-1/2 justify-center md:justify-start items-center md:items-start">
                <h6 className="text-uppercase mb-4 font-weight-bold text-left">
                  Sababa Usmani
                </h6>

                <p className="text-sm flex text-center text-md-start">
                  Greetings, I am a Computer Information and Systems Engineer. I
                  am currently pursuing MSc in Artificial Intelligence
                  Engineering from Germany and I have been operating as a
                  full-time freelancer for, the past seven years. I have a
                  network of developers working alongside me. We usually build
                  products for startups, businesses, NGOs, academic
                  institutions, the medical industry, and other industries.
                </p>
              </div>
              <div className="flex w-full md:w-1/2 flex-col md:flex-row">
                <div className="mt-3 flex flex-col items-center md:items-start w-full md:w-1/2 ">
                  <h6 className="text-uppercase mb-2 font-weight-bold">
                    Portfolio Navigation
                  </h6>
                  <p className="m-0">
                    <p
                      onClick={() => scrollToSection("home", 50)}
                      className="text-gray-200 hover:text-purple-400 cursor-pointer text-sm mb-1"
                    >
                      Home
                    </p>
                  </p>
                  <p className=" m-0">
                    <p
                      onClick={() => scrollToSection("clients", 200)}
                      className="text-gray-200 hover:text-purple-400 cursor-pointer text-sm mb-1"
                    >
                      Clients
                    </p>
                  </p>
                  <p className="m-0">
                    <p
                      onClick={() => scrollToSection("services", 50)}
                      className="text-gray-200 hover:text-purple-400 cursor-pointer text-sm mb-1"
                    >
                      Services
                    </p>
                  </p>
                  <p className="m-0">
                    <p
                      onClick={() => scrollToSection("projects", 70)}
                      className="text-gray-200 hover:text-purple-400 cursor-pointer text-sm mb-1"
                    >
                      Projects
                    </p>
                  </p>
                  <p className="m-0">
                    <p
                      onClick={() => scrollToSection("reviews", 80)}
                      className="text-gray-200 hover:text-purple-400 cursor-pointer text-sm mb-1"
                    >
                      Testimonials
                    </p>
                  </p>
                  <p className="m-0">
                    <p
                      onClick={() => scrollToSection("contact", 100)}
                      className="text-gray-200 hover:text-purple-400 cursor-pointer text-sm mb-1"
                    >
                      Contact Us
                    </p>
                  </p>
                </div>
                <div className="mt-3 flex items-center md:items-start flex-col  w-full md:w-1/2 ">
                  <h6 className="text-uppercase mb-2 font-weight-bold">
                    Contact
                  </h6>
                  <p className="flex items-center justify-center lg:justify-start text-sm mb-[5px]">
                    <FiMapPin className="mr-2" /> New York, NY 10012, US
                  </p>
                  <a
                    href={`mailto:info@gmail.com`}
                    className="text-gray-200 hover:text-purple-400 flex items-center justify-center lg:justify-start text-sm mb-[5px]"
                  >
                    <FiMail className="mr-2" mail /> info@gmail.com
                  </a>
                  <a
                    href={`tel:1232222`}
                    className="text-gray-200 hover:text-purple-400 flex items-center justify-center lg:justify-start  text-sm mb-[5px]"
                  >
                    <FiPhone className="mr-2" /> + 01 234 567 88
                  </a>
                  <a
                    href={`tel:+0123456788`}
                    className="text-gray-200 hover:text-purple-400 flex items-center justify-center lg:justify-start  text-sm mb-[5px]"
                  >
                    <FiPhone className="mr-2" /> + 01 234 567 80
                  </a>
                </div>
              </div>
            </div>
          </section>
          <hr className="my-3" />
          <section className=" container p-3 pt-0">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left">
                <div className="p-3">© {new Date().getFullYear()}</div>
              </div>
              <div className="mt-3 md:mt-0">
                <Link
                  className="btn btn-outline-light btn-floating m-1 text-gray-200 hover:text-gray-950 "
                  to="/"
                  role="button"
                >
                  <AiFillGithub />
                </Link>
                <Link
                  className="btn btn-outline-light btn-floating m-1 text-gray-200 hover:text-gray-950"
                  to="/"
                  role="button"
                >
                  <AiOutlineTwitter />
                </Link>
                <Link
                  className="btn btn-outline-light btn-floating m-1 text-gray-200 hover:text-gray-950"
                  to="/"
                  role="button"
                >
                  <AiFillInstagram />
                </Link>
                <Link
                  className="btn btn-outline-light btn-floating m-1 text-gray-200 hover:text-gray-950"
                  to="/"
                  role="button"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
