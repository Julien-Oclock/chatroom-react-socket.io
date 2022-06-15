import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import InputField from 'src/containers/Settings/InputField';

import './styles.scss';

const Settings = ({ open, openToggle, onLogin, loading }) => {
  const handleSubmitSettings = (event) => {
    event.preventDefault();
    onLogin();
  };

  return (
    <div className={classNames('settings', { 'settings--active': open })}>
      <button type="button" onClick={openToggle}>+</button>
      <form onSubmit={handleSubmitSettings}>
        <InputField
          inputName="email"
          type="email"
          placeholder="Adresse email"
        />
        <InputField
          inputName="password"
          type="password"
          autoComplete="new-password"
          placeholder="Mot de passe"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Chargement...' : 'Envoyer'}
        </button>
      </form>
    </div>
  );
};

Settings.propTypes = {
  open: PropTypes.bool,
  openToggle: PropTypes.func,
  onLogin: PropTypes.func,
  loading : PropTypes.bool
};

Settings.defaultProps = {
  open: false,
  openToggle: () => { },
  onLogin: () => { },
  loading : false,
};

export default Settings;
