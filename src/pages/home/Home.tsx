import balloons from "../../assets/images/ballons.png";
import Prop2 from "../../assets/images/props-2.svg";
import Prop3 from "../../assets/images/props-3.svg";
import heroImg from "@/assets/images/hero-img.png";

import "./Home.css";

const Home = () => {
  const marqueeCourse = [
    "Zara",
    "Tommy Hilfiger",
    "Lenovo",
    "Gucci",
    "Under Armour",
    "L'Oréals",
    "Dell",
    "Huawei ",
    "Puma",
    "Gucci",
    "Under Armour",
    "Levi’s",
    "Philips",
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section props-wrapper py-3">
        <div className="container items-center h-full relative">
          <div className="flex mx-auto item-center border-dotted border-slate-300 border-3 rounded-lg pl-7 pr-3">
            <div className="her-img flex-1 w-[70%]">
              <img className="w-full" src={heroImg} alt="Hero Image" />
            </div>
            <div className="flex flex-col w-[30%] pl-5">
              <div className="uppercase pb-6 font-bold">
                <span>Get upto</span>
                <span className="block text-5xl">
                  <span className="text-primary">50%</span> off
                </span>
              </div>
              <h1 className="text-3 title font-nohemi capitalize flex align-center pb-3">
                Just
                <span className="font-black slider ml-3">
                  <span className="slide1 text-orange-400">Click Away</span>
                  <span className="slide2 text-orange-400">Shop Smart</span>
                  <span className="slide3 text-orange-400">Live Better</span>
                </span>
              </h1>
              <p className="text-slate-400">
                Discover a better way to shop — stylish, simple, and delivered
                to your door
              </p>
            </div>
            {/* <div className="hero-team mt-16">
              <h6 className="text-black">
                Guided by mentors who turn
                <span className="text-primary font-medium">"I can't"</span> into
                <span className="text-primary-700 font-medium">
                  "Watch me do this!”
                </span>
              </h6>
              <div className="hero-team-member circle-wrap mt-4">
                <div className="icon-tooltip">
                  <div className="circle circle-md">
                    <img src={MentorAdarsha} alt="" />
                  </div>
                  <div className="card-tooltip text-black">
                    <h4 className="text-black font-bold">Adarsha Lamichhane</h4>
                    <span>UI/UX Mentor</span>
                  </div>
                </div>
                <div className="icon-tooltip">
                  <div className="circle circle-md">
                    <img src={MentorSujit} alt="" />
                  </div>
                  <div className="card-tooltip text-black">
                    <h4 className="text-black font-bold">Sujit Thapa</h4>
                    <span>Data Science Mentor</span>
                  </div>
                </div>
                <div className="icon-tooltip">
                  <div className="circle circle-md">
                    <img src={MentorManoj} alt="" />
                  </div>
                  <div className="card-tooltip text-black">
                    <h4 className="text-black font-bold">Manoj Kumar Das</h4>
                    <span>UI/UX Mentor</span>
                  </div>
                </div>
                <div className="icon-tooltip">
                  <div className="circle circle-md">
                    <img src={MentorAdarsha} alt="" />
                  </div>
                  <div className="card-tooltip text-black">
                    <h4 className="text-black font-bold">Adarsha Lamichhane</h4>
                    <span>UI/UX Mentor</span>
                  </div>
                </div>
                <div className="icon-tooltip">
                  <div className="circle circle-md">
                    <img src={MentorSujit} alt="" />
                  </div>
                  <div className="card-tooltip text-black">
                    <h4 className="text-black font-bold">Sujit Thapa</h4>
                    <span>Data Science Mentor</span>
                  </div>
                </div>

                <div className="icon-tooltip">
                  <div className="circle circle-md">+8</div>
                </div>
              </div>
            </div> */}
          </div>

          {/* <div className="props props-2"></div> */}
          {/* <div className="props props-4"></div> */}
          <div className="props ">
            <img src={balloons} alt="balloons" />
          </div>
        </div>
      </section>
      {/* Marquee Section */}
      <section>
        <div className="list-marquee text-center item-center container">
          {[...Array(3)].map((_, index) => (
            <ul key={index} className="list-none list text-gray-400 font-bold">
              {marqueeCourse.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ))}
        </div>
      </section>
      {/* Videos Section */}
      <section className="mt-10">
        <div className="container">
          <h3>Flash Sale</h3>
          <div className="cards flex flex-wrap justify-between mt-5">
            <div className="card border">
              <img src={Prop2} alt="Product 1" />
              <h4>Product 1</h4>
              <p>Description of Product 1</p>
            </div>
            <div className="card border">
              <img src={Prop3} alt="Product 2" />
              <h4>Product 2</h4>
              <p>Description of Product 2</p>
            </div>
            <div className="card border">
              <img src={Prop2} alt="Product 1" />
              <h4>Product 1</h4>
              <p>Description of Product 1</p>
            </div>
            <div className="card border">
              <img src={Prop3} alt="Product 2" />
              <h4>Product 2</h4>
              <p>Description of Product 2</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="mid-block text-center mx-auto mt-10">
            <h2 className="text-2 title">
              Your Wishlist
              <span className="text-primary font-bold ml-2">
                Delivered Fast
              </span>
            </h2>
            <p>Why Pay More? Shop Online for Less</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
