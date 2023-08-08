const feature = () => {
  return (
    <div className="p-1">
      <div className="flex">
        <object type="image/svg+xml" data="/icons/model.svg" width="32" className="inline" />
        <h2 className="inline px-2 font-bold text-3xl self-center ">Featured Models </h2>
      </div>
      <p className="py-3 ">
        A filtered list of all models on the site, to view the complete model list click 'explore al
        models'.
      </p>
      <button className="p-2 bg-blackBorder rounded-md">
        Explore all models
        <img className="inline px-2" src="/icons/next-ic.svg" />
      </button>
    </div>
  );
};

export default feature;
