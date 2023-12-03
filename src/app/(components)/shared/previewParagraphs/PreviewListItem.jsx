const PreviewListItem = ({ children }) => {
  return (
    <li className="font-robotoSlab font-normal text-sm leading-6 marker:text-orange">
      {children}
    </li>
  );
};

export default PreviewListItem;
