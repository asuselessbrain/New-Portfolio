import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ViewAllButton = ({buttonText, link}: {buttonText: string, link: string}) => {
  return (
        
        <div className="text-center">
          <Link
            to={`/${link}`}
            className="relative overflow-hidden inline-flex items-center px-6 py-3 bg-blue-100 text-blue-800 font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg group border border-blue-300"
          >
            {/* Animated sliding overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0 z-0" />

            {/* Link content */}
            <span className="relative z-10 flex items-center group-hover:text-white transition-colors duration-500">
              {buttonText}
              <ArrowRight className="ml-2 transition-transform duration-500 group-hover:-rotate-45" size={20} />
            </span>
          </Link>
        </div>
  );
};

export default ViewAllButton;