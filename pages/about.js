import Container from '../components/Container';
import MainWrapper from '../components/MainWrapper';

export default () => (
  <MainWrapper>
    <div className="about">
      <p>Este es un sitio de prueba con <strong>next.js!</strong></p>
      <p>Creado por la gente de TARINGA!</p>
    </div>
    <style jsx>{`
      .about {
        text-align: center;
      }
    `}</style>
  </MainWrapper>
)