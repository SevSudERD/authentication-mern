export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
        Welcome to My Authentication App!
      </h1>
      <p className="text-gray-800 mb-5">
        This application is a comprehensive full-stack web project built with
        the MERN (MongoDB, Express, React, Node.js) stack. It features
        user authentication allowing for registration, login, and logout, and
        secures certain routes so they can only be accessed by authenticated users.
      </p>
      <p className="text-gray-800 mb-5">
        On the front-end, we utilize React along with React Router for seamless
        client-side navigation. The back-end is powered by Node.js and Express,
        with MongoDB serving as our database. Authentication processes are managed
        using JSON Web Tokens (JWT).
      </p>
      <p className="text-gray-800 mb-5">
        This project serves as a robust template for developing full-stack web
        applications with authentication functionalities using the MERN stack. 
        You are welcome to adapt and extend it for your own development needs!
      </p>
    </div>
  );
}
