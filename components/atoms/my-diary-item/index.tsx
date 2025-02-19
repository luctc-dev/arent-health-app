import React from "react";

const MyDiaryItem = () => {
  return (
    <div className="p-4 pb-[27px] border-2 border-solid border-gray-400">
      <div className="font-Inter text-[18px] leading-[22px] tracking-[0.09px] font-normal text-dark-500">
        2021.05.21
        <br />
        23:25
      </div>
      <p className="mt-2 text-dark-500">
        私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
      </p>
    </div>
  );
};

export default MyDiaryItem;
