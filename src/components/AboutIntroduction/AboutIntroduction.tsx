import './AboutIntroduction.scss';
import authorPicture from "../../assets/pictures/portfolio-author.webp";

function AboutIntroduction(){
  return (
    <div className="introduction__main">
      <div className="introduction__title">
        <h1>Développeur <span className="highlight">Web</span> en alternance</h1>
        <p>Passionné par le <span className="highlight">code</span>, le <span className="highlight">design</span> et depuis peu par <span className="highlight">l'audiovisuel</span></p>
      </div>
      <img src={authorPicture} alt="Autoportait de Yan Rechtenstein" className="introduction__img" />
    </div>
  );
};

export default AboutIntroduction;
