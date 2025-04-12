import './App.css'
import './index.css'


function App() {
  return (
<>

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
        <li href="#"><a className='sm:hover:text-sky-500'>Home</a></li>
        <li href="#"><a className='sm:hover:text-sky-500'>Course</a></li>
        <li href="#"><a className='sm:hover:text-sky-500'>About</a></li>
        <li href="#"><a className='sm:hover:text-sky-500'>Testimonials</a></li>
        <li href="#"><a className='sm:hover:text-sky-500'>Contact</a></li>
       

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

{/* About us */}
<div className='bg-white py-10 px-4 md:px-16'>
<div className='grid grid-cols-1 md:grid-cols-2 items-center gap-2'>
  <img src="about-2.png" className='' />
  <div className='p-5'>
    <h1 className='font-bold text-4xl text-gray-800'>About Us</h1>
    <p className='text-gray-500 leading-relaxed md:text-lg'>Learn Hindi in a fun and easy way with our online classes.
We offer step-by-step lessons for all levels – from beginner to advanced.
Practice speaking, reading, and writing Hindi with expert guidance.
Flexible timings and study materials make learning simple.
Start your Hindi journey with us today!</p>
  </div>


</div>
</div>


{/* course details */}
<div className=' mt-5 p-4'>
  <h1 className='font-bold text-2xl text-center'>Popular Courses</h1>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-10'>
    <div className='bg-white p-4 shadow-md rounded'>
      <img src="hindi.png"/>
      <div className='flex flex-col items-left'> 
      <h2 className='text-lg font-semibold mt-3 '>Spoken hindi</h2>
      <p className='text-gray-400 text-md'>Timing: 6.00 PM -7.00 PM</p>
      <button className='btn bg-sky-500 text-white mt-3 flex '>Book Now</button>
      </div>
    </div>

    <div className='bg-white p-4 shadow rounded'>
      <img src="parichaya-2.png"/>
      <div className='flex flex-col items-left'> 
      <h2 className='text-lg font-semibold mt-3 '>Parichaya</h2>
      <p className='text-gray-400 text-md'>Timing: 6.00 PM -7.00 PM</p>
      <button className='btn bg-sky-500 text-white mt-3 flex '>Book Now</button>
      </div>
    </div>

    <div className='bg-white p-4 shadow rounded'>
      <img src="prathamic.png"/>
      <div className='flex flex-col items-left'> 
      <h2 className='text-lg font-semibold mt-3 '>Prathamic</h2>
      <p className='text-gray-400 text-md'>Timing: 6.00 PM -7.00 PM</p>
      <button className='btn bg-sky-500 text-white mt-3 flex '>Book Now</button>
      </div>
    </div>

    <div className='bg-white p-4 shadow rounded'>
      <img src="madhyama.png"/>
      <div className='flex flex-col items-left'> 
      <h2 className='text-lg font-semibold mt-3 '>Madhyama</h2>
      <p className='text-gray-400 text-md'>Timing: 6.00 PM -7.00 PM</p>
      <button className='btn bg-sky-500 text-white mt-3 flex '>Book Now</button>
      </div>
    </div>

    <div className='bg-white p-4 shadow rounded'>
      <img src="rashtrabasha.png"/>
      <div className='flex flex-col items-left'> 
      <h2 className='text-lg font-semibold mt-3 '>Rhashtrabasa</h2>
      <p className='text-gray-400 text-md'>Timing: 6.00 PM -7.00 PM</p>
      <button className='btn bg-sky-500 text-white mt-3 flex '>Book Now</button>
      </div>
     
    </div>
</div>
</div>

{/* what we offer */}
<div className='py-10 px-5 bg-gray-100'>
  <h1 className='font-bold text-3xl text-center text-sky-700 mb-8'>What We Offer</h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>

{/* card-1 */}
<div className='bg-white rounded-xl shadow hover:shadow-lg transition-all p-6  flex flex-col  items-center text-center'> 
  <img src="online-learning.png" className='bg-sky-500 w-18 h-18 mb-3 p-3 rounded-full'/>
  <h1 className='text-sky-600 text-lg font-semibold'> Live Interactive Classes</h1>
  <p className="text-gray-500 text-sm mt-2">Engaging sessions with experienced Hindi tutors.</p>
</div>

{/* card-2 */}
<div className='bg-white rounded-xl shadow hover:shadow-lg transition-all p-6  flex flex-col  items-center text-center'> 
  <img src="microphone.png" className='bg-sky-500 w-18 h-18 mb-3 p-3 rounded-full'/>
  <h1 className='text-sky-600 text-lg font-semibold'>Speaking Activities</h1>
  <p className="text-gray-500 text-sm mt-2">Practice real-time conversations to build fluency</p>
</div>

{/* card-3 */}
<div className='bg-white rounded-xl shadow hover:shadow-lg transition-all p-6  flex flex-col  items-center text-center'> 
  <img src="test.png" className='bg-sky-500 w-18 h-18 mb-3 p-3 rounded-full'/>
  <h1 className='text-sky-600 text-lg font-semibold'>Weekly Hindi Tests</h1>
  <p className="text-gray-500 text-sm mt-2">Track your progress with regular assessments</p>
</div>

{/* card-4 */}
<div className='bg-white rounded-xl shadow hover:shadow-lg transition-all p-6  flex flex-col  items-center text-center'> 
  <img src="book.png" className='bg-sky-500 w-18 h-18 mb-3 p-3 rounded-full'/>
  <h1 className='text-sky-600 text-lg font-semibold'> Free Study Materials</h1>
  <p className="text-gray-500 text-sm mt-2">Access helpful notes and PDFs anytime.</p>
</div>

</div>

</div>

{/* testimonials */}
<div>
<h1 class></h1>

</div>





</>
  );
}

export default App;

