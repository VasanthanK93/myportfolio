import React from 'react';

const Widecard = (props) => {
  const value = props;
  return (
    <div className="card bg-light" style={{ marginTop: '20px' }}>
      <h5 className="card-header">
        {value.title}
      </h5>
      <div className="card-body">
        <h6 className="card-text">{value.from}</h6>
        <h6 className="card-text">{value.duration}</h6>
      </div>

    </div>
  );
};

export default Widecard;
