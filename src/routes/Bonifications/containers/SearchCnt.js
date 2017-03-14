import React from 'react'
import { connect } from 'react-redux'
import { search } from '../modules/bonification'

let SearchComponent = ({ dispatch }) => {

  let input;

  return (
    <div id='search-component'>
      <i className="glyphicon glyphicon-search" aria-hidden="true"></i>
      <input
        className='form-control input-lg'
        placeholder="Búsqueda por Id"
        ref={node => { input = node; }}
        onKeyPress={
          (event) => {
            if (event.key === 'Enter') {
              console.log('Make search!');
              dispatch(
                search(input.value)
              );
            }
          }
        }/>
    </div>
  );
};
SearchComponent = connect()(SearchComponent);

export default SearchComponent
