import './App.css';
// import {AiOutlineClose} from 'react-icons/ai'
import {VscAccount} from 'react-icons/vsc'
import {GoSearch} from 'react-icons/go'
function App() {
  return (
    <div className="m-0 p-0 ">

    {/* <div className="fixed w-full h-15  bg-gray-500">

    <ul className="flex flex-row justify-center items-center list-type-none ">

    <li className="mx-4  py-2 tracking-wider  text-sm hover:font-bold">Home</li>
    <li className="mx-4 py-2 tracking-wider  text-sm hover:font-bold">About</li>
    <li className="mx-4 py-2 tracking-wider  text-sm hover:font-bold">Contact</li>
    <li className="mx-4 py-2 tracking-wider  text-sm hover:font-bold">Info</li>
    

    </ul>


    </div> */}
  

<div className="fixed shrink-2 md:w-[20%] sm:w-[18%] ">
<div className="h-screen rounded-xl bg-[#043f98] ">

<a href='/img'>
<img src="tailwind.png" alt='' className='w-10' />
</a>



{/* <div >
<AiOutlineClose className='rounded-xl shadow-xl text-' size={25} />
</div> */}

<div className='fixed font-mono'>

<div className=" pr-20 m-4 p-5 rounded-2xl hover:bg-blue-900 sm:p-4">
  <VscAccount className='  inline 'size={30} />
  <a href="/" className='px-3 text-white '>Dashboard</a>
</div>
<div className=" pt-4 pr-20 m-4  p-5 rounded-2xl hover:bg-blue-900 sm:p-4">
<VscAccount className=' inline'size={30} />
    <a href="/" className='px-3 text-white '>Team</a>
</div>
<div className="pt-5 m-4 pr-20  p-5 rounded-2xl hover:bg-blue-900 sm:p-4">
<VscAccount className=' inline'size={30} />

    <a href="/" className='px-3 text-white'>Project</a>
</div>
<div className="pt-5 pr-24 m-4 p-5 rounded-2xl hover:bg-blue-900 sm:p-4">
<VscAccount className=' inline'size={30} />
    <a href="/" className='px-3 text-white '>Calendar</a>
</div>
</div>

</div>

</div>
     <div className="relative text-center left-10 px-5 mb-10 mx-20">
     <GoSearch className='relative inline left-7'/>
    <input type='text' className='ml-0 m-2  p-10 bg-[#0001] w-70 hover:w-[65%] h-20 rounded-lg  border-blue focus:border-rose-600' placeholder='Search here ...' />
   </div>
<div className='relative font-bold mb-4 text-2xl indent-7 font-mono left-80'>
    <h1 className='indent-14'>Dashboard</h1>
   </div> 
   <div className='relative grid grid-cols-2 justify-center left-80 ml-20'>

  <div className=' h-40 w-80 my-2 bg-[#0001] hover:bg-[#043f98]'>
  <p className='relative mt-14 text-center'>HEY BUDDY</p>
  </div>
  <div className='h-40 w-80 my-2 bg-[#0001] hover:bg-[#043f98]'>
  <p className='mt-14 text-center'>HEY BUDDY</p>
  </div>
  <div className='h-40 w-80 bg-[#0001] hover:bg-[#043f98]'>
  <p className='mt-14 text-center'>HEY BUDDY</p>
  </div>
  <div className='h-40 w-80 bg-[#0001] hover:bg-[#043f98]'>
  <p className='mt-14 text-center'>HEY BUDDY</p>
  </div>
   </div>
  
     {/* <div className='relative text-center bg-grey-200 dark'>
      <p>hi buddy</p>
     </div> */}
    </div>
  );
}

export default App;
