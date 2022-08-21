import Layout from "../components/layout/Layout";
import MotionWrapper from "../components/layout/MotionWrapper";
import heroImage from "../assets/graph_hero.svg";
import questionImage from "../assets/question.svg";
import supportImage from "../assets/support.svg";
import teamImage from "../assets/team.svg";
import { Link } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";

const Home = () => {
  return (
    <Layout>
      <>
        <article className="w-full bg-blue-100 dark:bg-zinc-800">
          <MotionWrapper>
            <div className="my-20 grid grid-rows-[1fr_auto] items-center gap-y-6 md:grid-cols-2 lg:gap-x-6">
              <div>
                <section className="text-4xl font-black lg:text-7xl">
                  <p>Reach</p>
                  <p>Meaningful</p>
                  <p>Decisions</p>
                </section>
                <section className="mt-6 flex w-full flex-col gap-y-8 leading-loose md:w-3/4 lg:gap-y-6">
                  <p>
                    Voting With Friends is a social ranked choice web
                    application where users can create polls, invite their
                    friends to participate, and reach a meaningful decision that
                    everyone is happy with!
                  </p>
                  <p>
                    Keep scrolling to learn more about how ranked choice voting
                    works. Or if you're ready to get started, hit the button
                    below!
                  </p>
                  <Link
                    className="mx-auto mb-4 inline-block w-1/2 rounded bg-blue-500 py-4 text-center text-white dark:bg-cyan-600 md:mx-0 md:mr-auto lg:mb-0"
                    to="/login"
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

        <article>
          <MotionWrapper>
            <article className="my-40 flex flex-col gap-y-48">
              <section>
                <article className="grid grid-cols-1 items-center gap-y-10 md:grid-cols-2 md:gap-x-10">
                  <img
                    className="w-full"
                    src={questionImage}
                    alt="man asking a question"
                  />
                  <section>
                    <h2 className="mb-8 text-3xl font-bold lg:text-5xl">
                      What is Ranked Choice?
                    </h2>

                    <p className="leading-loose">
                      Ranked Choice voting, also known as{" "}
                      <em>Instant-Runoff Voting</em> is a voting system where
                      voters are able to rank candidates by preference. If a
                      candidate has the majority of the votes, that candidate
                      wins the poll. However, is no candidate has a majority,
                      the candidate with the least amount of votes is eliminated
                      and voters who voted for this candidate as their first
                      choice now have their vote counted towards their second
                      choice, if they had a second choice. This continues until
                      a candidate reaches a majority and wins the poll.
                    </p>
                    <a
                      href="https://www.rcvresources.org/"
                      target="_blank"
                      className="mt-6 inline-block text-blue-600 underline dark:text-cyan-500"
                    >
                      More about ranked choice voting
                      <IoExitOutline className="ml-2 inline" />
                    </a>
                  </section>
                </article>
              </section>
              <section>
                <article className="grid grid-cols-1 items-center gap-y-10 md:grid-cols-2 md:gap-x-10">
                  <section>
                    <h2 className="mb-8 text-3xl font-bold lg:text-5xl">
                      A Social Ranking Platform
                    </h2>

                    <p className="leading-loose">
                      <strong>
                        <em>Voting With Friends</em>
                      </strong>{" "}
                      aims to be a community-driven voting platform. Create
                      polls and easily invite your friends to participate.
                      Browse polls created by your friends. Comment on poll
                      results, and more!
                    </p>
                    <p className="mt-8 leading-loose">
                      Need to decide on a place to eat with your friends? Don't
                      argue about it, just create a poll and have your friends
                      participate!
                    </p>
                  </section>
                  <img
                    className="w-full"
                    src={supportImage}
                    alt="woman waving in greeting"
                  />
                </article>
              </section>
            </article>
          </MotionWrapper>
        </article>

        <article className="w-full bg-blue-100 dark:bg-zinc-800">
          <MotionWrapper>
            <section className="grid-col-1 my-20 grid items-center gap-y-10 md:grid-cols-2 md:gap-x-10">
              <img
                className="w-full"
                src={teamImage}
                alt="people working as a team"
              />
              <article>
                <h2 className="mb-8 text-3xl font-bold lg:text-5xl">
                  Open Source
                </h2>
                <p className="leading-loose">
                  This is a fully open source project. Developers are welcome to
                  contribute to{" "}
                  <strong>
                    <em>Voting With Friends</em>
                  </strong>{" "}
                  . Help us grow into the largest social voting community on the
                  web! Visit our{" "}
                  <a
                    href="https://github.com/votingwithfriends/votingwithfriends"
                    target="_blank"
                    className="text-blue-500 underline dark:text-cyan-500"
                  >
                    GitHub
                  </a>{" "}
                  organization page to view open issues and projects.
                </p>
              </article>
            </section>
          </MotionWrapper>
        </article>
      </>
    </Layout>
  );
};

export default Home;
