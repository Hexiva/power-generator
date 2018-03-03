function powGen() {
  var powArray = ["a prehenshile tail","super-strength", "super-intelligence", "super-speed", "energy reflection", "shape-shifting (into animal forms)", "energy blasts","pyrokinesis", "hydrokinesis","cryokinesis","telekinesis", "telepathy", "flight", "plant manipulation", "phasing", "invisibility", "magnetokinesis", "breathing underwater", "electrokinesis","super-senses", "turning into liquid", "self-duplication","teleportation", "size control", "healing others", "healing factor", "force field creation", "sonic screaming", "control over light", "control over darkness", "energy vampirism", "illusion creation", "super reflexes", "turning into smoke", "elasticity", "x-ray vision", "earth manipulation", "acid spit", "bone manipulation (self)", "shape-shifting (into an alternate, invulnerable form)", "shape-shifting (into other human faces)", "control over animals", "control over insects", "control over weather", "superpower amplification", "superpower nullification", "empathy", "emotion control","converting sound to light", "metallokinesis","chameleon skin","viewing remote events","psychometry", "high-jumping", "compelling others to tell the truth", "detecting lies", "wings", "acidic bodily fluids (and immunity to acid)", "talking to animals","limited gravity control", "bird anatomy", "reptile anatomy", "wolf anatomy", "insect anatomy", "fish anatomy", "technopathy","claws","long, prehensile hair", "sand/dust control", "venomous fangs", "unhinging your jaw & a mouthful of fangs", "control over sound waves","portal creation","spikes/horns", "temporarily disabling other's senses", "detaching and regenerating limbs","control of one's own density","UV vision", "heat vision", "spider-web secretion","shapeshifting (into a swarm of insects/animal)","portal creation", "stench generation","creation and control of small whirlwinds", "slime creation", "super-tracking", "charging objects with kinetic energy (and making them explode)", "generating small explosive energy blasts", "control over the wind", "eyes that change color with one's mood", "color manipulation (changing the color of something)", "Psychic constructs", "astral projection", "speaking and understanding every known language","super-aiming skills", "copying others' powers", "fear projection", "transmuting elements", "friction manipulation","wall crawling", "locating and identifying other people with superpowers", "tentacles sprouting from one's back", "control over pain", "object animation", "radio wave reception & transmission", "probability manipulation (minor)"]
  var powNum = Math.floor(Math.random() * powArray.length);
  var power = powArray[powNum];
  return power;
}

// function timeGen() {
//   var timeRaw =  Math.random() * (180 - 15) + 15;
//   var timeInt = parseInt(timeRaw)
//   console.log(timeInt);
//   if (timeInt === 60) {
//     var time = "1 hour";
//   } else if (timeInt === 120) {
//     var time = "2 hours";
//   } else if (timeInt === 180) {
//     var time = "3 hours";
//   }  else if (timeInt > 60 && timeInt < 120) {
//     var minutes = timeInt - 60;
//     var time = "1 hour and " + minutes + " minutes"
//   } else if (timeInt > 120) {
//     var minutes = timeInt - 120;
//     var time = "2 hours and " + minutes + " minutes"
//   } else {
//     var time = timeInt + " minutes"
//   }
//   console.log(time);
//   return time;
//
// }

function replyGen() {
  var replyRaw =  Math.random() * (30 - 10) + 10;
  var reply = parseInt(replyRaw) + " replies";
  return reply;
}



$(document).ready(function() {
  $('#genbutton').click(function(){
    event.preventDefault();


    power = powGen();
    time = replyGen();


    $("#power").text(power);
    $("#time").text(time);
    $("#box").fadeIn().css("display","inline-block");
    $("#powerbutton").fadeIn();
    $("#timebutton").fadeIn();


  });
  $('#powerbutton').click(function(){
    power = powGen();
    $("#power").text(power);
  });

  $('#timebutton').click(function(){
    time = replyGen();
    $("#time").text(time);
  });
});
