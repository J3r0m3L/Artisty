import React from 'react';
import './Home.css';


function Home() {
  return (
    <div className='home'>
      {/*Banner*/}
      <div className='home_banner'>
        <div className='home_bannerInfo'>
          <h1>Art is beautiful, Art is life<br />Buy Arts</h1>
          <h2>Browse our collection to find the masterpiece that you desire or <br />Join us today to start selling</h2>
          <div className='group-84'>
            <button class="button1"><p>Explore Artworks</p></button>
            <button class="button2"><p>Start Selling</p></button>
          </div>
        </div>
      </div>

      {/*Search*/}
		  <div class="search">
		  	<div class="rectangle35 ">
				<div class="group87">
					<div class="group86">
				  <div class="rectangle36">
					 <h4> Search by name, artist</h4>
				  </div>
				</div>
					<div class="group85">
				  <div class="rectangle37">
					  <h4> Choose category</h4>
				  </div>
				</div>
					<div class="">
						<button class="search-button"><h4>Search</h4></button>
					</div>
					
				</div>
			  
			</div>
		  </div>
      {/*Featured Artworks*/}
		  <div class="featured-artworks">
			  <h1>Featured Artworks</h1>
			  <button class="button3"><h4>View All</h4></button>
			  <div class="frame-97">
				  <div class="group88">
					  <div class="rectangle38">
					  </div>
				  </div>
				  <div class="group89">
					  <div class="rectangle39">
					  </div>
				  </div>
				  <div class="group90">
					  <div class="rectangle40">
					  </div>
				  </div>
				  <div class="group91">
					  <div class="rectangle41">
					  </div>
				  </div>
			  </div>
		  </div>
      {/*Top Artists*/}
		  <div class="top-artists">
			  <h1>Top Artists</h1>
			  <button class="button3"><h4>View All</h4></button>
			  <div class="frame-98">
				  <div class="group97">
					  <div class="ellipse1">
					  </div>
				  </div>
				  <div class="group98">
					  <div class="ellipse2">
					  </div>
				  </div>
				  <div class="group99">
					  <div class="ellipse3">
					  </div>
				  </div>
				  <div class="group100">
					  <div class="ellipse4">
					  </div>
				  </div>
			  </div>
		  </div>
      {/*Categories*/}
		  <div class="categories">
			  <h1>Categories</h1>
			  <button class="button3"><h4>View All</h4></button>
			  <div class="frame-99">
				  <div class="paint">
					  <div class="paint-img">
					  </div>
				  </div>
				  <div class="oil">
					  <div class="oil-img">
					  </div>
				  </div>
				  <div class="landscape">
					  <div class="landscape-img">
					  </div>
				  </div>
			  </div>
			  
			  <div class="frame-100">
				  <div class="paint2">
					  <div class="paint2-img">
					  </div>
				  </div>
				  <div class="nature">
					  <div class="nature-img">
					  </div>
				  </div>
				  <div class="landscape2">
					  <div class="landscape2-img">
					  </div>
				  </div>
			  </div>
			  
			  <div class="frame-101">
				
			  </div>
			  
			  
		  </div>
		  
    </div>
  );
}

export default Home;
