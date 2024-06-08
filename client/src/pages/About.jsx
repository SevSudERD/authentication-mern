export default function About() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About</h1>
      <p className='mb-4 text-slate-700'>
        Welcome to the About page of our MERN stack application! This application
        showcases the power and flexibility of the MongoDB, Express, React, and Node.js 
        technologies combined to create a robust full-stack web application.
      </p>
      <p className='mb-4 text-slate-700'>
        Our application is designed with authentication features that allow users 
        to sign up, log in, and log out. It ensures that only authenticated users 
        have access to certain protected routes, enhancing security and user management.
      </p>
      <p className='mb-4 text-slate-700'>
        On the front-end, we leverage the capabilities of React to build a dynamic 
        and responsive user interface. React Router is utilized for seamless 
        client-side routing, providing a smooth user experience.
      </p>
      <p className='mb-4 text-slate-700'>
        The back-end is powered by Node.js and Express, offering a robust server-side 
        framework that efficiently handles our application logic and API requests. 
        We use MongoDB as our database, which is known for its scalability and flexibility 
        in handling JSON-like documents.
      </p>
      <p className='mb-4 text-slate-700'>
        Authentication is a critical component of our application, implemented using 
        JSON Web Tokens (JWT). This ensures secure and stateless authentication, 
        allowing our application to verify user identities effectively.
      </p>
      <p className='mb-4 text-slate-700'>
        This project is a comprehensive starting point for developers looking to build 
        full-stack web applications with robust authentication systems using the MERN stack. 
        Whether you are a seasoned developer or just getting started, feel free to use this 
        as a template for your own projects and expand upon its features to suit your needs.
      </p>
      <p className='mb-4 text-slate-700'>
        We hope this application provides a valuable resource for understanding the 
        integration of front-end and back-end technologies to create a seamless and 
        secure user experience. Happy coding!
      </p>
    </div>
  );
}
