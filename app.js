

const people = [
    {name: "frodo Baggins", image: "FRODO BAGGINS.jpg", description: "He is the main character of Lord of the Rings trilogy. A award winnning book and film series.", link:"https://en.wikipedia.org/wiki/Frodo_Baggins"},
    {name: "bugs bunny", image: "BUGS BUNNY.jpg", description: "He is the main character of the looney tunes cartoon series (he is a bunny).", link:"https://en.wikipedia.org/wiki/Bugs_Bunny"},
    {name: "Micheal Jordan", image:"Micheal Jordan.jpg", description: "He is the best basketball player of all time, a 6x NBA champion and finals MVP!", link:"https://en.wikipedia.org/wiki/Michael_Jordan"},
    {name: "Denzel Washington", image:"Denzel Washington.jpg", description: "Oscar winning Hollywood actor, some of his best films are Malcolm X, Training Day, John Q", link: "https://en.wikipedia.org/wiki/Denzel_Washington"},
    {name: "Bill Gates", image:"Bill Gates.jpg", description: "He is the founder of Microsoft, arguably the biggest tech company in history, he is also a college dropout and top 5 richest men in the world!", link: "https://en.wikipedia.org/wiki/Bill_Gates"},
    {name: "Justin Trudeau", image:"Justin Trudeau.jpg", description: "Former Prime Minister of Canada, recently stepped down as prime minsiter!", link: "https://en.wikipedia.org/wiki/Justin_Trudeau"}
  ];
  
  const showRandom = () => {
    const index = Math.floor(Math.random() * people.length);
    const celeb = people[index];
  
    document.querySelector("img").src = celeb.image;
    document.querySelector(".name").innerText = celeb.name;
    document.querySelector(".para2").innerText = celeb.description;
    document.querySelector(".link").href = celeb.link;
  };
  
  const showDescription = () => {
    if (document.querySelector(".name").style.display === "none") {
      document.querySelector(".name").style.display = "block";
      document.querySelector(".details").style.display = "block";
      document.querySelector(".link").style.display = "block";
    } else {
      document.querySelector(".name").style.display = "none";
      document.querySelector(".details").style.display = "none";
      document.querySelector(".link").style.display = "none";
    }
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    showRandom();
  
    document.querySelector(".name").style.display = "none";
    document.querySelector(".details").style.display = "none";
    document.querySelector(".link").style.display = "none";
  
    document.querySelector(".refresh").addEventListener("click", showRandom);
    document.querySelector(".image").addEventListener("click", showDescription);
  });
  




  