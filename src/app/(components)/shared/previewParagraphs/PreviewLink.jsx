

const PreviewLink = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="italic text-orange hover:text-lightOrange"
    >
      {children}
    </a>
  );
};

export default PreviewLink