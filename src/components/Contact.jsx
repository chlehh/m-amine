import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const CONTACT_EMAIL = "aanzour23@gmail.com";

const cvs = [
  { label: "CV (FR)", file: "CV_Mohamed-Amine_Aanzour_FR.pdf" },
  { label: "CV (EN)", file: "CV_Mohamed-Amine_Aanzour_EN.pdf" },
];

const DownloadIcon = () => (
  <svg viewBox='0 0 24 24' className='w-4 h-4' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
    <path d='M12 4v11' />
    <path d='m7 10 5 5 5-5' />
    <path d='M5 20h14' />
  </svg>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    // Without EmailJS keys in the build, fall back to the visitor's mail app.
    if (!serviceId || !templateId || !publicKey) {
      const subject = encodeURIComponent(`Portfolio - message de ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n${form.name} (${form.email})`);
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }

    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "M-Amine",
          from_email: form.email,
          to_email: CONTACT_EMAIL,
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Merci ! Je te réponds dès que possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Oups, l'envoi a échoué. Tu peux m'écrire directement à " + CONTACT_EMAIL);
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-6 sm:p-8 rounded-2xl max-w-[500px] w-full'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Ton Nom</span>
            <input
              type='text'
              name='name'
              required
              value={form.name}
              onChange={handleChange}
              placeholder='Comment tu t’appelles ?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915EFF]/60'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Ton email</span>
            <input
              type='email'
              name='email'
              required
              value={form.email}
              onChange={handleChange}
              placeholder='ton.adresse@email.com'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915EFF]/60'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'> Message</span>
            <textarea
              rows={7}
              name='message'
              required
              value={form.message}
              onChange={handleChange}
              placeholder='Ton message…'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-[#915EFF]/60'
            />
          </label>

          <div className='flex flex-col gap-3'>
            <div className='flex flex-wrap gap-3'>
              <button
                type='submit'
                className='bg-[#915EFF] hover:bg-[#7d48f5] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary transition-colors'
              >
                {loading ? "Envoi..." : "Envoyer"}
              </button>

              <a
                href='https://www.linkedin.com/in/mohamed-amine-aanzour-43a6b52ab/'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-tertiary ring-1 ring-white/10 hover:ring-white/30 py-3 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex items-center justify-center transition-shadow'
              >
                LinkedIn
              </a>
            </div>

            <div className='flex flex-wrap gap-3'>
              {cvs.map((cv) => (
                <a
                  key={cv.file}
                  href={`${import.meta.env.BASE_URL}${cv.file}`}
                  download={cv.file}
                  className='bg-tertiary ring-1 ring-white/10 hover:ring-[#915EFF] py-3 px-6 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary flex items-center justify-center gap-2 transition-shadow'
                >
                  <DownloadIcon />
                  {cv.label}
                </a>
              ))}
            </div>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
