import { FC, FormEvent, useState } from "react";
import { Input } from "../Input";
import "./signInForm.scss";
import { useNavigate } from "react-router-dom";
import { PageRoutes } from "../../enums/routes.enum";

export const SignInForm: FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.target.value);
  };

  const onPasswordInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (password.length < 3 || password.length > 20) {
      return alert(
        "Password must contain at least 3 characters and a maximum of 20 characters"
      );
    }
    setEmail("");
    setPassword("");

    navigate(PageRoutes.Index);
  };
  return (
    <form
      className="sign-in-form"
      autoComplete="off"
      onSubmit={handleFormSubmit}
    >
      <h2 className="sign-in-form__title">Sign In</h2>

      <Input
        heading={"Email"}
        testId={"auth-email"}
        name={"email"}
        type={"email"}
        required={true}
        value={email}
        onChange={onEmailInputChange}
      />
      <Input
        name={"password"}
        testId={"auth-password"}
        type={"password"}
        heading={"Password"}
        value={password}
        onChange={onPasswordInputChange}
        required={true}
      />
      <button data-test-id="auth-submit" className="button" type="submit">
        Sign In
      </button>
    </form>
  );
};
