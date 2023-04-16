import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      // await new Promise(resolve => setTimeout(() => {
      //   resolve();
      // }, 2000));
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error);       
        setIsError(true) 
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (isError) {
    return <h2>Error...</h2>;
  }

  return isLoading ? <h2>Loading...</h2> : <div>
    <img style={{width: '150px', borderradius: '50%'}} src={user.avatar_url} alt={user.name} />
    <h2>{user.name}</h2>
    <h4>works at {user.company}</h4>
    <p>{user.bio}</p>
  </div>;
};
export default MultipleReturnsFetchData;
