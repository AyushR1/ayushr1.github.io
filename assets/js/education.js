AOS.init();

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "CBSE National Science Exhibition",
    image: "assets/images/education-page/cbsena.png",
    description: "National Finalist",
  },
  {
    title: "CBSE Regional Science Exhibition",
    image: "assets/images/education-page/cbsere.png",
    description: "Winner",
  },
  {
    title: "Inter School Science Exhibition",
    image: "assets/images/education-page/Railway.png",
    description: "Winner",
  },
  {
    title: "Science Model Exhibition",
    image: "assets/images/education-page/vyapar.png",
    description: "Winner",
  },
  {
    title: "CG Bilaspur Carnival Science Fair 2018",
    image: "assets/images/education-page/cgc.png",
    description: "Winner",
  },
  {
    title: "Far East Zonal Badminton Tournament",
    image: "assets/images/education-page/fezb.png",
    description: "Semi-Finalist",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);
