import { useQuery } from "@apollo/client";
import { QUERY_ME } from "./queries";

const getMe = () => {
  const { data } = useQuery(QUERY_ME);
  return data;
};

export default getMe;
