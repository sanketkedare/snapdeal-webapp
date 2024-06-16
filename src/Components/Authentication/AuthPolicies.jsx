import React from 'react'
import { policies } from "../../Utils/policies";


const AuthPolicies = () => {
  return (
    <div className="w-[900px] h-[400px] absolute -bottom-40 hidden -right-96 bg-gray-200  rounded-xl p-4 z-20 lg:flex items-center px-4">
          <div className="ml-5">
            {policies.map((policy) => (
              <div key={policy.des} className="flex gap-4 my-10 items-center">
                <div className="w-[50px] rounded-full overflow-hidden shadow-lg">
                  <img alt={policy.img} src={policy.img} className="m-auto" />
                </div>
                <div>
                  <h1 className="font-semibold uppercase"> {policy.title}</h1>
                  <p className="text-gray-500 w-[60%] text-sm">{policy.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
  )
}

export default AuthPolicies
