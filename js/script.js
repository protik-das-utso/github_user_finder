let searchUser = document.getElementById("username");
let searchBtn = document.getElementById("search");
let ui = new UI();

searchBtn.addEventListener("click", search_func);

function search_func(e) {
    e.preventDefault();
    let userText = searchUser.value;
    if (userText != "") {
        fetch(`https://api.github.com/users/${searchUser.value}`)
            .then(function (res) {
                return res.json(); // return the promise
            })
            .then((data) => {
                if (data.message == "Not Found") {
                    //show alert
                    console.log("No User Found");
                } else {
                    //show profile
                    ui.showProfile(data);
                }
            })
            .catch(function (error) {
                console.log("Error:", error);
            });
    } else {
        //clear profile
    }

    console.log(searchUser.value);
}
