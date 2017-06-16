export default (props) => (
  <div className="container">
    {props.children}
    <style jsx>{`
      .container {
        max-width: 960px;
        width: 100%;
        margin: 0 auto;
        padding: 0 10px;
      }
    `}</style>
  </div>
)