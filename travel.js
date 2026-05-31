let user = document.getElementById("user");
let logBtn = document.getElementById("logBtn");
let submit = document.getElementById("submit");
let bestPlace = document.querySelectorAll(".places");
let connect = document.getElementById("connect");
let package = document.querySelectorAll(".planCard");

let bar = document.getElementById("bar");
let ul = document.querySelector("ul");

bar.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";

    }
})

package.forEach(function(curPlace){
    curPlace.addEventListener("click", function(){
        window.open("https://www.airbnb.co.in/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&location_search=MIN_MAP_BOUNDS&monthly_start_date=2023-10-01&monthly_length=3&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&search_type=category_change&category_tag=Tag%3A677", "_blank")
    })
})

//user
user.addEventListener("click", function(){
    document.querySelector(".loginPage").classList.toggle("active1");
})

logBtn.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" || pass.value == ""){
        alert("Enter Details");
    }else{
        alert("Thanks : You Logged IN");

        document
            .querySelector(".loginPage")
            .classList.remove("active1");

        email.value = "";
        pass.value = "";
    }
})

//book
submit.addEventListener("click", function(){
    let destination = document.getElementById("destination");
    let start= document.getElementById("start");
    let end = document.getElementById("end");

    if(destination.value == "" || start.value == "" || end.value == "" ){
        alert("Please Enter Full Details");
    }else{
        alert(destination.value+" Tour Booked");
        destination.value = "";
start.value = "";
end.value = "";
    }
})
//contact
connect.addEventListener("click", function(){
    let name = document.getElementById("name");
    let phone = document.getElementById("phone");

    if(name.value == "" || phone.value == "" ){
        alert("Please Enter the required detail");
    }else{
        alert(" Thankyou for contacing us");
        
        name.value = "";
phone.value = "";
    }
})

//nav color
let bestPlaces = document.getElementById("bestPlaces");
let packages = document.getElementById("packages");
let books = document.getElementById("books");
let contacts = document.getElementById("contacts");

bestPlaces.addEventListener("click", ()=>{
    bestPlaces.style.color="rgb(130, 17, 49)";
    packages.style.color="white";
    books.style.color="white";
    contacts.style.color="white";
})
packages.addEventListener("click", ()=>{
    packages.style.color="rgb(130, 17, 49)";
    bestPlaces.style.color="white";
    books.style.color="white";
    contacts.style.color="white";
})
books.addEventListener("click", ()=>{
    books.style.color="rgb(130, 17, 49)";
    packages.style.color="white";
    bestPlaces.style.color="white";
    contacts.style.color="white";
})
contacts.addEventListener("click", ()=>{
    contacts.style.color="rgb(130, 17, 49)";
    packages.style.color="white";
    books.style.color="white";
    bestPlaces.style.color="white";
})

// icon.addEventListener("click", ()=>{
//     ul.classList.toggle("showData");
    
//     if(ul.className == "showData")
//     {
//         document.getElementById("bar").className= "fa-solid fa-xmark";
//     }
//     else
//     {
//         document.getElementById("bar").className= "fa-solid fa-bars";

//     }
// })