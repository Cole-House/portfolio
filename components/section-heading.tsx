import React from 'react'

interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({
    children }: SectionHeadingProps) {
  return (
    // We are passing the "children" prop into the react component we made to avoid hard-coding
    <h2 className='text-3xl font-medium capitalize mb-8'> {children} </h2>
  )
}
