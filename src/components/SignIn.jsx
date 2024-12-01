import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";


const SignIn = () => {

    const {userLogin} = useContext(AuthContext);

    const handleLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        userLogin(email,password)
        .then(result => {
            console.log(result.user);
            // update last login time
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email,lastSignInTime};

            fetch(`https://coffee-store-server-tau-beryl.vercel.app/users`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
            })
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div>
            <div className="hero bg-base-200">
  <div className="hero-content flex-col md:w-1/2 mx-auto">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Sign in now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign in</button>
        </div>
        <p>New to coffee drinker <Link className="text-red-600" to="/signUp"> Sign up</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;