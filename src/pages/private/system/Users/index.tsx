import { User, ScrollShadow } from '@nextui-org/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import VirtualizedList from './VirtualizedList';

type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  dob: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  const items = Array.from(
    { length: 10000 },
    (_, index) => `Item ${index + 1}`
  );

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get('https://randomuser.me/api/?results=15');

      if (!res || !res.data || res?.data?.results?.length === 0)
        throw new Error('No user found!');

      setUsers(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <VirtualizedList items={items} itemHeight={30} containerHeight={400} />
      </div>

      <ScrollShadow className="w-[300px] h-[400px] px-3">
        <div className="flex flex-col gap-2">
          {users.map((user) => (
            <User
              key={user.login.uuid}
              name={`${user.name.title} ${user.name.first} ${user.name.last}`}
              avatarProps={{
                src: user.picture.thumbnail,
              }}
              className="w-full border border-neutral-300 flex justify-start p-1"
            />
          ))}
        </div>
      </ScrollShadow>
    </div>
  );
};

export default Users;
