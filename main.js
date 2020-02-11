/// I want to display my functionality in the div called clock so i wrote the
/// the following code to do that
let timeDisplay = document.getElementById("clock")

//i created a function called renewTime now ill begin working on the more of the
//functionality

function renewTime() {
    /// after doing reseach i found a cool method to display the date and time
    // in a givne time zone, i going to give it a shot

    // I created and variable by using "Date()" I created and a new date object
    // i then used the .toLocaleString because in the MDN docs, its say its purpose
    // was to "return a string with a language sensitive representation of this date".
    let dateString = new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles"
    })

    let formattedString = dateString.replace(", ", " - ")
    timeDisplay.innerHTML = formattedString
}

// i want to call this function every 1 secound
setInterval(renewTime, 1000)