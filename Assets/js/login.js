// function to validate data on signup form
function signup(event){
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("first_name", firstName);
    localStorage.setItem("last_name", lastName);
    localStorage.setItem("Is_email", email);
    localStorage.setItem("pass_word", password);

    function redirect(){
        window.location.href="../pages/courses.html"
    }
    redirect()
}


// login functionality
function login(event){
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    localStorage.setItem("username", username);
    localStorage.setItem("pass_word", password);

    function redirect(){
        window.location.href="../pages/courses.html"
    }
    redirect()

}


