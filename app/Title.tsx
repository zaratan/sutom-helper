import ResetButton from '@/components/ResetButton';
import React from 'react';

const Title = () => {
  return (
    <div className="border-b border-solid border-white text-4xl sm:text-6xl w-full flex justify-around p-2 lg:w-4/5">
      <span className="w-9" />
      SUTOM HELPER
      <ResetButton />
    </div>
  );
};

export default Title;
