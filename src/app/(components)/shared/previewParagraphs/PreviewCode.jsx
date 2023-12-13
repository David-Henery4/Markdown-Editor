const PreviewCode = ({ children }) => {
  return (
    <code className="w-full inline-block font-semibold text-sm leading-6 text-darkBlack dark:text-white">
      {children}
    </code>
  );
};

export default PreviewCode;
