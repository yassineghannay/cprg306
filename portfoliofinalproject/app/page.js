//page.js

import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="My personal portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold">Yassine Ghannay</h1>
          <p className="mt-2 text-xl">Full Stack Developer</p>
        </div>
      </header>

      <main className="container mx-auto p-8">
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
          <p className="mt-4 text-lg text-gray-600">
            I'm a passionate developer who specializes in web technologies and loves creating dynamic websites using Next.js and Tailwind CSS.
          </p>
        </section>

        <section className="mt-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Projects</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700">Project 1</h3>
              <p className="mt-2 text-gray-500">Description of the project goes here.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700">Project 2</h3>
              <p className="mt-2 text-gray-500">Description of the project goes here.</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700">Project 3</h3>
              <p className="mt-2 text-gray-500">Description of the project goes here.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 Yassine Ghannay. All rights reserved.</p>
      </footer>
    </div>
  )
}
