import React, { useEffect, useState } from "react";

import * as userApi from "../apis/userApi";
import { useParams } from "react-router-dom";

export default function CheckUserDataAdmin() {
  const [user, setUser] = useState({});
  const [proportions, setProportions] = useState([]);
  // console.log(proportions);
  // console.log(user);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await userApi.getUserById(userId);
        setUser(response.data.user);
        setProportions(response.data.user.Proportions);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <div className="p-6 flex flex-col items-center w-full">
        <div className="w-[80%]">
          <div className="mb-2">
            <div className="flex text-lg">
              <div className="font-bold">Name : &nbsp;</div>
              <div>
                {user.firstName} {user.lastName}
              </div>
            </div>
            <div className="flex text-lg">
              <div className="font-bold">Telephone : &nbsp;</div>
              <div>{user.telephoneNumber}</div>
            </div>
            <div className="flex text-lg">
              <div className="font-bold">CitizenID : &nbsp;</div>
              <div>{user.citizenId}</div>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                <tr className="text-center">
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Height
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Weight
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Waist
                  </th>
                </tr>
              </thead>
              <tbody>
                {proportions.map((proportion) => (
                  <tr key={proportion?.id} className="bg-slate-50 text-center">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {proportion?.date}
                    </th>
                    <td className="px-6 py-4">{proportion?.height}</td>
                    <td className="px-6 py-4">{proportion?.weight}</td>
                    <td className="px-6 py-4">{proportion?.waist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
