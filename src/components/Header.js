import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';

export default function Header(props) {
    return (
      <header>
        <FontAwesomeIcon icon={faFreeCodeCamp} className="icon" />
        <h1 className="section-title">{props.title}</h1>
        <FontAwesomeIcon icon={faWindowMaximize} className="icon icon-action" onClick={props.handleResize} />
      </header>
    );
  } 