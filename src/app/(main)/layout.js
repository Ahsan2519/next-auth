const layout = ({ children }) => {
  return (
    <div>
      <header>Main Layout Header</header>
      <main>{children}</main>
      <footer>Main Layout Footer</footer>
    </div>
  );
};

export default layout;
