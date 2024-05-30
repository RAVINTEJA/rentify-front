import PropertyItem from '../Property/PropertyItem';

import PropTypes from 'prop-types';

const Properties = ({properties}) => {

  return (
    <div className="min-h-screen p-8 bg-background">
      <h2 className="mb-6 text-2xl font-bold text-primary">Properties</h2>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-1">
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
