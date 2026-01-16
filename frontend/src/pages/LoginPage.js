import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { NavLink } from "react-router";

export default function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassWord] = useState();
    const [errors, setErrors] = useState({});
    const { login, serverError } = useContext(AuthContext);

    function validateForm() {
        const newErrors = {};

        if (!email) {
        newErrors.email = "Az email cím kötelező";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Érvénytelen email formátum";
        }

        if (!password) {
        newErrors.password = "A jelszó kötelező";
        } else if (password.length < 6) {
        newErrors.password =
            "A jelszónak legalább 6 karakter hosszúnak kell lennie";
        }

        //ezt majd később a submit eseményben fogjuk frissíteni, ide pedig egy return jön.  return newErrors;
        setErrors({ ...newErrors });
    }

    function submit(event) {
        event.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
        }
        const user = { email, password };
        console.log(user);
        login(user);
    }

    return (
        <form onChange={submit}>
            {serverError && <div className="alert-error">{serverError}</div>}
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" value={email} class="form-control" onChange={(e) => {
              setEmail(e.target.value);
            }} id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
         {errors.email && (
            <span className="error-text">{errors.email}</span>
        )}
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" value={password} class="form-control" onChange={(e) => {
              setPassWord(e.target.value);
            }} id="exampleInputPassword1"></input>
        {errors.password && (
            <span className="error-text">{errors.password}</span>
        )}
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <div className="szoveg">
          Registration is free!{" "}
          <NavLink to="/register">CREATE AN ACCOUNT</NavLink>
        </div>
        </form>
    )
}
