var siteName = document.getElementById("nameInput");
var siteUrl = document.getElementById("urlInput");

var savedSites = [];

if(localStorage.getItem("myStorage") != null) {
    savedSites = localStorage.getItem("myStorage");
    savedSites = JSON.parse(savedSites);
    displaySites();
}


function siteMade(){
    var nameValue = siteName.value;
    var urlValue = siteUrl.value;

    if( nameValue == "" ){
        document.getElementById("name-alert").style.display = "block";
    }
    if (urlValue == ""){
        document.getElementById("url-alert").style.display = "block";
    }
    else
    {
        var siteInfo = {name: nameValue, location: urlValue};
        savedSites.push(siteInfo);
        localStorage.setItem("myStorage", JSON.stringify(savedSites));
    }

    clearInputs();
    displaySites();
}

function clearInputs(){
    siteName.value = "";
    siteUrl.value = "";
}

function displaySites(){
    var siteCard = "";

    for (var i = 0 ; i < savedSites.length ; i++) {
        siteCard += 
        `
            <div class="col-11 saved-sites d-flex justify-content-start align-items-center">
                <h3> `+ savedSites[i].name +` </h3>
                <div class="button-container text-start">
                    <a href="`+ savedSites[i].location +`" target="-blank" class="btn me-1 blue-btn rounded">visit</a>
                    <button onclick="deletSite(`+ i +`)" class="btn delete-btn rounded ms-1">Delete</button>
                </div>
            </div>
        `
    }
    document.getElementById("bookmarker-parent").innerHTML = siteCard;
}

function deletSite(siteIndex){
    savedSites.splice(siteIndex , 1);

    localStorage.setItem("myStorage", JSON.stringify(savedSites));
    displaySites();
}
