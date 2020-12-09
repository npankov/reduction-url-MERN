import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from '../hooks/http.hook';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

export const CreatePage = () => {
  const [link, setLink] = useState('');
  const { request } = useHttp();
  const auth = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  const changeHandler = (e) => setLink(e.target.value);

  const pressHandler = async (e) => {
    if (e.key === 'Enter') {
      try {
        const data = await request('/api/link/generate', 'POST', { from: link }, {
          Authorization: `Bearer ${auth.token}`
        });
        history.push(`/detail/${data.link._id}`);
      } catch (e) {

      }
    }
  }

  return (
    <div className="row">
      <div className="col s8 offset-s2">
        <div className="input-field">
          <input placeholder="Link"
                 id="link"
                 type="text"
                 value={link}
                 onChange={changeHandler}
                 onKeyPress={pressHandler}
          />
          <label htmlFor="link">Entrer votre link</label>
        </div>
      </div>
    </div>
  )
}

