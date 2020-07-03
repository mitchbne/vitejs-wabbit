export const App = () => (
  <div className="flex flex-col items-center justify-center w-screen h-screen py-20 px-4 bg-gray-050">
    <div className="w-full max-w-2xl flex flex-col items-center">
      <div className="flex items-center justify-center">
        <img src="https://tailwindui.com/img/tailwindui-logo.svg" className="h-16" alt="Tailwind CSS"/>
      </div>
      <p className="mt-3 text-2xl font-medium text-center text-teal-400">Welcome to ViteJS + Wabbit!</p>
      <p className="block w-full text-base text-center text-gray-400">ViteJS + Preact + TailwindCSS</p>
      <a className="block w-full text-base text-center text-gray-400" href="https://github.com/mitchbne/" rel="noopener noreferrer" target="_blank">@mitchbne</a>
    </div>
  </div>
)

export default null