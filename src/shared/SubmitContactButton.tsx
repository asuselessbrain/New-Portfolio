import { Send } from "lucide-react"

const SubmitContactButton = ({isSubmitting}: {isSubmitting: boolean}) => {
    return (
        <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-100 text-blue-800 font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg group border border-blue-300 relative overflow-hidden"
                  >
                    {/* Animated Background Overlay */}
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-transform duration-500 transform -translate-x-full group-hover:translate-x-0 z-0" />

                    {/* Button Content */}
                    <span className="relative z-10 flex items-center space-x-2 group-hover:text-white transition-colors duration-500">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="mr-1" size={20} />
                          <span>Send Message</span>
                        </>
                      )}
                    </span>
                  </button>
    )
}

export default SubmitContactButton;