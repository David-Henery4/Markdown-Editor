// import tempData from "../../../../data.json";
import MarkdownFileBox from "./markdown-file/MarkdownFileBox";
import getAllMarkdowns from "@/app/(lib)/getAllMarkdowns";
// import markdownList from "@/app/(models)/markdownListSchema";

// const getMarkdowns = async () => {
//   const allMarkdowns = await markdownList.find({});
// }

const testDefaultData = {
  id: "3",
  userId: "3",
  createdAt: "04-01-2022",
  name: "testing-default.md",
  content: "testing default",
};

const MarkDownFileList = async () => {
  console.log("test")
  const {data} = await getAllMarkdowns()
  const currentMarkdowns = [...data, testDefaultData]
  // console.log(currentMarkdowns)
  //
  // const handleTestFetch = async () => {
  //   const res = await getAllMarkdowns()
  //   console.log(res)
  // }
  //
  return (
    <ul className="w-full mt-6 flex flex-col justify-start items-start gap-6">
      {/* Might be able to make re-usable with "FileName" */}
      {currentMarkdowns.map((item, i) => {
        return (
          <MarkdownFileBox key={i} {...item} />
        );
      })}
    </ul>
  );
};

export default MarkDownFileList;
