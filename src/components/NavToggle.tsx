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
      <div className="bg-white hover:bg-gray-50 border-[1px] w-7 h-7 rounded-md">
        <div
          onClick={onToggle}
          className={`w-5 h-5 flex ml-[3px] bg-contain bg-no-repeat cursor-pointer ${
            isNavVisible ? "mt-2" : "mt-[7px]"
          }`}
          style={{ backgroundImage: isNavVisible ? downArrow : upArrow }}
        ></div>
      </div>
    </div>
  );
};

export default NavToggle;
