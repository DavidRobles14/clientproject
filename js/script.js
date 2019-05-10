/* global $ */
$(".bigbutton").click(function() {
    $(".bigdickenergy").html("");
    var searchTerm = $('#search-term').val();
    var characterurl = "https://gateway.marvel.com:443/v1/public/characters?name=" + searchTerm + "&apikey=7ddfc03a22217f2c02f40f1f9ceb6368";
    $.ajax({
        url: characterurl,
        method: "GET",
        success: function(response){
            console.log(response);
            var imgSrc = response.data.results[0].thumbnail.path + "." + response.data.results[0].thumbnail.extension;
            var descr = response.data.results[0].description;
            var name = response.data.results[0].name;
            var head = "<h1 class = 'text'>" + name + "</h1> ";
            var ima = "<br/><img src ='" + imgSrc + "' class = 'ad'><br/>";
            var pa = "<p class='text' id='yoot'>" + descr + "</p>";
            console.log(imgSrc);
            $('.bigdickenergy').append(
                head + ima + pa
            );
            
            // $(".bigdickenergy").append(
            //     "<img src ='" + imgSrc + "' class = 'ad'>"
            //     );
        
            // $('.bigdickenergy').append(
            //     "<p id='text'>" + descr + "</p>"
            // );
            
        },
    }); 
});
$("#openheroes").click(function() {
    $(".bigdickenergy").html("");
    $(".bigdickenergy").append("<h1>Some Heroes We Recommend Searching Up:</h1><ul id=herolist><li>Spider-Man</li><li>Thor</li><li>Hulk</li></li>Iceman</li><li>Wolverine</li></ul>");
});
$("#openvillains").click(function() {
    $(".bigdickenergy").html("");
    $(".bigdickenergy").append("<h1>Some Villains We Recommend Searching Up:</h1><ul id=villainlist><li>Doctor Doom</li><li>Galactus</li><li>Loki</li><li>Magneto</li></ul>");
});
$("#openMCU").click(function() {
    $(".everythang").html("");
    $(".oof").html('<img src = "https://4.bp.blogspot.com/-qol-htWQ88I/W-t9m8QikkI/AAAAAAAAQSM/GXm35Vz4Kxk2eBFG7qx3-gVmmnpB3QA-ACLcBGAs/s1600/Screenshot%2B2018-11-14%2Bat%2B02.39.11.png" id="yikes">');
});
$("#openabout").click(function() {
    $(".bigdickenergy").html("");
    $(".bigdickenergy").html('<h2>This project is called "Why is Gamora" created by "We Love You 3000!" We created this page as a guide for those who dont watch Marvel or want to know more about their favorite characters!</h2>');
});