import { Button } from './Button.jsx'

export const TechnologyContent = () => (
    <div className='container-theme'>
        <div className="homework">
            <h1>Proyecto Final</h1>
            <p>
            Un proyecto final de informática es una culminación significativa de los estudios, donde los estudiantes aplican sus habilidades y conocimientos adquiridos en el campo de la informática para resolver problemas específicos o desarrollar sistemas de software
            </p>
            <hr />
            <p className='conocimientos'>Conocimientos.</p>
            <p> Entender cómo manejar eventos del usuario, como clics de botón, teclas presionadas y cambios de formulario, utilizando listeners de eventos para responder a estas interacciones de manera efectiva y dinámica.
                <br />
                <br />
                Presione el link para ir al proyecto.
            </p>
             <a href="https://github.com/elutin-2019276/ProyectoFinal.git"> 
                <center><Button></Button></center>
             </a> 
        </div>
        <div className="homework">
            <h1>Banco en línea</h1>
            <p>Desarrollar un sistema bancario utilizando JavaScript y MongoDB es un desafío emocionante que combina la versatilidad del desarrollo web moderno con la potencia y flexibilidad de las bases de datos NoSQL. Este tipo de proyecto no solo te permite aplicar tus conocimientos en programación y bases de datos, sino que también te prepara para abordar problemas complejos relacionados con la seguridad, la escalabilidad y la gestión eficiente de datos financieros. 
            </p>
            <hr />
            <p className='conocimientos'>Conocimientos.</p>
            <p>Aprender a utilizar Node.js junto con Express para crear un backend robusto y escalable. Esto incluye la configuración de rutas, middlewares, gestión de solicitudes y respuestas, y la integración con bases de datos como MongoDB.
                <br />
                <br />
                Presione el link para ir al proyecto..
            </p>
            <a href="https://github.com/Chejinos-Kinal/online-bank-frontend.git"> 
                <center><Button></Button></center>
             </a> 
        </div>
        <div className="homework">
            <h1>Local Makers</h1>
            <p>Local Makers es una comunidad o un espacio dedicado a fomentar la creatividad, la innovación y el aprendizaje práctico en el ámbito del desarrollo de productos y tecnología. Generalmente, este tipo de iniciativas se enfocan en reunir a personas apasionadas por la fabricación digital, la electrónica, la programación, y otras disciplinas relacionadas con la creación de prototipos y productos físicos
            </p>
            <hr />
            <p className='conocimientos'>Conocimientos.</p>
            <p>Aprender la estructura básica de JavaScript, incluyendo variables, tipos de datos (como strings, números, arrays y objetos), operadores y estructuras de control (if, else, switch, bucles).
                <br />
                <br />
                Presione el link para ir al documento.
            </p>
            <a href="https://github.com/Chejinos-Kinal/localmakers-frontend.git"> 
                <center><Button></Button></center>
             </a>
        </div>
    </div>
)
