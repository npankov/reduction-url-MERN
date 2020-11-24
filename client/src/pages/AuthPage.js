import React, { useState } from 'react';

export const AuthPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Reduction URL</h1>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Autorisation</span>

            <div>
              <div className="input-field">
                <input placeholder="Entrer votre e-mail"
                       id="email"
                       type="text"
                       name="email"
                       className="auth-input"
                       onChange={changeHandler}
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="input-field">
                <input placeholder="Entrer votre mot de passe"
                       id="password"
                       type="text"
                       name="password"
                       className="auth-input"
                       onChange={changeHandler}
                />
                <label htmlFor="password">Mot de passe</label>
              </div>
            </div>

          </div>
          <div className="card-action">
            <button className="btn yellow darken-4">Se connecter</button>
            <button className="btn grey lighten-1 black-text">S'inscrire</button>
          </div>
        </div>
      </div>
    </div>
  )
}

