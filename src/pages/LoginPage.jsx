import './Login.css';
export default function LoginPage() {

  // eslint-disable-next-line no-undef
  handleSubmit= e => {
    e.preventDefault();
  }

  



    return (
        <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
  
    )
}
