import { DropdownItemProps } from "../../../types";

const DropdownItem: React.FC<DropdownItemProps> = ({
    id,
    title,
    content,
    isOpen,
    toggleDropdown,
}) => (
        <div>
        <button
            className="w-full flex justify-between items-center py-4 text-left focus:outline-none bg-transparent"
            onClick={() => toggleDropdown(id)}
        >
            <h4 className="text-lg font-medium text-[#7E28DF]">{title}</h4>
            <img
            src="/dropdown.svg"
            alt="Dropdown Icon"
            className={`w-10 h-10 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
            }`}
            />
        </button>
        {isOpen && (
            <div className="pl-4 pr-2 pb-4 text-gray-300">
            {content}
            </div>
        )}
        {/* Separator */}
        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#B78CFF] to-transparent"></div>
        </div>
);

export default DropdownItem;