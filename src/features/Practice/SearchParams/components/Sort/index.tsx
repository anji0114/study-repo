import React, { FC } from "react";

type TSortProps = {
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
};

export const Sort: FC<TSortProps> = ({ value, onChange, onClick }) => {
  return (
    <div className="flex max-w-[600px] shadow-sm text-sm border border-gray-200 rounded overflow-hidden">
      <input
        className="px-3 flex-1 outline-none"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="bg-gray-500 text-white px-5 py-2" onClick={onClick}>
        検索
      </button>
    </div>
  );
};
