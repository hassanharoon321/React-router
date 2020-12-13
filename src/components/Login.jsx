import React from "react";

function Login(){
    return(
        <div>
            <h1>Login</h1>
           <form>
           <label>Email</label>
            <input required type="email" name=""/><br/>
            <label>password</label>
            <input type="password" name=""/><br/>
            <button>Login</button>
           </form>
        </div>
    )
}

export default Login;