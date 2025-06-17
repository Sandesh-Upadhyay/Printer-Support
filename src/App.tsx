import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PrinterTypes from './components/PrinterTypes';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrinterSupportSystem from './components/PrinterSupportSystem';
import { Phone, Printer } from 'lucide-react';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

const PrinterSetupPage = () => (
  <div className="max-w-3xl mx-auto py-12 px-4 text-gray-900 dark:text-gray-100">
    <h1 className="text-3xl font-bold mb-6 text-blue-800 dark:text-blue-300">Professional Help</h1>
    <h2 className="text-2xl font-semibold mb-4">123.hp.com/setup - HP Smart: 123.hp.com Easy Setup & Install HP Printers</h2>
    <p className="mb-4">Our technicians will diagnose your printer errors and troubleshoot it and restore your PC to its original state. Chat with Professional to get professional Solutions. <a href="https://123.hp.com/setup" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">123.hp.com/setup</a></p>
    <ul className="list-disc pl-6 mb-4">
      <li>123.hp.com/setup help</li>
      <li>123 hp com setup</li>
      <li>HP Printer Installation & Setup</li>
    </ul>
    <p className="mb-4">The HP LaserJet was the first desktop laser printer in the world. Canon now provides both mechanisms and cartridges for all HP laser printers as of 2016.</p>
    <p className="mb-4">The Hewlett-Packard Company, or HP, was an American multinational information technology company headquartered in Palo Alto, California, that developed and provided a wide range of hardware components, software. HP was divided into two companies in late 2015, with Hewlett-Packard Enterprise taking over the enterprise hardware, software, and services businesses and its namesake firm keeping the PC and printer divisions. Microsoft and the "new" HP both prospered as a result of their new business methods.</p>
    <h3 className="text-xl font-semibold mt-8 mb-2">123 HP Printer Setup Unboxing</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Remove the 123 HP Setup Printer from the shipping box and set it on a level, solid surface. Remove the packing materials from it.</li>
      <li>The user manual, power cord, USB cable, CD-installation driver, and ink cartridges are all included in the box.</li>
      <li>Remove all tapes and packaging materials from the gadget. The printer's parts are packed tightly to prevent them from shifting during shipping.</li>
      <li>Set away the delivery box as well as other recyclable packaging materials.</li>
    </ul>
    <h3 className="text-xl font-semibold mt-8 mb-2">Connect the printer's power cord at 123.hp.com.</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Connect the tiny end of the power cable to the rear of the HP printer and the other end to the wall electrical socket.</li>
      <li>Make that the power line is connected directly to the wall socket, without the use of a voltage stabiliser or an extension cord.</li>
      <li>The gadget will turn on by itself. From your printer's control panel, enter the relevant information, such as language or interface, location, date, and time zone.</li>
    </ul>
    <h3 className="text-xl font-semibold mt-8 mb-2">Loading HP Printer Paper</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>123 hp com setup printer removes the input and output trays. Remove any tapes or packaging items from the area.</li>
      <li>Unlock the tapes on paper width and longitudinal markings by opening the entering tray.</li>
      <li>Extend the sheet of paper to its full length. Load up the input tray with the fresh plain white paper bundle.</li>
      <li>Drag the marks over the sheets to get them snug, but not too close together. Close the paper tray when you're finished.</li>
    </ul>
    <h3 className="text-xl font-semibold mt-8 mb-2">How to replace the ink cartridge in an HP printer</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Dual ink cartridges are used in the 123.hp.com/Envy printers. Cyan, Magenta, and Yellow make up this three-color black cartridge.</li>
      <li>The user handbook, power cord, USB cable, CD driver, and ink cartridges are all included in the packaging.</li>
      <li>Remove the protective tape from behind the ink cartridge that protects the contact points and print-head. Place the tin cartridges in their slots and secure the cartridge latch in the closed position.</li>
    </ul>
    <h3 className="text-xl font-semibold mt-8 mb-2">Align the tin cartridges for the 123 hp com Printer.</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Align ink cartridges to avoid printing incorrect papers.</li>
      <li>The scanner has been aligned. Place the protective plate on the scanner's glass.</li>
      <li>Clean the glass and keep the front-facing alignment plate in good shape.</li>
      <li>Make sure the document is aligned on the scanner glass's faces according to the alignment inditions.</li>
      <li>Select OK and wait for the printer to position itself.</li>
    </ul>
    <h3 className="text-xl font-semibold mt-8 mb-2">Install the 123 HP Printer driver software</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>The driver is very important in your 123-hp printer. The fundamental function of the driver is to communicate between the printer and the computer.</li>
      <li>The driver is available for download via the website's URL. By clicking the link, a new window will appear. Select your computer's operating system and the printer model.</li>
      <li>Install the printer software by following the on-screen instructions once it has been downloaded. Select network connectivity mode throughout the installation process.</li>
    </ul>
    <h3 className="text-xl font-semibold mt-8 mb-2">HP Printer Installation & Setup</h3>
    <p className="mb-4">For more details and step-by-step instructions, visit <a href="https://allitexpert.com/123-printer-setup.php" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">allitexpert.com/123-printer-setup.php</a>.</p>

    {/* Wireless Printer Setup Support Section */}
    <hr className="my-10 border-blue-200 dark:border-blue-800" />
    <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">Wireless Printer Setup Support By Experts</h2>
    <p className="mb-4 font-semibold">Let Fix My Product</p>
    <a href="tel:+18775933790" className="inline-block mb-4 px-6 py-2 bg-blue-600 text-white rounded-full font-bold shadow hover:bg-blue-700 transition">Call</a>
    <h3 className="text-xl font-semibold mt-8 mb-2">HP Wireless Printer Setup</h3>
    <p className="mb-4">HP is one of the leaders in the field of IT hardware and doesn't need any introduction, most people are using HP's products HP is the leader in Printers, smart devices Laptops, Computers, Tablets, etc. The most important commercial product of HP is its Printers, which are popular for their durability, compact design, and high configuration. Whenever HP introduces new product, innovation is one of the cornerstones in its product development. Nowadays, Wireless Printers are in trend as everything is becoming wireless. Following the same trend, HP additionally introduced its HP Wireless Printers in the market. Most people do not find it easy to manage this printer; therefore, Wireless Printer Setup Support is an excellent tool for you.</p>
    <p className="mb-4">Our Technical Support Professionals have proper instructions for your HP Wireless Printer Setup. As some people don't have proper technical knowledge about setting up their wireless printers, it's best to take the help of our skilled specialists. Our Technical Support Specialists are one of the best for help in setting up your wireless printer. Our Technical Support Specialists are available 24X7 to give you essential tips for the Wireless Printer Setup Support.</p>
    <p className="mb-4">Feel free to call our Printer Support Number to get straightforward instructions from our professional and experienced technicians regarding setting up your wireless printer.</p>
    <h3 className="text-xl font-semibold mt-8 mb-2">123 HP Wireless Printer Setup</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Connect your printer to your computer via a USB cable and follow the on-screen instructions prompted on your screen.</li>
      <li>After completing all the instructions from 123.hp.com/setup, disconnect your printer by removing the USB cable from the computer.</li>
      <li>Make sure that your printer is switched on. Your computer and wireless printer must be kept inside the range of the router.</li>
      <li>Gather the network requirements such as Network Name and Network Key. Make sure to read all the installation instructions for setting up your wireless printer successfully without any difficulty. Visit the Network menu or click on the Wireless icon and select the Settings option.</li>
      <li>Now, proceed further with the instructions according to the Wireless Setup Wizard. Follow the on-screen instructions and choose the most appropriate network settings as per your requirements, such as Wireless or Local Area Network.</li>
    </ul>
    <h3 className="text-xl font-semibold mt-8 mb-2">Simple Steps to HP Wireless Printer Setup</h3>
    <ol className="list-decimal pl-6 mb-4 space-y-2">
      <li>First, connect one end of the power cord to the rear side of the printer and the other end to an electrical wall socket. Switch on your printer.</li>
      <li>Carefully install the cartridges in their respective slots within the printer.</li>
      <li>Gather the network necessities such as Network Name and Network Key. Make sure that the router and computer are kept inside the range of the router.</li>
      <li>There should be a stable and fast internet connection for downloading printer updates and seamless connectivity.</li>
      <li>Check that the router and computer are turned on and ensure that your computer connected to the network with which your printer is connected.</li>
      <li>Go to the Control Panel of your printer and touch on the Wireless icon.</li>
      <li>Visit the Wireless Setup section and choose the Wireless Network option. Select your Router in the list and enter its Security Key to connect your printer to the network.</li>
      <li>After that, download the latest version of the printer driver from this site <a href="https://123.hp.com/us/en/devices/setup" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">123.hp.com/us/en/devices/setup</a>.</li>
      <li>Locate the downloaded driver package, and then double click on it to install it.</li>
      <li>If prompted, click on the Run button. Follow the on-screen instructions to complete the installation process correctly.</li>
      <li>For Windows users, open the Control panel, then get access to the Devices and Printers section, choose your printer and install it on your computer.</li>
      <li>For Mac OS users, click on the Menu button, then select the System Preferences. Once you click on the Printer & Scan button, then click on add (+) button from the list of printers and then choose your printer and install it on your Mac computer.</li>
    </ol>
    <p className="mb-4">By following these steps, you'll be able to install your HP Wireless printer and print your documents properly.</p>
    <h3 className="text-xl font-semibold mt-8 mb-2">Why do you select us for the Printer Wireless Support?</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>We have certified and Experienced Experts Team that is always ready to guide you to setup your Wireless Printer correctly while keeping in mind the safety and maintenance of your computer and network. Our motto is to provide the best solution to our customers at a cost-effective price. We always ensure to answer your call within seconds.</li>
      <li>Our Support Team is certified, experienced, and trained. We assure you that our customers get top-notch service from our company. Our support team has a solution for each technical problem.</li>
    </ul>
    <p className="mb-4">You can also get support for:</p>
    <ul className="list-disc pl-6 mb-4">
      <li>Printer Offline</li>
      <li>Printer Installation</li>
      <li>Printer Tech Support</li>
    </ul>
    <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 my-6">
      <h4 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-200">We Provide Online Printer Offline Support By Independent Professionals</h4>
      <p className="mb-2">Call US: <span className="font-bold text-blue-700 dark:text-blue-200">+1 (877) 593-3790</span></p>
      <p className="mb-2">Printer Offline Support Just Call Our Support Number</p>
      <p className="mb-2">Contact@Geekfixprinter.online</p>
    </div>
    <div className="mt-8 text-xs text-gray-500 dark:text-gray-400">
      <p>Independent Service Provider All IT Expert also provides Onsite and Online On-Site Support for different third-party software and hardware. The use of trademarks and names is only for reference purposes and is not intended to suggest that All IT Expert has business associations with them. If the product has warranty coverage, the manufacturer may offer professional support services.</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen printer-bug-theme bg-transparent text-slate-800 dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <section className="w-full px-4 py-8">
              <div className="bg-white/90 shadow-xl rounded-2xl p-6 mb-8">
                <Hero />
              </div>
              <div className="grid gap-8">
                <div className="bg-white/90 shadow-lg rounded-2xl p-6"><Services /></div>
                <div className="bg-white/90 shadow-lg rounded-2xl p-6"><PrinterTypes /></div>
                <div className="bg-white/90 shadow-lg rounded-2xl p-6"><HowItWorks /></div>
                <div className="bg-white/90 shadow-lg rounded-2xl p-6"><Testimonials /></div>
                <div className="bg-white/90 shadow-lg rounded-2xl p-6"><Contact /></div>
                <div className="bg-white/90 shadow-lg rounded-2xl p-6"><PrinterSupportSystem /></div>
                <div className="bg-white/90 shadow-lg rounded-2xl p-6"><Footer /></div>
              </div>
            </section>
          </>
        } />
        <Route path="/printer-support-system" element={<div className="w-full px-4 py-8"><div className="bg-white/90 shadow-lg rounded-2xl p-6"><PrinterSupportSystem /></div></div>} />
        <Route path="/printer-setup" element={<div className="w-full px-4 py-8"><div className="bg-white/90 shadow-lg rounded-2xl p-6"><PrinterSetupPage /></div></div>} />
      </Routes>

      {/* Bottom fixed button - Modern Design */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="w-full px-2 sm:px-4">
          <a
            href="tel:+18775933790"
            className="flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-3 sm:px-6 py-3 sm:py-4 rounded-t-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <Printer className="text-yellow-300 sm:w-6 sm:h-6" size={20} />
              <span className="font-bold text-sm sm:text-lg">Printer Support:</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2 bg-white/10 px-2 sm:px-4 py-1 sm:py-2 rounded-full">
              <Phone className="text-yellow-300 sm:w-5 sm:h-5" size={16} />
              <span className="font-bold text-sm sm:text-lg tracking-wide">+1 (877) 593-3790</span>
            </div>
          </a>
        </div>
      </div>

          </div>
  );
}

export default App;