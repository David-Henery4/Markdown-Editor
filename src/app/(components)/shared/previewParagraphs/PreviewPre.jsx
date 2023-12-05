

const PreviewPre = ({children}) => {
  return (
    <pre className="p-6 my-5 overflow-x-auto rounded-[4px] bg-whiteShade dark:bg-lightBlack">
      {children}
    </pre>
  );
}

export default PreviewPre