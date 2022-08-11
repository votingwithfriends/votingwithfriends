import { IoLogoTwitter, IoLogoGithub } from "react-icons/io5";
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-deep-darker w-full p-6">
      <div className="w-full max-w-screen-xl mx-auto">
        <article className="text-center md:text-left">
          <section className="flex flex-col gap-y-4">
            <p className="font-black text-lg">
              Voting With <br className="hidden md:block" />
              Friends
            </p>
            <ul className="flex justify-center md:justify-start items-center text-2xl gap-x-4">
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
