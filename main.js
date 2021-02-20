var reasons = [
    "My GrandMother",
    "My Father",
    "My Mother",
    "Me",
    "My Brother"
  ];
  var images = [
    "bhvana.jpeg",
    "mahesh.jpeg",
    "hina.jpeg",
    "6.jpeg",
    "IMG-20150522-WA0008.jpg"];
  var i = 0;
  function nextslide()
   {
       document.getElementById("reasontext").innerHTML = reasons[i];
       document.getElementById("album").src = images[i];
       i++;                  
  }
  
  