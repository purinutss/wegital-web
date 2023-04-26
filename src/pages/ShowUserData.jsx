import React, { useEffect, useState } from "react";

import AddDataContainer from "../features/user/AddDataContainer";
import DeleteDataContainer from "../features/user/DeleteDataContainer";
import UpdateDataContainer from "../features/user/UpdateDataContainer";
import LogoutButton from "../features/auth/LogoutButton";
import useAuth from "../hooks/useAuth";
import * as proportionApi from "../apis/proportionApi";
import LineChart from "../components/LineChart";

export default function ShowUserData() {
  const { authenticatedUser } = useAuth();
  const [proportions, setProportions] = useState();
  const [proportionData, setProportionData] = useState({
    labels: [],
    datasets: [
      {
        labels: "Weight Data",
        data: []
      }
    ]
  });
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 5;

  const handleNextPage = () => {
    setStartIndex(startIndex + itemsPerPage);
  };

  const handlePreviousPage = () => {
    setStartIndex(Math.max(startIndex - itemsPerPage, 0));
  };

  const fetchProportion = async () => {
    try {
      const response = await proportionApi.getProportionByUserId();
      setProportions(response.data.userProportion);
      setProportionData({
        labels: response.data.userProportion.map((data) => data.date).reverse(),
        datasets: [
          {
            label: "Weight Data",
            data: response.data.userProportion.map((data) => data.weight).reverse(),
            backgroundColor: "salmon",
            borderColor: "salmon",
            borderWidth: 2
          }
        ]
      });
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
          <div className="my-5">
            <LineChart chartData={proportionData} />
          </div>
          <div className="my-5">
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
                    proportions.slice(startIndex, startIndex + itemsPerPage).map((proportion) => (
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
            <div className="flex justify-end gap-5 ">
              {startIndex !== 0 && (
                <button
                  disabled={startIndex === 0}
                  onClick={handlePreviousPage}
                  className="hover:font-semibold hover:underline"
                >
                  Previous
                </button>
              )}
              {startIndex + itemsPerPage <= (proportions?.length ?? 0) && (
                <button
                  disabled={startIndex + itemsPerPage >= (proportions?.length ?? 0)} // cannot be true when the sum of startIndex and itemsPerPage is greater than or equal to the length of the proportions array
                  onClick={handleNextPage}
                  className="hover:font-semibold hover:underline"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
