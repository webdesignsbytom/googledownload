import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { ToggleContext } from '../../context/ToggleContext';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);



  const downloadFromGoogleDrive = () => {
    console.log('downloadFromGoogleDrive');
  };

  return (
    <div className='grid main__bg font-poppins h-screen grid-rows-reg overflow-hidden max-h-screen'>
      <Navbar />
      {/* Main */}
      <main className='grid h-full p-1 items-center justify-center'>
        <section>
          <div className='grid text-center outline outline-2 outline-black rounded-xl bg-yellow-400 px-6 py-8'>
            <article className=''>
              <div>
                <h1 className='text-3xl font-poppins font-bold'>
                  Google Download
                </h1>
              </div>
              <div className='mt-4 grid'></div>
            </article>
            {/* cta */}
            <div className='mt-6'>
              <button
                id='/design'
                onClick={downloadFromGoogleDrive}
                className='px-4 py-2 bg-white outline-black outline outline-2 active:scale-95 no__highlights hover:bg-yellow-100 rounded-xl'
              >
                Download Build
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
