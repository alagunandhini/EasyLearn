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
{/* header */}
  <header className='w-full bg-base-100 text-black  flex flex-col sm:flex-row items-center sm:justify-around sm:gap-25' > 
    <div className='flex items-center gap-2 '>
      <img src="logo.png" alt="" class="h-10" />
      <h1 className='font-bold text-lg'>EasyLearn</h1>
    </div>
    {/* link */}
    <nav>
      <ul className='flex gap-4 bg-sky-500 sm:bg-white text-white sm:text-black py-2 px-4 sm:py-0 sm:px-0 rounded-full sm:rounded-none'>
        <li href="#"><a>Home</a></li>
        <li href="#"><a>Course</a></li>
        <li href="#"><a>About</a></li>
        <li href="#"><a>Testimonials</a></li>
        <li href="#"><a>Contact</a></li>
       

      </ul>
      </nav>
 </header>
</div>
{/* container-Home */}
<div className='w-full min-h-screen lg:min-h-[90vh] bg-sky-500 grid grid-cols-1 md:grid-cols-2 items-center m-0 p-0'> 
  <div className='text-center md:text-left p-10 lg:ps-20 '>
    <h1 className=' text-white font-bold text-4xl md:text-5xl lg:text-6xl leading-tight '>Welcome to Learn Hindi!</h1>
    <p className='text-sky-100 mt-4 text-base md:text-lg'>Discover the beauty of the Hindi language.
Learn to speak, read, and write with easy lessons.
Start your Hindi journey today—fun, simple, and free!

</p>
    <button className='bg-white rounded-full py-2 px-5 mt-4 text-sky-600 font-semibold btn btn-md'>Join Now</button>
  </div>
  <div className='flex justify-center'>
  <img src='learn.png' class='w-full max-w-xs md:max-w-sm lg:max-w-lg h-auto object-contain '/>
  </div>

</div>






</>
  );
}

export default App;

