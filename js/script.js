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
            
            console.log(imgSrc);
            $(".bigdickenergy").append(
                "<img src ='" + imgSrc + "'>"
                );
        
            $('.bigdickenergy').append(
                "<p>" + descr + "</p>"
            );
            
        },
    }); 
});