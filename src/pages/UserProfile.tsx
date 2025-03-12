import { useLoaderData } from "react-router-dom";

type Thought = {
  id: string;
  thought: string;
};

type User = {
  id: string;
  firstName: string;
  lastName: string;
  job: string;
  image: string;
  bio: string;
  thoughts: Thought[];
};

export const userLoader = async() => {
  const response = await fetch("https://64553ad5a74f994b3355af73.mockapi.io/users");
  if (!response.ok) throw new Error("Failed to load users");
  return response.json();
}

const UserProfile = () => {
    //It is not clear to me why I need to provide an alternative of an empty array to satisfy App.tsx. If I don't include it, App.tsx throws an error: "Cannot read properties of undefined (reading 'map')"
  const users = (useLoaderData() as User[]) || [];
  
  //const users = useLoaderData() as User[];

  return (
    <div>
      <h1>User Test with React Router Loader</h1>
      {users.map((user) => (
        <div key={user.id}>
          <p>ID: {user.id}</p>
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Job: {user.job}</p>
          {/* <img src={user.image} alt={user.firstName} /> */}
          <h3>Thoughts:</h3>
          <ul>
            {user.thoughts?.map((thought) => (
              <li key={thought.id}>{thought.thought}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
