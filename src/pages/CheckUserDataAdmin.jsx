import React, { useEffect, useState } from "react";

import * as userApi from "../apis/userApi";
import { useParams } from "react-router-dom";
import LineChart from "../components/LineChart";

export default function CheckUserDataAdmin() {
  const [user, setUser] = useState({});
  const [proportions, setProportions] = useState([]);
  console.log(proportions);
  const { userId } = useParams();
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

  const fetchUser = async () => {
    try {
      const response = await userApi.getUserById(userId);
      const sortedProportions = response.data.user?.Proportions.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      setUser(response.data.user);
      setProportions(sortedProportions);
      setProportionData({
        labels: response.data.user?.Proportions.slice(startIndex, startIndex + itemsPerPage)
          .map((data) => data.date)
          .reverse(),
        datasets: [
          {
            label: "Weight",
            data: sortedProportions
              .slice(startIndex, startIndex + itemsPerPage)
              .map((data) => data.weight)
              .reverse(),
            backgroundColor: "rgb(0,102,204)",
            borderColor: "rgb(0,102,204)",
            borderWidth: 2
          }
        ]
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [startIndex, userId]);

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
          <div className="my-5 w-[100%]">
            <LineChart chartData={proportionData} />
          </div>
          <div className="my-5">
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
                  {proportions.slice(startIndex, startIndex + itemsPerPage).map((proportion) => (
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
