import React, { memo } from "react";

interface Props {
  data: string;
}

const StreamDisplay: React.FC<Props> = ({ data }) => {
  return (
    <div className="mt-6 p-4 w-[70vw] lg:w-[45vw] min-h-64 bg-gray-100 rounded border border-gray-300 text-base text-gray-800">
      {data || ""}
    </div>
  );
};

export default memo(StreamDisplay);
