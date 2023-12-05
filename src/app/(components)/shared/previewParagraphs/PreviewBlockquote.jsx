const PreviewBlockquote = ({ children }) => {
  return (
    <blockquote
      id="block-q-para"
      className="p-6 rounded border-l-4 border-l-orange bg-whiteShade dark:bg-lightBlack dark:text-white"
    >
      {children}
    </blockquote>
  );
};

export default PreviewBlockquote;
