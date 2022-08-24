import { IoLogoTwitter, IoLogoGithub } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="w-full bg-slate-100 p-6 dark:bg-black">
      <div className="mx-auto w-full max-w-screen-xl">
        <article className="text-center">
          <section className="flex flex-col gap-y-4 ">
            <p className="text-lg font-black leading-none lg:text-2xl">
              Voting With Friends
            </p>
            <ul className="flex items-center justify-center gap-x-4 text-2xl">
              <li>
                <a href="https://github.com/votingwithfriends" target="_blank">
                  <IoLogoGithub />
                </a>
              </li>
            </ul>
          </section>
          <section className="mt-6 text-center">
            <small>&copy; 2022 VotingWithFriends</small>
          </section>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
