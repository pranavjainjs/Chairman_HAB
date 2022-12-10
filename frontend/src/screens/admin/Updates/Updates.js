import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

const UpdatesScreencreen = () => {
    const updates = [{"title" : "xyz", "description" : "Sample description"}]
    return (
        <>
          <h1 className="text-3xl text-black pb-6">Updates</h1>
          <div className="mt-6">
            <Link
              className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
              to={`/admin/updates/add`}
            >
              Add Updates
            </Link>
          </div>
          <div className="w-full mt-6 overflow-auto">
            <div className="bg-white">
              <table className="min-w-full leading-normal">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                      Description
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
                  {updates.length !== 0 &&
                    updates.map((data, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="text-left py-3 px-4">{data?.title}</td>
                          <td className="text-left py-3 px-4">
                          {data?.description}
                          </td>
                          <td className="text-left py-3 px-4">
                            <Link
                              to={{
                                pathname: `/admin/updates/${data?.id}`,
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
    
    export default UpdatesScreencreen;
