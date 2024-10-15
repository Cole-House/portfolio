import React from 'react'
//ignore this error, it is a bug in the current version of react-dom
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
    // the future of forms where we have server actions and pending status with useFormStatus hook
    const { pending } = useFormStatus();
  return (
    <button type='submit' className='flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all group-hover:translate-x-1 group-hover:translate-y-1 focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65"'
    disabled={pending}
    > {
        pending ? (<div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>) : (
            <>
             Submit {" "}
             <FaPaperPlane className='text-xs opacity-70 transition-all'/> {" "}
            </>
        )
    }
    </button>
    )
}
