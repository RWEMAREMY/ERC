import React from 'react';
type ScrollButtonProps = {
    onClick: () => void;
  };

const BookmarkButton: React.FC<ScrollButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button
        className={`bg-[#FFFFFF] hover:bg-orange-600 text-[#DF4E10] hover:text-[#FFFFFF] py-[10px] px-[15px] sm:py-[12px] sm:px-[20px] rounded-full cursor-pointer transition-all duration=500 text-xs sm:text-sm`}
        onClick={onClick}
      >
        BOOK APPOINTMENT NOW
      </button>
    </div>
  );
}

export default BookmarkButton;
