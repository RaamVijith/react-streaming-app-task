import React, { memo } from "react";

interface Props {
  onStartTextStream: () => void;
  onStartCharsStream: () => void;
  onStopStream: () => void;
}

const StreamControls: React.FC<Props> = ({
  onStartTextStream,
  onStartCharsStream,
  onStopStream,
}) => {
  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={onStartTextStream}
        className="px-6 py-2 bg-[#4caf50] font-semibold text-white  rounded hover:bg-green-600 transition"
      >
        Stream Words
      </button>
      <button
        onClick={onStartCharsStream}
        className="px-6 py-2 bg-[#4caf50] text-white font-semibold rounded hover:bg-green-600 transition"
      >
        Stream Characters
      </button>
      <button
        onClick={onStopStream}
        className="px-6 py-2 bg-[#4caf50] text-white font-semibold rounded hover:bg-green-600 transition"
      >
        Stop 
      </button>
    </div>
  );
};

export default memo(StreamControls);
