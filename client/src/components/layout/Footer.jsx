import { IoLogoTwitter, IoLogoGithub } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="w-full bg-slate-100 p-6 dark:bg-deep-darker">
      <div className="mx-auto w-full max-w-screen-xl">
        <article className="text-center md:text-left">
          <section className="flex flex-col gap-y-4">
            <p className="text-lg font-black leading-none">
              Voting With <br className="hidden md:block" />
              Friends
            </p>
            <ul className="flex items-center justify-center gap-x-4 text-2xl md:justify-start">
              <li>
                <a href="https://github.com/votingwithfriends" target="_blank">
                  <IoLogoGithub />
                </a>
              </li>
              <li>
                <a href="/">
                  <IoLogoTwitter />
                </a>
              </li>
            </ul>
          </section>
          <section className="text-center">
            <small>&copy; 2022 VotingWithFriends</small>
          </section>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
