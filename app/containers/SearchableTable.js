import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import CharTable from '../components/CharTable';
import { searchableTable } from '../styles/searchableTable.scss';

const SearchableTable = ({ filter, onFilter }) => {
    let input;

    return (
      <div className={searchableTable}>
        <p>NOTE: Enter a text in search box to filter star wars characters based on name</p>
        <input
          value={filter}
          ref={node => { input = node; }}
          onChange={() => onFilter(input.value)}
        />
        <hr></hr>
        <CharTable filter={filter} />
      </div>
    );
};

SearchableTable.propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func,
};
/* eslint-disable arrow-body-style */
const mapStateToProps = (state) => {
    return {
        filter: state.filter,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText)),
    };
};
/* eslint-enable arrow-body-style */

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchableTable);
