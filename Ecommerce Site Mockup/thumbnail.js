//Gage Gutmann
//This takes care of changing the thumbnail images when clicked

function changeImage() {
    document.getElementById("Ostrich1").addEventListener("click", function(){
        document.getElementById("OstrichMain").src = "Images/Ostrich1.jpg";
    });

    document.getElementById("Ostrich2").addEventListener("click", function(){
        document.getElementById("OstrichMain").src = "Images/Ostrich2.jpg";
    });

    document.getElementById("Ostrich3").addEventListener("click", function(){
        document.getElementById("OstrichMain").src = "Images/Ostrich3.jpg";
    });

}