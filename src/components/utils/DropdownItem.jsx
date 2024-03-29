import React from "react";

const DropdownItem = ({ title, children }) => (
  <details className='mb-1 2xl:text-2xl 2xl:mb-4 cursor-pointer'>
    <summary className='text-lg font-semibold marker:text-red-500 md:text-xl 2xl:text-2xl mb-2'>
      {title}
    </summary>
    {children}
  </details>
)

export default DropdownItem