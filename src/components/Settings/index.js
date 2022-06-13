import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'
import './styles.scss';

import InputField from 'src/containers/settings/InputField';

const Settings = ({open, openToggle}) => {


  return (
    <div className={classNames('settings',{'settings--active':open})}>
      <button type="button" onClick={openToggle} className="settings__button">+</button>
      <form className="settings__form">
        <InputField type="text" placeholder="ton pseudo" inputName="pseudo" />
        <InputField type="email" placeholder="mail.." inputName="email" />
        <InputField type="password" placeholder="enter your password.." inputName="password" />
        <button type="submit"  className="settings__submit-btn">Envoyer</button>
      </form>
    </div>
  )
}

Settings.propTypes = {
  open: PropTypes.bool,
  openToggle: PropTypes.func,
}

Settings.defaultProps ={
  open: false,
  openToggle: () => {

  }
}

export default Settings;
