var text;
document.querySelector("#btnSubmit").addEventListener("click", function () {
    text = document.querySelector("#txtValue").value;
    document.querySelector("p").innerHTML = "Entered Value: " + text;
    Grading(text);
});

function Grading(text) {
    text = Math.floor(text / 5);
    var select = document.querySelector("#result");
    switch (text) {
        case 10:
            select.innerHTML = "Passed. Letter Grade: D  " + text;
            break;
        case 11:
            select.innerHTML = "D";
            break;
        case 12:
            select.innerHTML = "D+";
            break;
        case 13:
            select.innerHTML = "C";
            break;
        case 14:
            select.innerHTML = "C+";
            break;
        case 15:
            select.innerHTML = "B";
            break;
        case 16:
            select.innerHTML = "B+";
            break;
        case 17:
            select.innerHTML = "A";
            break;
        case 18:
        case 19:
        case 20:
            select.innerHTML = "A+";
            break;
        default:
            select.innerHTML = "Failed " + text * 5;
    }
}

