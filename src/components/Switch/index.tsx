import { FC, ReactNode } from "react";

type SwitchProps = {
  checked: boolean;
  onClick: () => void;
};

const Switch: FC<SwitchProps> = ({ checked = false, onClick }): ReactNode => {
  return (
    <div
      onClick={onClick}
      className={`
      ${checked ? "bg-green-box" : "bg-gray-miss-box"}
        w-14 h-7 flex items-center rounded-full px-1 cursor-pointer
      `}
    >
      <div
        className={`
        ${checked ? "translate-x-7" : "translate-x-0"}
        bg-white-box-letter duration-400 w-5 h-5 rounded-full shadow-md transform transition-transform
      `}
      />
    </div>
  );
};

export default Switch;
