import React from 'react';
import './Bookt.css'
import { SubHeading } from '../../components';

const Bookt = () => (
  <div className="app__bookt" id="book">
    <div class="col">
      <div className="app__bookt-heading">
        <SubHeading title="Book Table" />
        <h1 className="headtext__cormorant">Table Reservation</h1>
        <br></br>
      </div>
      {/* <form action="" method="post"> */}
      <form >
        <br></br>
        <div class="inner">
            <label for="name" class="na"><p className="p__opensans">Name: &nbsp;</p></label>
            <input type="text" id="name" class="in" name="name" placeholder='Enter your name' required/><br></br>
        </div>
        <div class="inner">
          <label for="email" class="na"><p className="p__opensans">Email: &nbsp;</p></label>
          <input type="email" id="email" class="in" name="email" placeholder='Enter your email' required/><br></br>
        </div>
        <div class="inner">
          <label for="phone" class="na"><p className="p__opensans">Phone: </p></label>
          <input type="tel" id="phone" class="in" name="phone" placeholder='Enter your number' required/><br></br>
        </div>
        <div class="inner">
          <label for="date" class="na"><p className="p__opensans">Date: &ensp;</p></label>
          <input type="date" id="date" class="in" name="date" required/><br></br>
        </div>
        <div class="inner">
          <label for="time" class="na"><p className="p__opensans">Time: &ensp;</p></label>
          <input type="time" id="time" name="time" class="in" required/><br></br>
        </div>
        <div class="inner2">
          <label for="guests" class="na"><p className="p__opensans">#Guests: &emsp;&ensp;</p></label>
          <select id="guests" name="guests" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="3">5</option>
            <option value="4">6</option>
            <option value="3">More than 6</option>
          </select>
        </div>
        <div class="inner1">
          <button type="submit" className="custom__button" style={{ marginTop: '2rem' }}>Submit Reservation</button>
        </div>
      </form>
    </div>
  </div>  
);

export default Bookt;