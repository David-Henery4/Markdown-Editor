// import tempData from "../../../../data.json";
import MarkdownFileBox from "./markdown-file/MarkdownFileBox";
// import getAllMarkdowns from "@/app/(lib)/getAllMarkdowns";
// import markdownList from "@/app/(models)/markdownListSchema";


// Temp will use: "welcome.md"
// and remove delete icon when this is active markdown
// const testDefaultData = {
//   id: "3",
//   userId: "3",
//   createdAt: "04-01-2022",
//   name: "testing-default.md",
//   content: "testing default",
// };

const MarkDownFileList = ({ allCurrentMarkdowns }) => {
  // console.log("test")
  // console.log("MarkDownFileList", allCurrentMarkdowns);
  //
  return (
    <ul className="w-full mt-6 flex flex-col justify-start items-start gap-6">
      {/* Might be able to make re-usable with "FileName" */}
      {allCurrentMarkdowns.map((item, i) => {
        // console.log("item", item)
        return <MarkdownFileBox key={i} {...item} />;
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