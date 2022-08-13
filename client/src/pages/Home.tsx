import Layout from "../components/layout/Layout";
import MotionWrapper from "../components/layout/MotionWrapper";
import heroImage from "../assets/graph_hero.svg";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <Layout>
      <article className="w-full bg-indigo-100 dark:bg-deep-darker">
        <MotionWrapper>
          <div className="my-16 grid grid-rows-[1fr_auto] items-center gap-y-6 md:grid-cols-2 lg:gap-x-6">
            <div>
              <section className="text-4xl font-black lg:text-6xl">
                <p>Reach</p>
                <p>Meaningful</p>
                <p>Decisions</p>
              </section>
              <section className="mt-6 flex w-full flex-col gap-y-8 leading-relaxed md:w-3/4 lg:gap-y-6">
                <p>
                  Voting With Friends is a social ranked choice web application
                  where users can create polls, invite their friends to
                  participate, and reach a meaningful decision that everyone is
                  happy with!
                </p>
                <p>
                  Keep scrolling to learn more about how ranked choice voting
                  works. Or if you're ready to get started, hit the button
                  below!
                </p>
                <Link
                  className="mx-auto mb-4 inline-block w-1/2 rounded bg-indigo-500 py-4 text-center text-white md:mx-0 md:mr-auto lg:mb-0"
                  to="/"
                >
                  Get Started
                </Link>
              </section>
            </div>

            <section>
              <img src={heroImage} alt="man with graphs" />
            </section>
          </div>
        </MotionWrapper>
      </article>
    </Layout>
  );
};

export default Home;
