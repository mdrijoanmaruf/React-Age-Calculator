const Footer = () => {
  return (
    <div className="mt-8 pt-5 border-t border-gray-200">
      <p className="text-gray-600 text-sm">
        Developed by{' '}
        <a 
          href="https://rijoan.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-indigo-600 font-semibold hover:text-purple-600 hover:underline transition-colors duration-300"
        >
          Md Rijoan Maruf
        </a>
      </p>
    </div>
  );
};

export default Footer;
