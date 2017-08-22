var famousPeople = [
{
  title: "Comedian",
  name: "Jerry Seinfeld",
  bio: "Jerry is generally completely indifferent to what goes on in his friends' lives, seeing their misery as merely an entertaining distraction, as well as an opportunity for joke material. He often plays along with their hare-brained schemes, even encouraging them, often just to see them fail.",
  image: "http://4.bp.blogspot.com/-ZV5Q0zmo_qA/T53xuWFO1_I/AAAAAAAAA8I/4HL_wpBK-XQ/s1600/Jerry+Seinfeld.jpg",
  lifespan: {
    birth: "April 29, 1954",
    death: "-"
   }
  }, 
 {
  title: "Editor",
  name: "Elaine Benes",
  bio: "Elaine is normally intelligent and assertive, but also quite superficial. She's 'one of the boys', and despite the troubles they go through as a group, she remains the closest female friend to the main male cast throughout the series. Her traits are usually edgy and neurotic and she has a tendency to easily get angry with almost everybody.",
  image: "http://www.media4.hw-static.com/wp-content/uploads/julia-louis-dreyfus-seinfeld_56776613-900x1112-900x1112.jpeg",
  lifespan: {
    birth: "January 13, 1961",
    death: "-"
   }
  },
 {
  title: "Unemployed",
  name: "George Costanza",
  bio: "George is neurotic, self-loathing and dominated by his parents, yet also prone to occasional periods of overconfidence that invariably arise at the worst possible time. Throughout Seinfeld's first season, George is depicted as moderately intelligent – at one point, he mentions an intellectual interest in the Civil War and, in some early episodes, appears almost as a mentor to Jerry – but becomes less sophisticated, to the point of being too lazy even to read a ninety-page book (Breakfast at Tiffany's), preferring to watch the movie adaptation at a stranger's house instead.",
  image: "https://theinsecuresnake.files.wordpress.com/2015/06/george_costanza.jpg",
  lifespan: {
    birth: "September 23, 1959",
    death: "-"
   }
  },
  {
  title: "Entrepreneur",
  name: "Cosmo Kramer",
  bio: "Though eccentric, Kramer is more often than not caring, friendly and kind-hearted; he often goes out of his way to help total strangers, and tries to get his friends to also help others and to do the right thing even when they do not want to. He is confident in his own unique way of doing things, yet he can be neurotic and high-strung. His quirkiness, strange body movements and frequent gibberish mutterings have become his trademark.",
  image: "http://www.benchfly.com/blog/wp-content/uploads/2011/07/Kramer.jpg",
  lifespan: {
    birth: "July 24, 1949",
    death: "-"
   }
  }
];

var peopleContainer = document.getElementById('people-container');
var textInput = document.getElementById('textInput');

	
for(var i = 0; i < famousPeople.length; i++) {
	var currentPerson = famousPeople[i];
	var newPerson = `<div class="personCard">
			              <h1>${currentPerson.name}</h1>
                    <h3>${currentPerson.title}</h3>
                    <div><img src="${currentPerson.image}"></div>
		                <div class="bio">${currentPerson.bio}</div> 
			              <footer>Birth: ${currentPerson.lifespan.birth}    Death: ${currentPerson.lifespan.death}</footer>
			             </div>`;
  peopleContainer.innerHTML += newPerson;
 };
 
var personCard = document.getElementsByClassName("personCard");
var bio = document.getElementsByClassName("bio");

  for(var i = 0; i < famousPeople.length; i++){
    if(i % 2 === 0) {
      personCard[i].classList.add("yellow");
    }else {
      personCard[i].classList.add("blue");
    }
    personCard[i].addEventListener("click", function(event) {
      event.currentTarget.classList.add("dotted");
    })
    personCard[i].addEventListener("click", function() {
      textInput.focus();
    })
    bio[i].addEventListener("onkeyup", function() {
      bio.innerHTML = textInput.value;
    })
  };


// textInput.onkeyup = function() {
//   var bio = document.getElementsByClassName("bio");
//   bio.innerHTML = this.value;
// }








