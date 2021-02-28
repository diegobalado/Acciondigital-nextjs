import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="content-wrapper">
      <header>
        <h1>Páginas Amigas</h1>
      </header>
      <article>
        <div className="content">
          <h2>Perfil Extremo</h2>
          <h3>Deportes de Aventura</h3>
          <p className="lugar">Tandil - Buenos Aires - Argentina</p>
          <div className="links">
            <span className="icon fa-globe link">
              <a href="http://perfilextremo.com/" target="_blank">perfilextremo.com</a>
            </span>
            <span className="icon fa-envelope link">
              <a href="mailto:contacto@perfilextremo.com" target="_blank">contacto@perfilextremo.com</a>
            </span>
          </div>
        </div>
        <div className="content-picture">
          <a href="http://perfilextremo.com/" target="_blank"><img title="Perfil Extremo - Deportes de Aventura"  alt="Perfil Extremo - Deportes de Aventura" src="/assets/images/amigos/perfil_extremo.jpg" /></a>
        </div>
      </article>
    </div>
  )
}
