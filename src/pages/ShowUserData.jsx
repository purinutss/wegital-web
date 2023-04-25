import React, { useEffect, useState } from "react";

import AddDataContainer from "../features/user/AddDataContainer";
import DeleteDataContainer from "../features/user/DeleteDataContainer";
import UpdateDataContainer from "../features/user/UpdateDataContainer";
import LogoutButton from "../features/auth/LogoutButton";
import useAuth from "../hooks/useAuth";
import * as proportionApi from "../apis/proportionApi";

export default function ShowUserData() {
  const { authenticatedUser } = useAuth();
  const [proportions, setProportions] = useState();

  const fetchProportion = async () => {
    try {
      const response = await proportionApi.getProportionByUserId();
      setProportions(response.data.userProportion);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProportion();
  }, []);

  return (
    <>
      <div className="p-6 flex flex-col items-center w-full h-screen">
        <div className="w-[80%]">
          <div className="mb-2 flex justify-between">
            <div className="flex text-lg items-end">
              <div className="font-bold">Name : &nbsp;</div>
              <div>
                {authenticatedUser.firstName} {authenticatedUser.lastName}
              </div>
            </div>
            <div className="flex gap-3">
              <AddDataContainer />
              <LogoutButton />
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                <tr className="text-center">
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Height (Cm.)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Weight (Kg.)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Waist (Inc.)
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {proportions &&
                  proportions.map((proportion) => (
                    <tr key={proportion.id} className="bg-slate-50 text-center">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {proportion?.date}
                      </th>
                      <td className="px-6 py-4">{proportion?.height}</td>
                      <td className="px-6 py-4">{proportion?.weight}</td>
                      <td className="px-6 py-4">{proportion?.waist}</td>
                      <td className="px-3 py-4">
                        <div className="flex gap-3 justify-center">
                          <UpdateDataContainer
                            proportion={proportion}
                            fetchProportion={() => fetchProportion()}
                          />
                          <DeleteDataContainer
                            proportionId={proportion.id}
                            fetchProportion={() => fetchProportion()}
                          />
                        </div>
                      </td>
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
