import MarkdownFileBox from "./markdown-file/MarkdownFileBox";

const MarkDownFileList = ({ allCurrentMarkdowns }) => {
  //
  return (
    <ul className="w-full mt-6 flex flex-col justify-start items-start gap-6">
      {allCurrentMarkdowns.map((item, index) => {
        return <MarkdownFileBox key={index} {...item} index={index} />;
      })}
    </ul>
  );
};

export default MarkDownFileList;


// Previous logic

  // const { data } = await getAllMarkdowns();
  // const currentMarkdowns = [...data, testDefaultData];
  // console.log(currentMarkdowns)
  //
  // const handleTestFetch = async () => {
  //   const res = await getAllMarkdowns()
  //   console.log(res)
  // }