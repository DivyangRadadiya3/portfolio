import PropTypes from "prop-types";

export function PageTitle({ section, heading, children }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <p className="text-lg font-semibold text-gray-700">{section}</p>
      <h2 className="my-3 text-3xl font-bold text-gray-800">{heading}</h2>
      <p className="text-gray-500">{children}</p>
    </div>
  );
}

PageTitle.propTypes = {
  section: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
