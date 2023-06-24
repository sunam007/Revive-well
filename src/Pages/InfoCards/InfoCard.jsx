import icon from "../../assets/icons/clock.svg";
const InfoCard = ({ card }) => {
  const { title, description, bgColorClass, textColorClass, icon } = card;

  return (
    <div className="card lg:card-side rounded-sm shadow-xl bg-teal-400 m-4 max-w-sm">
      <figure>
        <img src={icon} className="p-4" alt="information card" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">This is title</h2>
        <p>This is a paragraph</p>
      </div>
    </div>
  );
};

export default InfoCard;
