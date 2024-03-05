import PropTypes from "prop-types";
const Header = ({ name, isActive, address }) => {
  return (
    <div>
      {" "}
      {isActive ? `Merhaba ${name}` : "Giriş Yapmadınız"}{" "}
      <h3>
        {address.title} {address.zip}
      </h3>{" "}
    </div>
  );
};

// Prop Types
Header.propTypes = {
  //   name: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  name: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  address: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};

// Default Props
Header.defaultProps = {
  name: "Pokemon",
};

export default Header;
