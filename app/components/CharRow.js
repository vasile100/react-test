import React, { PropTypes } from 'react';
import rowStyle from '../styles/starwarRowItem.scss';

/* eslint-disable arrow-body-style */
const CharRow = ({ data }) => {
    return (
      <div className={rowStyle.starwarRowItem}>
        <div className={rowStyle.itemName}>Character: {data.name}</div>
        <div className={rowStyle.itemContainer}>
          <div className={rowStyle.itemAvatarWrap}>
            <img src={data.img} alt="" />
          </div>
          <p>Height: {data.height}</p>
          <div className={rowStyle.itemContent}>
            <div className={rowStyle.itemAuthor}>Actor: {data.actor_name}</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, banditos.</p>
          </div>
        </div>
      </div>
    );
};
/* eslint-enable arrow-body-style */

CharRow.propTypes = {
    data: PropTypes.object,
};

export default CharRow;
