import axios from "axios";
import { useQuery } from "react-query";
import Card from "./Card";
import Loading from "./Loading";
const GetDataQuery = () => {
  const { data, isError, isLoading, error } = useQuery(["posts"], () => {
    return axios.get("http://localhost:4000/posts");
  });

  // Handle

  if (isError) return <div>Error :{error.message}</div>;

  return (
    <div>
      <div className="grid-items">
        {isLoading ? (
          <div>
            <Loading />
          </div>
        ) : (
          data.data.map((post) => {
            return <Card key={post.id} data={post} />;
          })
        )}
      </div>
    </div>
  );
};

export default GetDataQuery;
