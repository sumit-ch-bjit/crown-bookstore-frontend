import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCurrentUser } from "../../store/user/user.reducer";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import "./sign-in-form.styles.scss";
import { userLogin } from "../../utils/userAuthentication";
import decodeJwt from "../../utils/decodeJWT";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
  //   const user = useSelector((state) => state.user.addUserInfo);

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await userLogin(email, password);
    console.log(response, "response");

    if (response.success) {
      const userInfo = decodeJwt(response.token);
      console.log(userInfo);
      dispatch(addCurrentUser(userInfo));
    } else {
      console.log("invalid email or password");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
