const MovieDetails = ({ detailsData }) => {
  return (
    <section className=" flex gap-6">
      <img
        src={detailsData.list[0].vod_pic}
        alt="movie poster"
        className="w-[325px] h-[406px]"
      />
      <section className="w-full flex flex-col justify-between">
        <p>{detailsData.list[0].vod_name}</p>
        <div>
          <div className="w-full flex justify-between">
            <span>{detailsData.list[0].vod_sub}</span>
            <span>{detailsData.list[0].type_name}</span>
          </div>
          <div className="h-px bg-[#F88A60] w-full" />
        </div>

        <div className="w-full flex justify-between">
          <span>{detailsData.list[0].vod_remarks}</span>
          <span>{detailsData.list[0].vod_time}</span>
        </div>
        <div className="flex justify-end">{detailsData.list[0].vod_class}</div>
        <div className="w-full flex flex-col">
          <span>{detailsData.list[0].vod_actor}</span>
          <span>{detailsData.list[0].vod_director}</span>
          <span>{detailsData.list[0].vod_content}</span>
        </div>
      </section>
    </section>
  );
};

export default MovieDetails;
