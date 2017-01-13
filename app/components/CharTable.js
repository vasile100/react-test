import React, { PropTypes } from 'react';
import CharRow from './CharRow';
import * as constants from './AppConstants';

const CharTable = ({ filter }) => {
    let rows = [];
    const starwarchars = constants.STARWARCHAR.results;

    starwarchars.forEach((p) => {
        const nameLC = p.name.toLowerCase();
        const filterLC = filter.toLowerCase();

        if (nameLC.indexOf(filterLC) !== -1) {
            rows.push(
              <CharRow key={p.name} data={p} />
            );
        }
    });

    return <div> {rows} </div>;
};

CharTable.propTypes = {
    filter: PropTypes.string,
};

export default CharTable;
