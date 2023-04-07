import { createElement, useRef } from "react";
import { content } from "../Content";
// import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import Button from "../constants/button";

const ContactUs = ({ language }) => {
    const { contact } = content;
    const form = useRef();
  
    // const sendEmail = (e) => {
    //   e.preventDefault();
  
    //   emailjs
    //     .sendForm(
    //     'service_i5zm9ie', 'template_5ri450n', form.current, '0upLpghs1EIqkkIGF'
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         form.current.reset();
    //         toast.success("Email send Successfully");
    //       },
    //       (error) => {
    //         console.log(error.text);
    //         toast.error(error.text);
    //       }
    //     );
    // };

  return (
    <section className="bg-dark_primary text-white text-center" id="contact">
      <Toaster />
      <div className="py-14 w-[100%]">
        <h2 className="title !text-white" data-aos="fade-down">
          {language === "EN" ? contact.title : contact.titleSr}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {language === "EN" ? contact.subtitle : contact.subtitleSr}
        </h4>
        <br />
        <div className="w-[80%] mx-auto flex gap-10 flex-row mt-10">
          <form
            ref={form}
            // onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5 text-black"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Name..."
              required
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email..."
              required
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <Button uniqueStyle={`bg-blue-600 hover:bg-gray-100 text-white hover:text-[#7B68EE] border-blue-400 hover:border-blue-700`} buttonText={`Submit`} />
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-Poppins" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs