"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView(0.75, "Contact");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData: FormData) => {
    console.log("running on client");
    console.log(formData.get("senderEmail"));
    console.log(formData.get("message"));

    // Call the sendEmail server function and handle result
    const { data, error } = await sendEmail(formData);

    // If there is an error, alert the user
    if (error) {
      toast.error(error);
      return;
    } else {
      // If no error, alert the user of success and clear the form
      toast.success("Email sent successfully");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ckmhouse.808@gmail.com">
          ckmhouse.808@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={handleSubmit}
      >
        <input
          type="email"
          name="senderEmail"
          className="h-14 rounded-lg borderBlack pl-4"
          placeholder="youremail@example.com"
          required
          maxLength={500}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}