import React from "react";

interface ButtonProps {
  className?: string;
  id?: string;
  text: string;
  onClick?: () => void;
}

const Button = ({
  className = "",
  id,
  text,
  onClick,
}: ButtonProps) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();

    // Run custom function if provided
    if (onClick) {
      onClick();
      return;
    }

    // Default smooth scroll
    if (id) {
      const target = document.getElementById(id);

      if (target) {
        const offset = window.innerHeight * 0.15;

        const top =
          target.getBoundingClientRect().top +
          window.scrollY -
          offset;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className={`${className} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />

        <p className="text">{text}</p>

        <div className="arrow-wrapper">
          <img
            src="/images/arrow-down.svg"
            alt="arrow"
          />
        </div>
      </div>
    </a>
  );
};

export default Button;