"use client"
const HomeTabbar = () => {
  return (
    <div>
      <h2>Items</h2>
    </div>
    // <div className="flex items-center flex-wrap gap-5 justify-between overflow-hidden">
    //   <div className="flex items-center gap-1.5 text-sm font-semibold">
    //     <div className="flex items-center gap-1.5 md:gap-3 overflow-hidden">
    //       {productType?.map((item) => (
    //         <button
    //           onClick={() => onTabSelect(item?.title)}
    //           key={item?.title}
    //           className={`overflow-hidden border border-shop_light_green/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white hoverEffect ${selectedTab === item?.title ? "bg-shop_light_green text-white border-shop_light_green" : "bg-shop_light_green/10"}`}
    //         >
    //           {item?.title}
    //         </button>
    //       ))}
    //     </div>
    //   </div>
    //   <Link
    //     href={"/shop"}
    //     className="border border-darkColor px-4 py-1 rounded-full hover:bg-shop_light_green hover:text-white hover:border-shop_light_green hoverEffect"
    //   >
    //     See all
    //   </Link>
    // </div>
  );
};

export default HomeTabbar;
