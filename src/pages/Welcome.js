import React from 'react'

export const Welcome = () => {
  return (
    
    <>
    <div>Welcome</div>
{/* Hero Section */}
<div className='text-white'>
    <div class="py-20"
    >
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-2 text-white">
          Smart Health Monitoring Wristwatch!
        </h2>
        <h3 class="text-2xl mb-8 text-gray-200">
        Get the latest official news, trailers, and insights on a galaxy of Star Wars games and apps.
        </h3>

        <button class="bg-gray-500 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
          Pre Order
        </button>
      </div>
    </div>

    {/* Features Section */}
    <section class="container mx-auto px-6 p-10">
      <h2 class="text-4xl font-bold text-center text-gray-300 mb-8">
      The Latest | Star Wars Games + Apps
      </h2>
      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-300 font-bold mb-3">Virtual Reality </h4>
          <p class="mb-8">Discover new virtual reality and immersive entertainment experiences from ILMxLAB and beyond.</p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="assets/health.svg" alt="Monitoring" />
        </div>
      </div>

      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <img src="assets/report.svg" alt="Reporting" />
        </div>
        <div class="w-full md:w-1/2 pl-10">
          <h4 class="text-3xl text-gray-300 font-bold mb-3"> STREAM STAR WARS ON DISNEY+  </h4>
          <p class=" mb-8">ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+.</p>
        </div>
      </div>

      <div class="flex items-center flex-wrap mb-20">
        <div class="w-full md:w-1/2">
          <h4 class="text-3xl text-gray-300 font-bold mb-3">More than robots</h4>
          <p class=" mb-8">High school robotics teams participating in FIRST come together in a competition unlike any other. Now streaming, only on Disney+! </p>
        </div>
        <div class="w-full md:w-1/2">
          <img src="assets/sync.svg" alt="Syncing" />
        </div>
      </div>
    </section>
    {/* Testimonials Section */}
    <section class="bg-gray-100">
      <div class="container mx-auto px-6 py-20">
        <h2 class="text-4xl font-bold text-center text-gray-300 mb-8">
        ALL OF YOUR STAR WARS FAVORITES NOW STREAMING ON DISNEY+
        </h2>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/3 px-2 mb-4">
            <div class="bg-white rounded shadow py-2">
              <p class="text-gray-300 text-base px-6 mb-5">TODO </p>
              <p class=" text-xs md:text-sm px-6">TODO</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2 mb-4">
            <div class="bg-white rounded shadow py-2">
              <p class="text-gray-300 text-base px-6 mb-5">TODO.</p>
              <p class=" text-xs md:text-sm px-6">TODO</p>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-2 mb-4">
            <div class="bg-white rounded shadow py-2">
              <p class="text-gray-300 text-base px-6 mb-5">TODO.</p>
              <p class=" text-xs md:text-sm px-6">TODO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Call to Action */}
    <section className='bg-indigo-400'>
      <div class="container mx-auto px-6 text-center py-20">
        <h2 class="mb-6 text-4xl font-bold text-center text-white">
          TODO
        </h2>
        <h3 class="my-4 text-2xl text-white">
          TODO
        </h3>
        <button
          class="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
        >
          Register
        </button>
      </div>
    </section>
    </div>
    </>
  )
}
