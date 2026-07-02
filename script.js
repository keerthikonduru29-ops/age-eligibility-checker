function checkEligibility() {

    let name = document.getElementById("name").value.trim();
    let age = Number(document.getElementById("age").value);
    let result = document.getElementById("result");

    if (name === "" || document.getElementById("age").value === "") {
        result.innerHTML = "Please enter your name and age.";
        result.style.color = "red";
        return;
    }

    if (age >= 18) {
        result.style.color = "green";
        result.innerHTML = `
            <h3>Hello, ${name}</h3>
            <p>You are eligible to vote.</p>
            <p>You are eligible to drive.</p>
        `;
    } else {
        result.style.color = "red";
        result.innerHTML = `
            <h3>Hello, ${name}</h3>
            <p>You are not eligible to vote.</p>
            <p>You are not eligible to drive.</p>
        `;
    }
}
