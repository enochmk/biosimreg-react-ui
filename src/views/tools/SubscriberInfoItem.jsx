const SubsciberInfoItem = ({ title, value }) => {
  if (!value) return null;

  return (
    <div className="p-4 flex flex-row w-full">
      <dt className="flex-grow w-1/2 text-sm font-medium text-gray-500">
        {title}
      </dt>
      <dd className="flex-grow w-1/2 justify-start text-sm text-gray-900">
        {value}
      </dd>
    </div>
  );
};

export default SubsciberInfoItem;
