/**
 * Gage Gutmann and Cole deSilva
 * CPSC 314 Final Project
 */

function getCharacters(ids){
    let endpoint = "https://rickandmortyapi.com/api/";
    let characterString = "character/" + array;
    let url = endpoint + characterString;

    let request = new XMLHttpRequest();
    request.open('GET', url,true);

    request.onload = function(){
    let data = JSON.parse(this.response);

    for(i = 0; i< data.length; i++){
    console.log("ID: " + data[i].id +
    "\nName: " + data[i].name +
    "\nStatus: " + data[i].status +
    "\nSpecies " + data[i].species);
    }
}

    request.send();

    fetch(url).then(function(result) {
    return result.json();
    }).then(function(json) {
    console.log(json);
    });
}

function getCharacterByFilter(){
    let endpoint = "https://rickandmortyapi.com/api/";
    //let searchText = document.getElementById("searchapi").value;
    let search = "morty";
    let characterString = "character/?name=" + search;
    let url = endpoint + characterString;

    let cardImage = "searchcardimg";
    let cardTitle = "searchcardtitle";
    let cardText = "searchcardtext";
    let cardItem1 = "item1searchcard";
    let cardItem2 = "item2searchcard";
    let cardItem3 = "item3searchcard";
    let cardItem4 = "item4searchcard";
    let cardItem5 = "item5searchcard";

    let request = new XMLHttpRequest();
    request.open('GET', url,true);

    request.onload = function(){
    let data = JSON.parse(this.response);

        for(i = 1; i<= 10; i++){
            let image = cardImage + i;
            let title = cardTitle + i;
            let text = cardText + i;
            let item1 = cardItem1 + i;
            let item2 = cardItem2 + i;
            let item3 = cardItem3 + i;
            let item4 = cardItem4 + i;
            let item5 = cardItem5 + i;

            document.getElementById(image).src = data.results[i-1].image;
            document.getElementById(title).innerHTML = data.results[i-1].name;
            document.getElementById(text).innerHTML = "Character ID: " + data.results[i-1].id;
            document.getElementById(item1).innerHTML = "First Appearance: Episode " + data.results[i-1].episode[0].substring(40,42);
            document.getElementById(item2).innerHTML = "Origin: " + data.results[i-1].origin.name;
            document.getElementById(item3).innerHTML = "Gender: " + data.results[i-1].gender;
            document.getElementById(item4).innerHTML = "Species: " + data.results[i-1].species;
            document.getElementById(item5).innerHTML = "Status: " + data.results[i-1].status;


        }
    }

    request.send();

    fetch(url).then(function(result) {
        return result.json();
        }).then(function(json) {
        console.log(json);
        });


}

function clickSubmit(){
    document.getElementById("submitsearch").addEventListener("click",function(){
        let endpoint = "https://rickandmortyapi.com/api/";
        let searchText = document.getElementById("searchapi").value;
        let search = "rick";
        let characterString = "character/?name=" + searchText;
        let url = endpoint + characterString;
    
        let cardImage = "searchcardimg";
        let cardTitle = "searchcardtitle";
        let cardText = "searchcardtext";
        let cardItem1 = "item1searchcard";
        let cardItem2 = "item2searchcard";
        let cardItem3 = "item3searchcard";
        let cardItem4 = "item4searchcard";
        let cardItem5 = "item5searchcard";
    
        let request = new XMLHttpRequest();
        request.open('GET', url,true);
    
        request.onload = function(){
        let data = JSON.parse(this.response);
    
            for(i = 1; i<= 10; i++){
                let image = cardImage + i;
                let title = cardTitle + i;
                let text = cardText + i;
                let item1 = cardItem1 + i;
                let item2 = cardItem2 + i;
                let item3 = cardItem3 + i;
                let item4 = cardItem4 + i;
                let item5 = cardItem5 + i;

    
                document.getElementById(image).src = data.results[i-1].image;
                document.getElementById(title).innerHTML = data.results[i-1].name;
                document.getElementById(text).innerHTML = "Character ID: " + data.results[i-1].id;
                document.getElementById(item1).innerHTML = "First Appearance: Episode " + data.results[i-1].episode[0].substring(40,42);
                document.getElementById(item2).innerHTML = "Origin: " + data.results[i-1].origin.name;
                document.getElementById(item3).innerHTML = "Gender: " + data.results[i-1].gender;
                document.getElementById(item4).innerHTML = "Species: " + data.results[i-1].species;
                document.getElementById(item5).innerHTML = "Status: " + data.results[i-1].status;
                
    
            }
        }
    
        request.send();
    });
}


function randomCards(){
let endpoint = "https://rickandmortyapi.com/api/";
    let characterString = "character/";

    for(i = 0; i < 5; i++){
        let x = Math.floor((Math.random() * 493)+1);
        characterString = characterString + x +",";
    }

    let y = Math.floor((Math.random() * 493)+1);
    characterString = characterString + y;
    let url = endpoint + characterString;

    let cardImage = "homecardimg";
    let cardTitle = "homecardtitle";
    let cardText = "homecardtext";
    let cardItem1 = "item1homecard";
    let cardItem2 = "item2homecard";
    let cardItem3 = "item3homecard";
    let cardItem4 = "item4homecard";
    let cardItem5 = "item5homecard";


    let request = new XMLHttpRequest();
    request.open('GET', url,true);

    request.onload = function(){
    let data = JSON.parse(this.response);

    for(i = 1; i<= data.length; i++){
        let image = cardImage + i;
        let title = cardTitle + i;
        let text = cardText + i;
        let item1 = cardItem1 + i;
        let item2 = cardItem2 + i;
        let item3 = cardItem3 + i;
        let item4 = cardItem4 + i;
        let item5 = cardItem5 + i;

        document.getElementById(image).src = data[i-1].image;
        document.getElementById(title).innerHTML = data[i-1].name;
        document.getElementById(text).innerHTML = "Character ID: " + data[i-1].id;
        document.getElementById(item1).innerHTML = "First Appearance: Episode " + data[i-1].episode[0].substring(40,42);
        document.getElementById(item2).innerHTML = "Origin: " + data[i-1].origin.name;
        document.getElementById(item3).innerHTML = "Gender: " + data[i-1].gender;
        document.getElementById(item4).innerHTML = "Species: " + data[i-1].species;
        document.getElementById(item5).innerHTML = "Status: " + data[i-1].status;


    }
}

    request.send();
}