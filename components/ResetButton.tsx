import Link from 'next/link';
import React from 'react';

import { ArrowPathIcon } from '@heroicons/react/20/solid';

const ResetButton = () => {
  return (
    <Link href="/" className="text-lg flex justify-center items-center">
      <ArrowPathIcon className="h-8 w-8 text-sutom-lightGray hover:text-gray-300 transition-colors" />
    </Link>
  );
};

export default ResetButton;
