import MotionWrapper from "../components/layout/MotionWrapper";
import Layout from "../components/layout/Layout";

//NOTES:
// What you see is a placeholder for a working route. It will be modified to fit our page.

const OpenPolls = () => {
  return (
    <Layout>
      <MotionWrapper>
        <article className="mx-auto w-full max-w-screen-md">
          <h2 className="mb-8 text-xl font-bold md:text-3xl">Polls</h2>
          <ul className="flex flex-col gap-y-4">
            <li className="rounded border border-green-200 transition-all ease-in-out hover:border-green-500">
              <a href="/dashboard/poll/" className="block p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold"></p>
                    <p className="text-gray-600"></p>
                  </div>
                  <p className="rounded bg-green-500 py-2 px-4 text-white">
                    Poll Open
                  </p>
                </div>
              </a>

              <a href="/dashboard/results/" className="block p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold"></p>
                    <p className="text-gray-600"></p>
                  </div>
                  <p className="rounded border-2 border-gray-200 py-2 px-4 text-center text-sm">
                    Poll Closed
                    <br />
                    <span className="font-bold text-green-500">
                      View Results
                    </span>
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </article>
      </MotionWrapper>
    </Layout>
  );
};

export default OpenPolls;