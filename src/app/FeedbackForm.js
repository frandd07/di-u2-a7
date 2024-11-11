import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
// eslint-disable-next-line
  const [message, setMessage] = useState('');

  const controlador = (e) => {
    e.preventDefault();
    alert(`Enviando: "${message}"`);
    setIsSent(true);
  };
    return (
      <div>
        {isSent ?(
          <h1>¡Gracias!</h1>
        ): (
<form onSubmit={controlador
      }>
        <textarea
          placeholder="Mensaje"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
        )}
      
      </div>
    );
  
}
