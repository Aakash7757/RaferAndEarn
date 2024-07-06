import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Programs</h2>
            <ul className="space-y-2">
              <li>Data Science & AI</li>
              <li>Product Management</li>
              <li>Business Analytics</li>
              <li>Digital Transformation</li>
              <li>Business Management</li>
              <li>Project Management</li>
              <li>Strategy & Leadership</li>
              <li>Senior Management</li>
              <li>Fintech</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li>Email: admission@accredian.com</li>
              <li>Phone: +91 9625913067</li>
              <li>Location: Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" className="text-white">Facebook</a>
              <a href="https://www.linkedin.com/" className="text-white">LinkedIn</a>
              <a href="https://twitter.com/" className="text-white">Twitter</a>
              <a href="https://www.instagram.com/" className="text-white">Instagram</a>
              <a href="https://www.youtube.com/" className="text-white">YouTube</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          © 2024 Accredian, A Brand of FullStack Education Pvt Ltd. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
