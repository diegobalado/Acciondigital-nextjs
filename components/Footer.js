import React from 'react';
import dayjs from 'dayjs';

const Footer = () => {
  const today = dayjs().year();
  return (
    <div className="copyright">
      <p>Acción Digital &copy; {today}</p>
      <p>Imágenes: <a href="/contacto">Javier Piva Flos</a>.</p>
      <p>Desarrollo web: <a href="mailto:jdiegomdq@gmail.com">Diego Balado</a>.</p>
    </div>
  )
}

export default Footer;