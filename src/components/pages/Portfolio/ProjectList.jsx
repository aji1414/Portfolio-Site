import YelpCamp from "../../../assets/portfolioThumbnails/YelpCamp.jpg";
import reactionTestGame from "../../../assets/portfolioThumbnails/reactionTestGame.jpg"
import eCommerce from "../../../assets/portfolioThumbnails/eCommerce.jpg";
import movieSandpit from "../../../assets/portfolioThumbnails/movieSandpit.jpg";
import portfolioSite from "../../../assets/portfolioThumbnails/portfolioSite.jpg";
import yahtzee from "../../../assets/portfolioThumbnails/Yahtzee.jpg";


const projectList = [
    { description: "Mock E-commerce shop which accepts Card payments through Stripe API.", name: "E-Commerce Shop", thumbnail: eCommerce, visible: true, link: "https://red-sea-clothing.herokuapp.com/", tech: ["ALL", "REACT", "FIREBASE"] },
    { description: "Movie comparison site where users can also rate and store their favourite movie.s", name: "Movie Review App", thumbnail: movieSandpit, visible: true, link: "https://serene-beyond-29185.herokuapp.com/", tech: ["ALL", "JQUERY", "BOOTSTRAP", "NODE JS", "JAVASCRIPT", "MONGODB"] },
    { description: "Campground review websites where users can add visited campgrounds and comment on others campground reviews.", name: "Yelp Camp Site", thumbnail: YelpCamp, visible: true, link: "https://aqueous-temple-44263.herokuapp.com/", tech: ["ALL", "HTML/CSS", "JQUERY", "NODE JS", "JAVASCRIPT", "MONGODB"] },
    // { description: "Player reacts to five lights which is followed by onboard video of real F1 car starting a race.", name: "F1 Reaction Game", thumbnail: reactionTestGame, visible: true, link: "https://guarded-depths-78983.herokuapp.com/", tech: ["ALL", "HTML/CSS", "JQUERY", "JAVASCRIPT"] },
    { description: "Remake of the popular yahtzee game.", name: "Yahtzee Game", thumbnail: yahtzee, visible: true, link: "https://yahtzee-game-app.herokuapp.com/", tech: ["ALL", "REACT", "BOOTSTRAP"] },
    { description: "Porfolio website displaying my education, experiences and background.", name: "Portfolio Site", thumbnail: portfolioSite, visible: true, link: "/", tech: ["ALL", "REACT", "BOOTSTRAP"] }
];

export default projectList;