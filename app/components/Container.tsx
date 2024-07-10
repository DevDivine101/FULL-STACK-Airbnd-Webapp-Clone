"use client";

interface navProps {
  children: React.ReactNode;
}

const Container: React.FC<navProps> = ({ children }) => {
  return (
    <div
      className="
    max-w-[2520px]
    mx-auto
    xl:px-10
    md:px-10
    sm:px-2
    px-4 bg-[]"
    >
      {children}
    </div>
  );
};

export default Container;
