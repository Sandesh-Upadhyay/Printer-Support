import React from "react";

interface PrinterSupportDashboardProps {
  brand: string;
  onClose: () => void;
}

const PrinterSupportDashboard: React.FC<PrinterSupportDashboardProps> = ({ brand, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative animate-fade-in">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <h2 className="text-2xl font-bold mb-4">{brand} Printer Support Dashboard</h2>
      <p className="mb-4">
        Welcome to the {brand} Printer Support Dashboard. Here you can find solutions for common issues, troubleshooting steps, and contact support.
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Printer Offline</li>
        <li>Not Printing</li>
        <li>Paper Jam</li>
        <li>Setup Issue</li>
        <li>Driver Problems</li>
        <li>Code Errors and Messages</li>
        <li>Job Stuck in Queue</li>
        <li>Not Connecting to Wifi</li>
        <li>Other Issues</li>
      </ul>
      <div className="mt-6">
        <a
          href="tel:+18884046710"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-blue-700 transition"
        >
          Call Toll-Free: +1-(888)-404-6710
        </a>
      </div>
    </div>
  </div>
);

export default PrinterSupportDashboard; 