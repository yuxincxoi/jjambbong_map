import { NavToggleProps } from "../interfaces/components/NavToggle.interface";

const NavToggle: React.FC<NavToggleProps> = ({ onToggle, isNavVisible }) => {
  const upArrow = "url('./img/upArrow.png')";
  const downArrow = "url('./img/downArrow.png')";

  return (
    <div
      className={`lg:hidden z-50 flex justify-center ${
        isNavVisible ? "" : "absolute bottom-24 left-1/2 -translate-x-1/2"
      }`}
    >
      <div
        onClick={onToggle}
        className="bg-white px-4 py-3 rounded-t-lg border-[1px] border-b-0 text-gray-700 hover:bg-gray-50 cursor-pointer"
        style={{ backgroundImage: isNavVisible ? downArrow : upArrow }}
      ></div>
    </div>
  );
};

export default NavToggle;
