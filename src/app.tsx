import React from "react"

export const App = (): React.ReactElement => (
  <div className="flex flex-col items-center justify-center w-screen h-screen py-20 px-4 bg-white">
    <div className="w-full max-w-2xl flex flex-col items-center">
      <div className="flex items-center justify-center">
        <img alt="Tailwind CSS" className="h-16" src="https://tailwindui.com/img/tailwindui-logo.svg" />
      </div>
      <p className="mt-3 text-2xl font-medium text-center text-teal-600">Welcome to ViteJS-Wabbit!</p>
      <p className="block w-full text-base text-center text-gray-600">ViteJS + React + TailwindCSS</p>
      <a className="block w-full text-base text-center text-gray-600" href="https://github.com/mitchbne/" rel="noopener noreferrer" target="_blank">@mitchbne</a>
    </div>
  </div>
)

export default null
