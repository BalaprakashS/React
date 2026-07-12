import profile from "../assets/profile.jpg";
import "./ProfileCard.css";

function ProfileCard() {
  return (
    <div className="profile-card">
      <img src={profile} alt="Profile" />
      <h2>Bala Prakash</h2>
      <p>React Developer</p>
    </div>
  );
}

export default ProfileCard;