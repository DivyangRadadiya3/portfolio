import PropTypes from "prop-types";

export function SimpleFooter({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-4 bg-gray-100">
      <div className="flex flex-wrap items-center justify-center gap-6 px-4 md:justify-between">
        <p className="text-sm text-gray-600">
          &copy; {year}, made with{" "}
          <span className="text-red-500">&hearts;</span> by{" "}
          <a
            href={brandLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {brandName}
          </a>{" "}
          for a better web.
        </p>
        <ul className="flex items-center gap-4">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <a
                href={path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-blue-500"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

SimpleFooter.defaultProps = {
  brandName: "Creative Tim",
  brandLink: "https://www.creative-tim.com",
  routes: [
    { name: "Creative Tim", path: "https://www.creative-tim.com" },
    { name: "About Us", path: "https://www.creative-tim.com/presentation" },
    { name: "Blog", path: "https://www.creative-tim.com/blog" },
    { name: "License", path: "https://www.creative-tim.com/license" },
  ],
};

SimpleFooter.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

SimpleFooter.displayName = "/src/widgets/layout/simple-footer.jsx";

export default SimpleFooter;
