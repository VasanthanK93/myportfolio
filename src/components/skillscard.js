import React from 'react';

const SkillsCard = (props) => {
  const value = props;
  return (
    <div className="card">
      <h5 className="card-header text-center">
        {value.data.name}
      </h5>
      <div className="card-body">
        <div className="card-deck">
          {value.data.data.map((val) => (
            <div key={val.name} className="card col-md-3 text-center" style={{ border: 'none' }}>
              <img className="card-img-top" style={{ height: '150px', width: '150px' }} src={val.image} alt="Card cap" />
              <div className="card-body">
                <h6 className="card-title">{val.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
