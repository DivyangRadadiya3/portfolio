import React, { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="flex flex-col space-y-6 justify-center py-4 border-t border-gray-200 bg-white dark:bg-gray-900">
      <div className="flex justify-evenly flex-wrap gap-6 text-gray-500 font-medium">
        <h4 className="text-xl font-medium text-center leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white">
          D_Code
        </h4>
        <div className="flex justify-center space-x-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
              alt="Facebook Icon"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
              alt="LinkedIn Icon"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/instagram-new.png"
              alt="Instagram Icon"
            />
          </a>
          <a
            href="https://messenger.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Messenger"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"
              alt="Messenger Icon"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <img
              src="https://img.icons8.com/fluent/30/000000/twitter.png"
              alt="Twitter Icon"
            />
          </a>
        </div>
      </div>

      <p className="text-center text-gray-700 font-medium">
        &copy; {new Date().getFullYear()} D_Code. All rights reserved.
      </p>
    </footer>
  );
});

export default Footer;