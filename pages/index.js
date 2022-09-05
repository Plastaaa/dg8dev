import Carou from '../components/carousel'
import NavBar from '../components/navbar'
import Footer from '../components/footer'

export default function Home(){
  return (
    <div>
      <div>
                {
                    <NavBar/>
                }
            </div>
    <div className="flex flex-wrap overflow-hidden xl:-mx-1 p-4">
      <div className="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-2/6">
      </div>

      <div className="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-3/3">
        <Carou/>
      </div>

      <div className="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-1/6 ">
        <p></p>
      </div>
      <div className="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-3/3 p-4">
        <p>SEARCH</p>
      </div>
      <div className="w-full overflow-hidden xl:my-1 xl:px-1 xl:w-3/3 p-8">
        <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
          <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
          
          </div>
          <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3 rounded-lg p-4">
            <a href='#'>
              <div class="alert shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-error flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Le guide du camping-car</span>
                </div>
                <div class="flex-none">
                </div>
              </div>
            </a>
          </div>
          <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3 rounded-lg p-4">
            <a href='#'>
              <div class="alert shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-error flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Le guide poids lourd</span>
                </div>
                <div class="flex-none">
                </div>
              </div>
            </a>
          </div>
          <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
            
          </div>

          <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3 rounded-lg p-4">
            <a href='#'>
              <div class="alert shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-error flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Le guide des vans et fourgons</span>
                </div>
                <div class="flex-none">
                </div>
              </div>
            </a>
          </div>
          <div className="my-2 px-2 w-1/3 overflow-hidden sm:my-2 sm:px-2 sm:w-1/3 md:my-2 md:px-2 md:w-1/3 lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3 rounded-lg p-4">
            <a href='#'>
              <div class="alert shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-error flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>Le guide de la caravane</span>
                </div>
                <div class="flex-none">
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
  </div>
  <div>
                <Footer/>
            </div>
  </div>
  )
}
