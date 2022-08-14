import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import MotionWrapper from "../components/layout/MotionWrapper";

const Login: React.FC = () => {
  return (
    <Layout>
      <MotionWrapper>
        
        <h1 className="mx-auto mb-4 text-center text-2xl">
          Welcome to Voting with Friends!!!
        </h1>
        <div className="form">
          <form>
            <div className="input-container">
              <label className="text-2xl">Email</label>
              <input type="text" name="uname" required />
            </div>
            <div className="input-container">
              <label className="padding: 2px text-2xl">Password </label>
              <input type="password" name="pass" required />
            </div>
            <Link
              className="mx-auto mb-4 inline-block w-1/2 rounded bg-indigo-500 py-4 text-center text-white md:mx-0 md:mr-auto lg:mb-0"
              to="/polls"
            >
              Submit
            </Link>
          </form>
        </div>
      </MotionWrapper>
    </Layout>
  );
};

export default Login;
