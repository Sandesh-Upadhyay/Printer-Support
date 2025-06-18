import React from 'react';
import { Printer, Zap, Camera, Building, Palette, Scan } from 'lucide-react';

const PrinterTypes = () => {
  const printerTypes = [
    {
      icon: <Zap className="text-blue-600" size={48} />,
      title: "Laser Printers",
      description: "A Laser Printer uses photocopier technology with laser beam drawing documents to selenium coated drum using electric charges. Perfect for high-volume printing with excellent quality.",
      features: ["High-speed printing", "Professional quality", "Cost-effective for volume", "Toner-based printing"],
      supportIssues: ["LaserJet 1020 Printer Offline", "Toner cartridge issues", "Print quality problems", "Network connectivity"]
    },
    {
      icon: <Printer className="text-green-600" size={48} />,
      title: "DeskJet Printers",
      description: "DeskJet Printers are capable of printing two pages in Black and White at 300 dpi resolution. Includes color and black & white printing capabilities.",
      features: ["Affordable printing", "Color & B&W options", "Compact design", "Home office friendly"],
      supportIssues: ["Deskjet 3520 Printer Setup", "Paper jam issues", "Print head cleaning", "Driver installation"]
    },
    {
      icon: <Building className="text-purple-600" size={48} />,
      title: "OfficeJet Printers",
      description: "OfficeJet Printers are from the line of Ink-Jet Printers designed for business paperwork purposes with multi-function capabilities.",
      features: ["Multi-function device", "Business-oriented", "Scan, copy, print", "Network ready"],
      supportIssues: ["OfficeJet 4650 Offline", "Wireless setup issues", "Scanner problems", "Fax configuration"]
    },
    {
      icon: <Camera className="text-red-600" size={48} />,
      title: "PhotoSmart Printers",
      description: "Photo-Smart printers are designed for light use with dye-based inks using liquid colorant to produce vivid colors for photo printing.",
      features: ["Photo-quality prints", "Vivid color output", "Dye-based inks", "Compact photo printer"],
      supportIssues: ["Photosmart 6525 Setup", "Photo paper issues", "Color calibration", "Print quality optimization"]
    },
    {
      icon: <Palette className="text-yellow-600" size={48} />,
      title: "Envy Printers",
      description: "These printers can copy, print, and scan photos and documents using a single device. Smart printing directly from smartphones and tablets.",
      features: ["All-in-one functionality", "Mobile printing", "Wireless connectivity", "Smart device support"],
      supportIssues: ["Envy 7640 Printer offline", "Envy 4520 setup", "Mobile printing issues", "Wireless configuration"]
    },
    {
      icon: <Scan className="text-indigo-600" size={48} />,
      title: "PSC Printers",
      description: "Print, Scan, Copy (PSC) printers offer comprehensive document handling capabilities for home and small office use.",
      features: ["Print, scan, copy", "Document handling", "Space-saving design", "User-friendly interface"],
      supportIssues: ["Printer offline Windows 10", "Scanner connectivity", "Copy quality issues", "Software installation"]
    }
  ];

  return (
    <section id="printers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Printer Types We Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our professional technicians provide comprehensive support for all major printer types. 
            Get professional assistance for setup, troubleshooting, and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {printerTypes.map((printer, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-center mb-6">
                {printer.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {printer.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                {printer.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {printer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Common Support Issues:</h4>
                <ul className="space-y-2">
                  {printer.supportIssues.map((issue, issueIndex) => (
                    <li key={issueIndex} className="flex items-center text-sm text-red-600">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0"></div>
                      {issue}
                    </li>
                  ))}
                </ul>
              </div>
              
              <a 
                href="tel:+18775933790"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors text-center block"
              >
                Get Support Now
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need Help with Your Printer?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Our professional technicians are ready to help you with any printer issue. 
            Get professional support for all printer brands and models.
          </p>
          <a 
            href="tel:+18775933790"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Call Now: +1 (877) 593-3790
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrinterTypes;