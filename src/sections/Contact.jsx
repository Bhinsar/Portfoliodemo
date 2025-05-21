import React, { useState } from "react";
import TitleHeader from "../Components/TitleHeader/TitleHeader";
import ContactExperience from "../Components/ContactExperience/ContactExperience";

const Contact = () => {
  const [Constants, setConstants] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConstants((prevConstants) => ({
      ...prevConstants,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="flex-center section-padding mb-10">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={"Get In Touch With Me"}
          sub={"Contact Information"}
        />

        <div className="mt-16 grid-12-cols">
          {/* Contact Form */}
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
              <div className="form-group">
                <label
                  htmlFor="name"
                  className="text-white-100 font-medium mb-2 block"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field"
                  placeholder="John Doe"
                  required
                  value={Constants.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="email"
                  className="text-white-100 font-medium mb-2 block"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                  placeholder="john@example.com"
                  required
                  value={Constants.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="message"
                  className="text-white-100 font-medium mb-2 block"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="input-field"
                  placeholder="Write your message here..."
                  required
                  value={Constants.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="w-full text-black bg-white-50 p-5 font-semibold rounded-2xl">
                Send Message
              </button>
            </form>
            </div>
          </div>

          {/* 3D Experience */}
          <div className="xl:col-span-7 min-h-96">
            <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">

            <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
