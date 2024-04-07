/* eslint-disable react/prop-types */
const NoItem = ({ items }) => {
  return (
    items.length == 0 && <span className="text-light">Done for the day</span>
  );
};

export default NoItem;
