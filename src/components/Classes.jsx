//src/components/ActionMovie.jsx
import ClassSection from "./ClassSection";

const Classes = ({
  data,
  actionData,
  comedyData,
  romanceData,
  scienceData,
  thrillerData,
  animeData,
  varietyShowData,
}) => {
  const classIndexes = [
    { index: 6, clsData: actionData },
    { index: 7, clsData: comedyData },
    { index: 8, clsData: romanceData },
    { index: 9, clsData: scienceData },
    { index: 10, clsData: thrillerData },
    { index: 32, clsData: animeData },
    { index: 24, clsData: varietyShowData },
  ];
  return (
    <section className="flex flex-col gap-4 bg-gradient-to-br from-[#2E3341] from-0% via-[#40475B] via-75% to-[#7683A7] to-100%  ">
      {classIndexes.map((item) => (
        <ClassSection
          key={item.index}
          data={data}
          index={item.index - 1}
          clsData={item.clsData}
        />
      ))}
      {/* {classData.map((cls) => (
        <h2 className="text-xl font-semibold">{cls.type_name}</h2>
      ))} */}
    </section>
  );
};

export default Classes;
