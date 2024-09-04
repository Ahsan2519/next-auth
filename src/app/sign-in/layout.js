const LoginLayout = ({ children }) => {
  console.log(children);
  return (
    <div>
      <header>Login Layout Header</header>
      <main>{children}</main>
      <footer>Login Layout Footer</footer>
    </div>
  );
};

export default LoginLayout;
