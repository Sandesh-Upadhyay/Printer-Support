import React, { useState } from 'react';
import { CheckCircle, Phone, X } from 'lucide-react';

const issuesList = [
  'Printer Offline',
  'Printer Not Printing',
  'Printer Paper Jam',
  'Printer Setup Issue',
  'Printer Driver',
  'Printer Issue After Update',
  'Printer Code Errors and Messages',
  'Printer Support',
  'Printer not connecting to Wifi',
  'Printer Job Stuck in Queue',
  'Printer in error state',
  'Printer not responding',
  'General Printer Help',
];

const PrinterSupportSystem = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  const handleContact = (method: 'call' | 'email') => {
    if (method === 'call') {
      window.location.href = 'tel:+18775933790';
    } else {
      window.location.href = 'mailto:Contact@Geekfixprinter.online';
    }
  };

  const handleIssueClick = (issue: string) => {
    setSelectedIssue(issue);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-white py-8 px-2 sm:px-4 font-serif">
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-[#88956e] mb-8 text-center">Printer Support System</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {issuesList.map((issue, index) => (
            <button
              key={index}
              onClick={() => handleIssueClick(issue)}
              className="w-full flex items-center bg-gradient-to-r from-white via-blue-50 to-indigo-50 border border-blue-100 rounded-xl shadow hover:shadow-xl hover:scale-105 transition-all duration-300 py-4 px-4 mb-2 text-left gap-2"
            >
              <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
              <span className="text-gray-700 font-medium">{issue}</span>
            </button>
          ))}
        </div>

        {/* Modal for Contact Expert */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative animate-fade-in mx-2">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-700"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <X size={28} />
              </button>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact our professional team</h3>
                <p className="text-gray-700 mb-6">Our professionals will provide you a resolution for:</p>
                <div className="bg-blue-50 text-blue-700 rounded-lg px-4 py-2 mb-6 font-semibold text-base">
                  {selectedIssue}
                </div>
                <button
                  onClick={() => handleContact('call')}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <Phone size={24} className="text-yellow-300" />
                  Call Now: +1 (877) 593-3790
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrinterSupportSystem; 