// // styles
// import '@/app/globals.css';

const MainLayout = ({ children }) => {
  return (
    <html
      lang="en"
      dir="ltr"
      // required this one for next-themes, remove it if you are not using next-theme
      suppressHydrationWarning
    >
      <body
        // to prevent any warning that is caused by third party extensions like Grammarly
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
};

export default MainLayout;
