import { useParams } from "react-router-dom";

const CategoryPageHeader = () => {
  const { category } = useParams();
  return (
    <>
      <div className="my-2">
        <h3 className="text-4xl font-semibold my-10">{category}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          repellat repellendus, minus alias unde reprehenderit!
        </p>
      </div>
    </>
  );
};

export default CategoryPageHeader;
