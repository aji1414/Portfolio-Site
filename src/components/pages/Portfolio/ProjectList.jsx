import YelpCamp from "../../../assets/portfolioThumbnails/YelpCamp.jpg";
import reactionTestGame from "../../../assets/portfolioThumbnails/reactionTestGame.jpg"
import eCommerce from "../../../assets/portfolioThumbnails/eCommerce.jpg";

const projectList = [
    { description: "Mock E-commerce shop which accepts Card payments through Stripe API.", name: "Red Sea E-Commerce Shop", thumbnail: eCommerce, visible: true, link: "", tech: ["ALL", "REACT", "FIREBASE"] },
    { description: "Movie comparison site where users can also rate and store their favourite movie.s", name: "Movie Sandpit Review Site", thumbnail: YelpCamp, visible: true, link: "https://serene-beyond-29185.herokuapp.com/", tech: ["ALL", "JQUERY", "BOOTSTRAP", "NODE JS", "JAVASCRIPT", "MONGODB"] },
    { description: "Campground review websites where users can add visited campgrounds and comment on others campground reviews.", name: "Yelp Camp Review Site", thumbnail: YelpCamp, visible: true, link: "", tech: ["ALL", "HTML/CSS", "JQUERY", "NODE JS", "JAVASCRIPT", "MONGODB"] },
    { description: "Player reacts to five lights which is followed by onboard video of real F1 car starting a race.", name: "F1 Reaction Test Game", thumbnail: reactionTestGame, visible: true, link: "", tech: ["ALL", "HTML/CSS", "JQUERY", "JAVASCRIPT"] },
    { description: "Remake of the popular yahtzee game.", name: "Yahtzee Game", thumbnail: YelpCamp, visible: true, link: "", tech: ["ALL", "REACT", "BOOTSTRAP"] },
    { description: "Porfolio website displaying my education, experiences and background.", name: "Portfolio Site", thumbnail: YelpCamp, visible: true, link: "", tech: ["ALL", "REACT", "BOOTSTRAP"] }
];

export default projectList;