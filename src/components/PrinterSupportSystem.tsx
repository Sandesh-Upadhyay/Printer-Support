import React, { useState } from 'react';
import { CheckCircle, Phone, X } from 'lucide-react';

type Brand = 'HP' | 'Canon' | 'Epson' | 'Brother' | 'Samsung' | 'Xerox' | 'Ricoh' | 'Konica Minolta' | 'Tally' | 'Kyocera' | 'Panasonic' | 'Fujitsu';

const brands: Brand[][] = [
  ['HP', 'Tally'],
  ['Canon', 'Kyocera'],
  ['Epson', 'Panasonic'],
  ['Brother', 'Samsung'],
  ['Xerox', 'Fujitsu'],
  ['Ricoh', 'Konica Minolta'],
];

const issuesMap: Record<Brand, string[]> = {
  HP: [
    'HP Printer Offline',
    'HP Printer Not Printing',
    'HP Printer Paper Jam',
    'HP Printer Setup Issue',
    'HP Printer Driver',
    'HP Printer Issue After Windows Update',
    'HP Printer Code Errors and Messages',
    'HP Printer Troubleshooting',
    'HP Printer not connecting to Wifi',
    'HP Printer Job Stuck in Queue',
    'HP Printer in error state',
    'HP Printer not responding',
  ],
  Canon: [
    'Canon Printer Offline',
    'Canon Printer Not Printing',
    'Canon Printer Paper Jam',
    'Canon Printer Setup Issue',
    'Canon Printer Driver',
    'Canon Printer Issue After Windows Update',
    'Canon Printer Code Errors and Messages',
    'Canon Printer Troubleshooting',
    'Canon Printer not connecting to Wifi',
    'Canon Printer Job Stuck in Queue',
    'Canon Printer in error state',
    'Canon Printer Others Issues',
  ],
  Epson: [
    'Epson Printer Offline',
    'Epson Printer Not Printing',
    'Epson Printer Paper Jam',
    'Epson Printer Setup Issue',
    'Epson Printer Driver',
    'Epson Printer Issue After Windows Update',
    'Epson Printer Code Errors and Messages',
    'Epson Printer Troubleshooting',
    'Epson Printer not connecting to Wifi',
    'Epson Printer Job Stuck in Queue',
    'Epson Printer in error state',
    'Epson Printer Others Issues',
  ],
  Brother: [
    'Brother Printer Offline',
    'Brother Printer Not Printing',
    'Brother Printer Paper Jam',
    'Brother Printer Setup Issue',
    'Brother Printer Driver',
    'Brother Printer Issue After Windows Update',
    'Brother Printer Code Errors and Messages',
    'Brother Printer Troubleshooting',
    'Brother Printer not connecting to Wifi',
    'Brother Printer Job Stuck in Queue',
    'Brother Printer in error state',
    'Brother Printer Others Issues',
  ],
  Samsung: [
    'Samsung Printer Offline',
    'Samsung Printer Not Printing',
    'Samsung Printer Paper Jam',
    'Samsung Printer Setup Issue',
    'Samsung Printer Driver',
    'Samsung Printer Issue After Windows Update',
    'Samsung Printer Code Errors and Messages',
    'Samsung Printer Troubleshooting',
    'Samsung Printer not connecting to Wifi',
    'Samsung Printer Job Stuck in Queue',
    'Samsung Printer in error state',
    'Samsung Printer Others Issues',
  ],
  Xerox: [
    'Xerox Printer Offline',
    'Xerox Printer Not Printing',
    'Xerox Printer Paper Jam',
    'Xerox Printer Setup Issue',
    'Xerox Printer Driver',
    'Xerox Printer Issue After Windows Update',
    'Xerox Printer Code Errors and Messages',
    'Xerox Printer Troubleshooting',
    'Xerox Printer not connecting to Wifi',
    'Xerox Printer Job Stuck in Queue',
    'Xerox Printer in error state',
    'Xerox Printer Others Issues',
  ],
  Ricoh: [
    'Ricoh Printer Offline',
    'Ricoh Printer Not Printing',
    'Ricoh Printer Paper Jam',
    'Ricoh Printer Setup Issue',
    'Ricoh Printer Driver',
    'Ricoh Printer Issue After Windows Update',
    'Ricoh Printer Code Errors and Messages',
    'Ricoh Printer Troubleshooting',
    'Ricoh Printer not connecting to Wifi',
    'Ricoh Printer Job Stuck in Queue',
    'Ricoh Printer in error state',
    'Ricoh Printer Others Issues',
  ],
  'Konica Minolta': [
    'Konica Minolta Printer Offline',
    'Konica Minolta Printer Not Printing',
    'Konica Minolta Printer Paper Jam',
    'Konica Minolta Printer Setup Issue',
    'Konica Minolta Printer Driver',
    'Konica Minolta Printer Issue After Windows Update',
    'Konica Minolta Printer Code Errors and Messages',
    'Konica Minolta Printer Troubleshooting',
    'Konica Minolta Printer not connecting to Wifi',
    'Konica Minolta Printer Job Stuck in Queue',
    'Konica Minolta Printer in error state',
    'Konica Minolta Printer Others Issues',
  ],
  Tally: [
    'Tally Printer Offline',
    'Tally Printer Not Printing',
    'Tally Printer Paper Jam',
    'Tally Printer Setup Issue',
    'Tally Printer Driver',
    'Tally Printer Issue After Windows Update',
    'Tally Printer Code Errors and Messages',
    'Tally Printer Troubleshooting',
    'Tally Printer not connecting to Wifi',
    'Tally Printer Job Stuck in Queue',
    'Tally Printer in error state',
    'Tally Printer Others Issues',
  ],
  Kyocera: [
    'Kyocera Printer Offline',
    'Kyocera Printer Not Printing',
    'Kyocera Printer Paper Jam',
    'Kyocera Printer Setup Issue',
    'Kyocera Printer Driver',
    'Kyocera Printer Issue After Windows Update',
    'Kyocera Printer Code Errors and Messages',
    'Kyocera Printer Troubleshooting',
    'Kyocera Printer not connecting to Wifi',
    'Kyocera Printer Job Stuck in Queue',
    'Kyocera Printer in error state',
    'Kyocera Printer Others Issues',
  ],
  Panasonic: [
    'Panasonic Printer Offline',
    'Panasonic Printer Not Printing',
    'Panasonic Printer Paper Jam',
    'Panasonic Printer Setup Issue',
    'Panasonic Printer Driver',
    'Panasonic Printer Issue After Windows Update',
    'Panasonic Printer Code Errors and Messages',
    'Panasonic Printer Troubleshooting',
    'Panasonic Printer not connecting to Wifi',
    'Panasonic Printer Job Stuck in Queue',
    'Panasonic Printer in error state',
    'Panasonic Printer Others Issues',
  ],
  Fujitsu: [
    'Fujitsu Printer Offline',
    'Fujitsu Printer Not Printing',
    'Fujitsu Printer Paper Jam',
    'Fujitsu Printer Setup Issue',
    'Fujitsu Printer Driver',
    'Fujitsu Printer Issue After Windows Update',
    'Fujitsu Printer Code Errors and Messages',
    'Fujitsu Printer Troubleshooting',
    'Fujitsu Printer not connecting to Wifi',
    'Fujitsu Printer Job Stuck in Queue',
    'Fujitsu Printer in error state',
    'Fujitsu Printer Others Issues',
  ],
};

const PrinterSupportSystem = () => {
  const [selectedBrand, setSelectedBrand] = useState<Brand>('HP');
  const [showModal, setShowModal] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);
  const issues = issuesMap[selectedBrand];
  const heading = `${selectedBrand.toUpperCase()} PRINTER`;

  const handleContact = (method: 'call' | 'email') => {
    if (method === 'call') {
      window.location.href = 'tel:+1-(888) 404-6710';
    } else {
      window.location.href = 'mailto:info@allitexpert.com';
    }
  };

  const handleIssueClick = (issue: string) => {
    setSelectedIssue(issue);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-white py-8 px-2 sm:px-4 font-serif">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-[#88956e] mb-8 text-center">{heading}</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Brand List */}
          <div className="lg:w-1/3">
            <div className="grid grid-cols-2 divide-x border border-gray-200 rounded-lg overflow-hidden shadow-lg">
              {brands.map((row, i) => (
                <React.Fragment key={i}>
                  {row.map((brand, j) => (
                    <button
                      key={`${i}-${j}`}
                      onClick={() => setSelectedBrand(brand)}
                      className={`
                        p-6 text-center text-lg transition-all duration-300 font-serif
                        ${brand === selectedBrand 
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-inner' 
                          : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white'
                        }
                        border-b border-gray-200
                        w-full
                      `}
                    >
                      {brand}
                    </button>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Issues Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {issues.map((issue, index) => (
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
          </div>
        </div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact our expert</h3>
              <p className="text-gray-700 mb-6">Our experts will provide you a resolution for:</p>
              <div className="bg-blue-50 text-blue-700 rounded-lg px-4 py-2 mb-6 font-semibold text-base">
                {selectedIssue}
              </div>
              <button
                onClick={() => handleContact('call')}
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:scale-105 transition-all duration-300"
              >
                <Phone size={24} className="text-yellow-300" />
                Call Now: +1-(888) 404-6710
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrinterSupportSystem; 