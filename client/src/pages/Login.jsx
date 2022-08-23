import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import MotionWrapper from "../components/layout/MotionWrapper";
import { AiOutlineMail } from "react-icons/ai";
import { GrLock } from "react-icons/gr";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { useState } from "react";
import Auth from "../utils/auth";

//NOTES:
// - Kind of want to remove the right side text
// - Center Login section on page

const SignUp = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <Layout>
      <MotionWrapper>
        <section className="overflow-hidden py-20 2xl:py-40">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="-mx-10 flex flex-wrap items-center">
                <div className="w-full px-10 lg:w-1/2">
                  <div className="rounded-lg bg-white px-6 py-12 shadow-2xl lg:px-20 lg:py-24">
                    <form onSubmit={handleFormSubmit}>
                      <h3 className="font-heading mb-10 text-2xl font-bold dark:text-gray-900">
                        <p className="text-3xl">Login</p>
                      </h3>

                      {/*EMAIL BOX */}
                      <div className="mb-3 flex items-center rounded-full border border-gray-400 bg-white pl-6">
                        <span className="inline-block border-r border-gray-50 pr-3">
                          <div className="text-xl text-black">
                            <AiOutlineMail />
                          </div>
                        </span>
                        <input
                          className="w-full rounded-r-full py-4 pr-6 pl-4 text-gray-900 placeholder-gray-900 focus:outline-none"
                          type="email"
                          name="email"
                          id="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="Example@Email.com"
                        />
                      </div>

                      {/*PASSWORD BOX */}
                      <div className="mb-3 flex items-center rounded-full border border-gray-400 bg-white pl-6">
                        <span className="inline-block border-r border-gray-50 pr-3">
                          <GrLock className="text-xl text-black" />
                        </span>
                        <input
                          className="w-full rounded-r-full py-4 pr-6 pl-4 text-gray-900 placeholder-gray-900 focus:outline-none"
                          type="password"
                          name="password"
                          id="password"
                          value={formState.password}
                          onChange={handleChange}
                          placeholder="Password"
                        />
                      </div>

                      {/*GET STARTED BUTTON */}
                      <button
                        type="submit"
                        className="w-full rounded-full bg-blue-500 py-4 font-bold text-white transition duration-200 hover:bg-blue-600 dark:bg-cyan-600 dark:hover:bg-cyan-500"
                      >
                        Login
                      </button>
                    </form>
                  </div>
                </div>

                {/*SIDE SCREEN */}
                <div className="order-first mb-16 w-full px-10 lg:order-last lg:mb-0 lg:w-1/2">
                  <div className="max-w-md -translate-y-24 ">
                    <h2 className="font-heading mt-8 mb-12 text-5xl ">
                      Welcome to <br></br>
                      <span className=" font-bold">
                        Voting With Friends!
                      </span>{" "}
                      <b></b>
                      Sign in to your account! If you don't have an account
                      click the link below!
                    </h2>
                    <p className="text-lg text-gray-500">
                      <Link to="/signup">
                        Click <u>here</u> to create a new account!
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MotionWrapper>
    </Layout>
  );
};

export default SignUp;
