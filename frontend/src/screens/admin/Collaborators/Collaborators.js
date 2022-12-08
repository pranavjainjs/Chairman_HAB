import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const CollaboratorsScreen = () => {
    const collaborators = [{"name" : "Sample name", "designation" : "Sample Designation", "universityName" : "Sample university name", "countryName" : "Sample country name"}]
    return (
        <>
          <h1 className="text-3xl text-black pb-6">Collaborators</h1>
          <div className="mt-6">
            <Link
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              to={`/admin/collaborators/add`}
            >
              Add Collaborators
            </Link>
          </div>
          <div className="w-full mt-6 overflow-auto">
            <div className="bg-white">
              <table className="min-w-full leading-normal">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Designation
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      University Name
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Country Name
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Edit
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {collaborators.length !== 0 &&
                    collaborators.map((data, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-left py-3 px-4">{data?.name}</td>
                          <td className="text-left py-3 px-4">
                          {data?.designation}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.universityName}
                          </td>
                          <td className="image-left py-3 px-4">
                          {data?.countryName}
                          </td>
                          <td className="text-left py-3 px-4">
                            <Link
                              to={{
                                pathname: `/admin/collaborators/${data?.id}`,
                              }}
                              state={data}
                            >
                              <button className="hover:text-blue-500">Edit</button>
                            </Link>
                          </td>
                          <td className="text-left py-3 px-4">
                            <button
                              className="hover:text-red-500"
                            //   onClick={() =>
                            //     dispatch()
                            //   }
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    };
    
    export default CollaboratorsScreen;
