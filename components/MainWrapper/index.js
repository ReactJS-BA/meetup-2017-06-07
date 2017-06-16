import Header from '../Header';
import Container from '../Container';

export default (props) => (
  <div>
    <Header />
    <Container>
      {props.children}
    </Container>
    <style global jsx>{`
      body {
        padding: 0;
        margin: 0;
        background: #f4f4f4;
      }
      * {
        box-sizing: border-box;
        font-family: Lato, Roboto, sans-serif;
      }
      a,
      a:visited,
      a:active {
        text-decoration: none;
        color: #2594ef;
        cursor: pointer;
      }
    `}
    </style>
  </div>
)