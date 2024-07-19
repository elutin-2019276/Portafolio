import { Navbar } from "../../components/Navbar.jsx";
import fondo from '../../assets/img/Fondo.png';
import { TechnologyContent } from "../../components/TechnologyContent.jsx";
import './Technology.css'

export const Technology = () => {
  return (
    <div className="dashboard-main">
        <img className="fond-homepage" src={fondo} alt="imagenDiario" />
      <Navbar></Navbar>
      <div className="title-section">6to diversificado</div>
      <div className="container-project">
        <div className="theme-data">El último año de estudios técnicos o de perito representa el punto culminante de un camino educativo enfocado en habilidades prácticas y conocimientos especializados. 
          Es un período crucial donde los estudiantes se preparan intensamente para ingresar al mercado laboral con las competencias necesarias para destacarse en su campo profesional elegido.
          <br />
          <br />
          Durante este último año, los estudiantes tienen la oportunidad de consolidar y profundizar en los conocimientos técnicos adquiridos a lo largo de su carrera. Desde la teoría aplicada hasta la práctica en laboratorios y 
          talleres especializados, cada asignatura y proyecto contribuye a fortalecer su expertise en áreas específicas.
          </div>
        <div className="technology-data">El profesor Josué Noj es reconocido por su dedicación y pasión por la enseñanza de informática en el sexto año diversificado. Con una sólida formación académica y una amplia experiencia en el campo, el profesor Noj ha dejado una marca significativa en el aprendizaje y desarrollo de sus estudiantes.
        <br />
        <br />
        Además de su labor como educador, el profesor Noj participa activamente en mencionar cualquier actividad extracurricular, proyectos educativos o iniciativas comunitarias en las que esté involucrado], mostrando su compromiso con la educación integral y el desarrollo de habilidades más allá del currículo académico tradicional.
        </div>

      </div>
      <TechnologyContent></TechnologyContent>
    </div>
  )
}