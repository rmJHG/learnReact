import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}

          // meetup={meetup} 으로 넘긴뒤 하나씩 작업해도 똑같은 결과가 나옴
        />
      ))}
    </ul>
  );
}

export default MeetupList;
