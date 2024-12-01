import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const SignUp = () => {
  const {createUser} = useContext(AuthContext);
    const handleSubmit =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result => {
          console.log(result.user)
          const createdAt = result?.user?.metadata?.creationTime;
          const newUser = {name,email,createdAt}
        // save new user to the database
        fetch('https://coffee-store-server-tau-beryl.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            console.log('user created in db')
          }
        })
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
          <div className="hero bg-base-200">
  <div className="hero-content flex-col md:w-1/2 mx-auto">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Sign up now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div>
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
          <button className="btn btn-primary">Sign up</button>
        </div>
      </form>
    </div>
  </div>
</div>  
        </div>
    );
};

export default SignUp;