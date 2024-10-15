"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {
  const { ref } = useSectionInView(0.75, "Contact");

  return (
    <motion.section
        ref={ref}
        id="contact"
        // this styling is used to center the section and limit its width to 38rem on larger screens, and adjusts on smaller screens
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
        className='mt-10 flex flex-col'
        // this handles the form submission using Next.js server actions; returning the form data 
        action={async (formData) => {
            console.log("running on client");
            console.log(formData.get('senderEmail'));
            console.log(formData.get('message'));
            // to satisfy the async requirement, we need to return a promise whiule calling the sendEmail server function
            //extracts the data or error from the result of the sendEmail function
            const {data, error } = await sendEmail(formData);
            // if there is an error, alert the user
            if (error) {
                toast.error(error);
                return;
            } else {
                // if there is no error, alert the user that the email was sent successfully
                toast.success("Email sent successfully");
            }


        }}
      >
        < input 
            type='email' 
            // name attribute is used to identify the form data when it is submitted
            name='senderEmail'
            className='h-14 rounded-lg borderBlack' 
            placeholder='   youremail@example.com'
            required
            maxLength={500}
        /> 
        <textarea 
            className='h-52 my-3 rounded-lg borderBlack p-4' 
            // name attribute is used to identify the form data when it is submitted
            name='message'
            placeholder='Your message'
            required
            maxLength={5000}
        />
        <SubmitBtn />
      </form>
        
    </motion.section>
  )
}
