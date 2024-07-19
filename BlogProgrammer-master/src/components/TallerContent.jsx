import { Button } from "./Button.jsx"
import Git from '../assets/img/Git.png'
import Progra from '../assets/img/Progra.png'

export const TallerContent = () => {
  return (
    <div className='dashboard-content'>
      <div class="container">
        <div class="content">
          <div class="content__container">
            <p class="content__container__text">
              Centro Educativo Técnico Kinal
            </p> 
            <ul class="content__container__list">
            </ul>
          </div>
        </div>
      </div>
      <br/>
      <div className="homework">
        <h2>Aprendiendo Git.</h2>
        <p>Aprender Git es esencial para cualquier persona que trabaje en desarrollo de software o colaboración en proyectos tecnológicos. 
          Git es un sistema de control de versiones distribuido ampliamente utilizado que facilita la gestión eficiente de cambios en el código fuente y la coordinación del trabajo en equipo. 
        </p>
        <hr/>
        <p className='conocimientos'>Conocimientos</p>
        <p>Al aprender Git, se adquieren una serie de conocimientos y habilidades fundamentales que son muy valiosas para cualquier persona involucrada en el desarrollo de software y la colaboración en proyectos tecnológicos.
          <br />
          <br />
          Se adquieren habilidades para colaborar con otros desarrolladores utilizando repositorios remotos, como clonar repositorios, enviar (push) y recibir (pull) cambios, y gestionar ramas remotas.
          <br />
          <br />
          <img src={Git} className="img"/>
          <br />
          Presiona el botón para ir al proyecto.
        </p>
         <a href="https://github.com/parmas24/IN5AV_2023.git"> 
          <center><Button></Button></center>
        </a>
      </div>
      <div className="homework">
      <h2>DressCode</h2>
        <p>En la era digital actual, la industria de la moda está experimentando una transformación significativa hacia plataformas online que ofrecen comodidad, variedad y accesibilidad a los consumidores. Este proyecto digital de venta de ropa se posiciona como una respuesta innovadora a las demandas del mercado, combinando la pasión por la moda con las últimas tecnologías para 
          proporcionar una experiencia de compra única y personalizada.
        </p>
        <hr />
        <p className='conocimientos'>Conocimientos</p>
        <p>Utilización de Java para desarrollar aplicaciones web robustas y escalables. 
          Esto incluye el uso de frameworks como Spring o Java EE para facilitar la creación de servicios web, gestión de sesiones de usuario, y la interacción con bases de datos.
          <br />
          <br />
          Aprender a establecer una conexión JDBC (Java Database Connectivity) con MySQL desde tu aplicación Java. Esto implica usar la URL de conexión correcta, cargar el driver JDBC de MySQL y gestionar las excepciones adecuadamente.
          <br />
          <br />
          <img src={Progra} className="img"/>
          <br />
          Presiona el botón para ir al proyecto.
        </p>
        <a href="https://github.com/bjulian-2022033/DressCode.git"> 
          <center><Button></Button></center>
        </a> 
      </div>
      <div className="homework">
      <h2>Conceptos básicos de Git.</h2>
        <p>Git es un sistema de control de versiones distribuido ampliamente utilizado que ayuda a los desarrolladores a gestionar cambios en el código fuente de manera eficiente y colaborativa. 
        </p>
        <hr />
        <p className='conocimientos'>Conocimientos</p>
        <p>Git proporciona un registro detallado y seguro de los cambios en el código, facilita la colaboración en equipo, permite la experimentación sin riesgos y ayuda a mantener un código base estable y escalable a lo largo del tiempo.
          <br />
          <br />
          Git mantiene un historial completo de todos los commits realizados en el proyecto, lo que facilita la revisión y la recuperación de versiones anteriores del código
          <br />
          Presiona el botón para ir al proyecto.
        </p>
        <a href="https://github.com/rparedes-2022088/pruebapushing.git"> 
          <center><Button></Button></center>
         </a> 
      </div>
      <div className="homework">
      </div>
    </div>
  )
}