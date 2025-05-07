export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left items-start">

        {/* 1. Logo & About */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/assets/images/logo.jpeg"
            alt="Logo"
            className="w-32 h-32 object-contain mb-4"
          />
          {/* <p className="text-sm text-gray-600 max-w-sm">
            Empowering youth through free government-certified training programs in various skill development sectors. Run by Sachin Eduskills Pvt. Ltd., our mission is to build brighter futures through quality education and equal opportunities for all.
          </p> */}
        </div>

        {/* 2. Contact Info */}
        <div className="space-y-4 text-sm">
          <h3 className="text-base font-semibold mb-2 text-sky-600">Contact</h3>
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-sky-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m0 16v-2m-6 4h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z" />
            </svg>
            <span>sachineduskills@yahoo.com</span>
          </div>
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-sky-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10l1.5-1.5a2 2 0 0 1 2.828 0l1.086 1.086a2 2 0 0 1 0 2.828L6 14m0 0l-1.5 1.5M6 14l5.5-5.5M21 10v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10h16z" />
            </svg>
            <span>0121-4352553</span>
          </div>
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-sky-600 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.134 2 5 5.134 5 9c0 3.038 2.116 5.634 5 6.32V21l2-1.5 2 1.5v-5.68c2.884-.686 5-3.282 5-6.32 0-3.866-3.134-7-7-7z" />
            </svg>
            <span>C-86, Ganga Vatika, Ganga Nagar, Meerut, U.P. 250001</span>
          </div>
        </div>

        {/* 3. Useful Links */}
        <div className="space-y-4 text-sm">
          <h3 className="text-base font-semibold mb-2 text-sky-600">Useful Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-sky-600 transition">Home</a></li>
            <li><a href="/about" className="hover:text-sky-600 transition">About</a></li>
            <li><a href="/projects" className="hover:text-sky-600 transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-sky-600 transition">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Sachin Eduskills Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
