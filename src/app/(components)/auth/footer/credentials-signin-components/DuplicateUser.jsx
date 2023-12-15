

const DuplicateUser = ({msg}) => {
  return (
    <div className="mt-6 text-red font-semibold text-sm">
      <p>{msg}</p>
      <p>Please try again</p>
    </div>
  );
}

export default DuplicateUser