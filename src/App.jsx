import './App.css'
import './index.css'


function App() {
  return (
<>
{/* <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24 " stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-100 p-2 shadow">
         <li><a>Home</a></li>
      <li><a>Course</a></li>
      <li><a>About</a></li>
      <li><a>Testimonials</a></li>
      <li><a>Contact</a></li>
      </ul>
    </div>
    <a className=" text-xl font-bold">EasyLearn</a>
  </div>
  <div className="navbar-center hidden md:flex ">
    <ul className="menu menu-horizontal px-1 text-md">
      <li><a>Home</a></li>
      <li><a>Course</a></li>
      <li><a>About</a></li>
      <li><a>Testimonials</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>

</div> */}

<div className='navbar bg-base-100 shadow-sm'> 

  <header className='w-full bg-base-100 text-black  flex flex-col sm:flex-row items-center sm:justify-around sm:gap-25' > 
    <div className='flex items-center gap-2 '>
      <img src="logo.png" alt="" class="h-10" />
      <h1 className='font-bold text-lg'>EasyLearn</h1>
    </div>
    {/* link */}
    <nav>
      <ul className='flex gap-4 bg-sky-500 sm:bg-white text-white sm:text-black py-2 px-4 sm:py-0 sm:px-0 rounded-full sm:rounded-none'>
        <li href="#"><a>home</a></li>
        <li href="#"><a>Course</a></li>
        <li href="#"><a>About</a></li>
        <li href="#"><a>Testimonials</a></li>
        <li href="#"><a>contact</a></li>
       

      </ul>


    </nav>


  </header>
</div>






</>
  );
}

export default App;

