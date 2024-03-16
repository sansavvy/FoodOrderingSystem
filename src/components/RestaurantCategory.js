import MenuItemList from "./MenuItemList";

const RestaurantCategory = ({ menuCategory, showMenuItems, showIndex }) => {
  console.log(menuCategory);

  const handleClick = () => {
    showIndex();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 rounded-lg shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold font-sans">
            {menuCategory.title}({menuCategory?.itemCards?.length})
          </span>
          <span>🔽</span>
        </div>

        {/* Accordian Body */}
        {showMenuItems && <MenuItemList items={menuCategory.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
