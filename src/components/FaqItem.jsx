import React from "react";

const FaqItem = ({ question, children }) => (
  <details className='mb-1'>
    <summary className='text-lg font-semibold marker:text-red-500'>
      {question}
    </summary>
    {children}
  </details>
)

export default FaqItem