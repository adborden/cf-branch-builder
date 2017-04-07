import React from 'react';


function Home({ match }) {
  const id = match.params.id;

  return (
    <div>
      <p>{ match.url }</p>
      { id && <p>id: { id }</p> }
    </div>
  );
}

Home.propTypes = {
  match: React.PropTypes.shape({
    url: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default Home;
