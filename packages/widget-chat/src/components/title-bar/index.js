import React, {PropTypes} from 'react';
import classNames from 'classnames';

import styles from './styles.css';

import Avatar from '../avatar';

export default function TitleBar(props) {
  const {displayName} = props;
  return (
    <div className={classNames(`title-bar`, styles.titleBar)}>
      <div className={classNames(`avatar-container`, styles.avatarContainer)}>
        <Avatar displayName={displayName} />
      </div>
      <h1 className={classNames(`title`, styles.title)}>{displayName}</h1>
    </div>
  );
}

TitleBar.propTypes = {
  displayName: PropTypes.string.isRequired
};
