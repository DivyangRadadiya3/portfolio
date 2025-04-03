import PropTypes from "prop-types";

export function FeatureCard({ color, icon, title, description }) {
  return (
    <div className="rounded-lg shadow-lg p-6 text-center">
      <div
        className={`mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-${color}-500`}
      >
        {icon}
      </div>
      <h5 className="text-lg font-bold text-gray-800">{title}</h5>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

FeatureCard.defaultProps = {
  color: "blue",
};

FeatureCard.propTypes = {
  color: PropTypes.oneOf([
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
