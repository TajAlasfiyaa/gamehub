import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
}
const UserInfo = ({ userID }: { userID: number }) => {
  const [user, setUser] = useState<User>({});
  useEffect(() => {
    apiClient.get<User>(`/users/${userID}`).then((user) => {
      setUser(user.data);
    });
  }, [userID]);
  return (
    <>
      <button className="btn btn-primary">
        <a href="/">Home</a>
      </button>
      <h1>User Information </h1>
      <h2>Name : {user.name}</h2>
    </>
  );
};

export default UserInfo;
const tag = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
