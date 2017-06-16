import Link from 'next/link'
import Container from '../Container';

export default () => (
  <header className="header">
    <Container>
      <Link prefetch href="/">
        <img className="logo" src="static/logo.png" />
      </Link>
      <p className="link">
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
      </p>
    </Container>
    <style jsx>{`
      .header {
        width: 100%
        background: white;
        box-shadow: 0 -3px 9px rgba(0, 0, 0, 0.5);
        height: 50px;
      }
      .logo {
        width: 117px;
        padding: 11px 0;
        cursor: pointer;
      }
      .link {
        float: right;
      }
    `}</style>
  </header>
)