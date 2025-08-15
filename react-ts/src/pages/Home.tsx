
const Home = () => {
      return (
      <div className='col-4 m-auto'>
        <h1>Login</h1>
      <div className="mb-3">
        <label htmlFor="gitUser" className="form-label">Usuário do GitHub</label>
        <input className="form-control" id="gitUser" aria-describedby="userHelp"/>
        <div id="emailHelp" className="form-text">Infrorme seu usuário do GitHub</div>
      </div>
       <button type="button" className="btn btn-primary">Entrar</button>

      </div>
  );
}

export default Home