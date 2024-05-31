import PropertyItem from '../Property/PropertyItem';

import PropTypes from 'prop-types';

const Properties = ({properties}) => {

  return (
    <div className="min-h-screen  pt-0 bg-background">
      <ul className="grid grid-cols-1 px-32 gap-4 md:grid-cols-1">
        {properties.map((property) => (
          <PropertyItem key={property.id} property={property} />
        ))}
      </ul>
    </div>
  );
};

Properties.propTypes = {
  properties: PropTypes.array.isRequired
};

export default Properties;
