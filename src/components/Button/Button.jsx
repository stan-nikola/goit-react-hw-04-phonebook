import PropTypes from 'prop-types';

export const Button = ({ children, onClick, ...allyProps }) => (
  <button type="button" onClick={onClick} {...allyProps}>
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};
