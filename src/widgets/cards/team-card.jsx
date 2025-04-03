import PropTypes from "prop-types";

export function TeamCard({ img, name, position, socials }) {
  return (
    <div className="text-center">
      <img
        src={img}
        alt={name}
        className="mx-auto h-24 w-24 rounded-full shadow-lg"
      />
      <h5 className="mt-4 text-lg font-bold text-gray-800">{name}</h5>
      {position && <p className="text-gray-600">{position}</p>}
      {socials && <div className="mt-4 flex justify-center gap-2">{socials}</div>}
    </div>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
