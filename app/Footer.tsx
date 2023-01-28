import Link from 'next/link';
import React from 'react';

const Footer = () => (
  <footer className="text-center text-white mt-6">
    <span className="py-6 pl-6 sm:pl-0 sm:pb-3 sm:pt-2 flex justify-center items-start sm:items-center flex-col sm:flex-row">
      <span className="sm:pr-1">
        <span>
          Made with
          <span
            className="transition-colors hover:text-sutom-red duration-5000 ease-in-out hover:duration-200 mx-1"
            style={{ cursor: 'grab' }}
          >
            ♥
          </span>
          by
        </span>
        <a
          className="pl-1 text-sutom-blue hover:text-sutom-yellow"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://twitter.com/zaratan"
        >
          @zaratan
        </a>
        .
      </span>
      <span className="sm:pr-1">
        <a
          className="text-sutom-blue hover:text-sutom-yellow"
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="https://ko-fi.com/zaratan"
        >
          Buy me a tea
        </a>
        .
      </span>
    </span>
  </footer>
);

export default Footer;
