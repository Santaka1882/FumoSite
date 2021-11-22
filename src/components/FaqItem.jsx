import React from "react";

const FaqItem = ({ question, children }) => (
  <details>
    <summary>
      {question}
    </summary>
    {children}
  </details>
)

export default FaqItem