import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetups() {
const [isLoding, setIsLoding] = useState(true);
const [lodingMeetups, setLodingMeetups] = useState([]);

useEffect(()=>{
  fetch("https://rmjhg-react-default-rtdb.firebaseio.com/meetups.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const meetups = [];
    for(const key in data) {
      const meetup = {
        id : key,
        ...data[key]
      }
      meetups.push(meetup);
    }

    setIsLoding(false);
    setLodingMeetups(meetups);
  });
}, [])
  

    if(isLoding) {
      return <section>
        <p>Loding</p>
      </section>
    }
  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={lodingMeetups} />
    </div>
  );
}

export default AllMeetups;
