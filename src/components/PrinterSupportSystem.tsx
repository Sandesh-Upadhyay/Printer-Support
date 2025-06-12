import React, { useState } from 'react';

const brands = [
  ['HP', 'Tally'],
  ['Canon', 'Kyocera'],
  ['Epson', 'Panasonic'],
  ['Brother', 'Samsung'],
  ['Xerox', 'Fujitsu'],
  ['Ricoh', 'Konica Minolta'],
];

const issuesMap = {
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
  const [selectedBrand, setSelectedBrand] = useState('HP');
  const issues = issuesMap[selectedBrand] || [];
  const heading = `${selectedBrand.toUpperCase()} PRINTER`;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-2">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-6xl flex flex-col md:flex-row overflow-hidden">
        {/* Brand List */}
        <div className="w-full md:w-1/3 border-r border-gray-200 p-6 bg-gray-100">
          <div className="grid grid-cols-2 gap-0">
            {brands.map((row, i) => (
              <React.Fragment key={i}>
                <div
                  className={`py-4 px-2 text-center text-lg font-semibold cursor-pointer transition-colors ${
                    row[0] === selectedBrand
                      ? 'bg-green-700 text-white'
                      : i === 0
                      ? 'bg-green-200 text-green-900 rounded-tl-xl'
                      : 'text-gray-900'
                  }`}
                  onClick={() => setSelectedBrand(row[0])}
                >
                  {row[0]}
                </div>
                <div
                  className={`py-4 px-2 text-center text-lg font-semibold cursor-pointer transition-colors ${
                    row[1] === selectedBrand
                      ? 'bg-green-700 text-white'
                      : i === 0
                      ? 'rounded-tr-xl'
                      : 'text-gray-900'
                  }`}
                  onClick={() => setSelectedBrand(row[1])}
                >
                  {row[1]}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Printer Issues */}
        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">{heading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {issues.map((issue, idx) => (
              <div key={idx} className="bg-white border border-gray-300 rounded-xl p-6 text-lg font-medium text-gray-900 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                {issue}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinterSupportSystem; 