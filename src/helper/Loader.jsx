import "./loader.css";
const Loader = () => {
  const count = Math.random();
  return (
    <div className="loader">
      <span style={{ animationDelay: `${count}s` }} />
      <span style={{ animationDelay: `${count + 0.2}s` }} />
      <span style={{ animationDelay: `${count + 0.4}s` }} />
      <span style={{ animationDelay: `${count + 0.6}s` }} />
      <span style={{ animationDelay: `${count + 0.8}s` }} />
      <span style={{ animationDelay: `${count + 1}s` }} />
      <span style={{ animationDelay: `${count + 1.2}s` }} />
      <span style={{ animationDelay: `${count + 1.4}s` }} />
      <span style={{ animationDelay: `${count + 1.6}s` }} />
      <span style={{ animationDelay: `${count + 1.8}s` }} />
    </div>
  );
};

export default Loader;
