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
  <div className='p-5 '>
    <h1 className='font-bold text-4xl text-sky-700 mb-5 text-center md:text-left'>About Us</h1>
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
  <h1 className='font-bold text-3xl text-center text-sky-700 mb-0'>Popular Courses</h1>
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
<div className='mt-5 py-10 px-5'>
<h1 className='font-bold text-3xl text-center text-sky-700 mb-8'>Testimonials</h1>
<p className='font-semibold text-2xl text-center mb-18'>What Our Student says</p>
<div className='grid grid-cols-1 md:grid-cols-3 gap-18 md:gap-8'> 
  {/* card-1 */}
  <div className='relative shadow-xl px-6 pb-6  pt-14  flex flex-col items-center rounded-xl border border-sky-500'>
<img src="study.png" className='bg-sky-500 w-22 h-22 p-5 rounded-full absolute -top-10 text-center' />
<p className='font-bold text-lg mb-4 '>Aanya S.</p>
<p className='font-semibold text-gray-600'>“I was a complete beginner, but now I can speak basic Hindi confidently. The classes are fun and interactive!”</p>
<p className='mt-3 text-center'> ⭐⭐⭐⭐⭐</p>
</div>

 {/* card-2 */}
 <div className='relative shadow-xl px-6 pb-6  pt-14  flex flex-col items-center rounded-xl border border-sky-500'>
<img src="study.png" className='bg-sky-500 w-22 h-22 p-5 rounded-full absolute -top-10 text-center' />
<p className='font-bold text-lg mb-4'>Meera K.</p>
<p className='font-semibold text-gray-600'>“The weekly tests and speaking activities helped me Lot. Highly recommend it for learners at any level.”</p>
<p className='mt-3 text-center'> ⭐⭐⭐⭐⭐</p>
</div>

 {/* card-3 */}
 <div className='relative shadow-xl px-6 pb-6  pt-14  flex flex-col items-center rounded-xl border border-sky-500'>
<img src="study.png" className='bg-sky-500 w-22 h-22 p-5 rounded-full absolute -top-10 text-center' />
<p className='font-bold text-lg mb-4'> Rohan M.</p>
<p className='font-semibold text-gray-600'>"This course is perfect for all levels.Teachers are friendly and supportive.I enjoyed every session and learned a lot.”</p>
<p className='mt-3 text-center'> ⭐⭐⭐⭐⭐</p>
</div>
</div>
</div>

{/* Contact form  */}
<div className='py-10 px-5 max-w-2xl mx-auto '> 
  <h1 className='font-bold text-3xl text-center text-sky-700 mb-8'>Contact Us</h1>
  <form className='bg-white shadow-xl rounded-md p-8 space-y-6'  style={{ boxShadow: '0px 0px 6px 2px rgba(0, 0, 0, 0.1)' }}>
  {/* layout-1 */}
  <div>
    <label className='block font-semibold mb-2 text-gray-700'>Name</label>
    <input type='text' placeholder='Enter Your name' className='w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500'/>
  </div>
  
    {/* layout-2 */}
    <div>
    <label className='block font-semibold mb-2 text-gray-700'>Email Id</label>
    <input type='email' placeholder='Enter Your email' className='w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500'/>
  </div>

  <div>
  <label className='block font-semibold mb-2 text-gray-700'>Message</label>
    <textarea rows={5} placeholder='Write a Message' className='w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-sky-500'></textarea>
  </div>
  <button className=' btn w-full py-2 rounded-sm bg-sky-500 text-white' type='submit'>Send Message</button>
  
  </form>
</div>


<footer className='bg-sky-500 pt-10 pb-4 px-6 text-white'>

<div className='max-w-6xl mx-auto grid grid-cols-1  md:grid-cols-4 gap-8 md:gap-20'> 
  {/* column-1 */}
  <div>
  <div className='flex items-center gap-2 '>
      <img src="logo.png" alt="" class="h-10 bg-white rounded-full p-2" />
      <h1 className='font-bold text-lg text-white'>EasyLearn</h1>
    
    </div>
 <p className="text-sm text-gray-200 ">
 Join our fun and interactive classes to learn Hindi easily.From beginners to advanced, we guide every step of the way.Practice speaking, reading, and writing with expert tutors.Start your Hindi journey from the comfort of your home!
      </p>
  </div>
  {/* column-2 */}
  <div>
    <h2 className='font-semibold text-xl mb-3'>Quick Links</h2>
    <ul className='text-sm space-y-2 '>
      <li>< a href="#" className='hover:underline'>Home</a></li>
      <li>< a href="#" className='hover:underline'>About</a></li>
      <li>< a href="#" className='hover:underline'>Course</a></li>
      <li>< a href="#" className='hover:underline'>Testimonials</a></li>
      <li>< a href="#" className='hover:underline'>Contact</a></li>
    </ul>
 </div>

    {/* column-2 */}
    <div>
    <h2 className='font-semibold text-xl mb-3'>Resources</h2>
    <ul className='text-sm space-y-2 '>
    <li><a href="#" className="hover:underline">FAQs</a></li>
        <li><a href="#" className="hover:underline">Student Reviews</a></li>
        <li><a href="#" className="hover:underline">Blog</a></li>
        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
        </ul>
</div>

  <div>
    <h1 className='font-semibold text-xl mb-3'>Get Touch in </h1>
 <p className='text-sm mb-2'> 📧easylearn@gmail.com</p>
 <p className='text-sm mb-2'> 📞 +91 98765 43210</p>
 <p className='text-sm mb-2'> 📍 India</p>
  </div>



</div>

<div className='text-white text-sm text-center pt-4 border-t border-white mt-6 mb-0 pb-0'>@Copyright.All rights reserved. Designed and developed by Alagu Nandhini</div>
</footer>





</>
  );
}

export default App;

