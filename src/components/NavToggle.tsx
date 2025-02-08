import Button from "./Button";
import { NavToggleProps } from "../interfaces/components/NavToggle.interface";

const NavToggle: React.FC<NavToggleProps> = ({ onToggle }) => {
  return (
    <div className="lg:hidden z-50">
      <Button
        onClick={onToggle}
        buttonName=""
        className="bg-white px-4 py-3 rounded-t-lg border-[1px] border-b-0 text-gray-700 hover:bg-gray-50"
      />
    </div>
  );
};

export default NavToggle;
