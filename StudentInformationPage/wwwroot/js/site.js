// wwwroot/js/genshin.js

// Character data
var genshinChar = [
    { Title: 'Kazuha', ImageUrl: 'Images/character1.jpeg' },
    { Title: 'Cyno', ImageUrl: 'Images/character2.jfif' },
    { Title: 'Gaming', ImageUrl: 'Images/character3.jfif' },
    { Title: 'Heizou', ImageUrl: 'Images/character4.jfif' },
    { Title: 'Ayaka', ImageUrl: 'Images/character5.jfif' },
    { Title: 'Hutao', ImageUrl: 'Images/character6.jfif' },
    { Title: 'Skirk', ImageUrl: 'Images/character7.jfif' },
    { Title: 'scaramouche', ImageUrl: 'Images/character8.jfif' },
    { Title: 'Childe', ImageUrl: 'Images/character9.jfif' },
    { Title: 'Arlecchino', ImageUrl: 'Images/character10.jfif' },
    { Title: 'Venti', ImageUrl: 'Images/character11.jfif' },
    { Title: 'Zhongli', ImageUrl: 'Images/character12.jfif' },
    { Title: 'Nahida', ImageUrl: 'Images/character13.jfif' },
    { Title: 'Raiden', ImageUrl: 'Images/character14.jfif' },
    { Title: 'Furina', ImageUrl: 'Images/character15.jfif' }
];

$(document).ready(function () {
    renderChars();
    $("#msg").hide();
});

function renderChars() {
    var charsData = "";

    for (var i = 0; i < genshinChar.length; i++) {
        charsData +=
            '<div class="col-4">' +
            '<div class="card" style="margin-bottom:2rem; width:250px; background-color:#BADFDB;">' +
            '<img src="' + genshinChar[i].ImageUrl + '" class="card-img" alt="' + genshinChar[i].Title + '">' +
            '<div>' +
            '<h5 class="card-title" style="text-align:center; padding:1rem; background-color:#BADFDB; box-shadow:0 .5rem 1rem rgba(0,0,0,.2); cursor:pointer;">'
            + genshinChar[i].Title +
            '</h5>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    $("#genshinContainer").append(charsData);
}

function searchBtn() {
    var charsData = "";
    var isFound = false;

    $("#genshinContainer").html("");
    var searchData = $("#searchInput").val();

    for (var i = 0; i < genshinChar.length; i++) {
        if (genshinChar[i].Title.toLowerCase().includes(searchData.toLowerCase())) {
            isFound = true;

            charsData +=
                '<div class="col-4">' +
                '<div class="card" style="margin-bottom:2rem; width:250px; background-color:#BADFDB;">' +
                '<img src="' + genshinChar[i].ImageUrl + '" class="card-img" alt="' + genshinChar[i].Title + '">' +
                '<div>' +
                '<h5 class="card-title" style="text-align:center; padding:1rem; background-color:#BADFDB; box-shadow:0 .5rem 1rem rgba(0,0,0,.2); cursor:pointer;">'
                + genshinChar[i].Title +
                '</h5>' +
                '</div>' +
                '</div>' +
                '</div>';
        }
    }

    if (isFound) {
        $("#genshinContainer").append(charsData);
        $("#msg").hide();
    } else {
        $("#genshinContainer").html("");
        $("#msg").show();
    }
}
