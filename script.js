const userProfile = {
    name: "Adilbek",
    birthYear: 2007,
    isDeveloper: true,
    hobbies: ["Programming", "Football", "Gaming"]
};

const currentYear = new Date().getFullYear();

const age = currentYear - userProfile.birthYear;

const hobbiesCount = userProfile.hobbies.length;

console.log("Name:", userProfile.name);
console.log("Age:", age);
console.log("Hobbies count:", hobbiesCount);

const form = document.getElementById("profileForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const newName = document.getElementById("username").value;
    const newBirthYear = Number(document.getElementById("birthYear").value);

    userProfile.name = newName;
    userProfile.birthYear = newBirthYear;

    const newAge = new Date().getFullYear() - userProfile.birthYear;

    console.log("Updated Profile:", userProfile);
    console.log("Updated Age:", newAge);
}); 

const hobbyList = document.getElementById("hobbyList");
const hobbyInput = document.getElementById("newHobby");

const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

addBtn.addEventListener("click", function() {
    const hobby = hobbyInput.value.trim();

    if (hobby !== "") {
        const li = document.createElement("li");

        li.textContent = hobby;

        hobbyList.appendChild(li);

        userProfile.hobbies.push(hobby);

        hobbyInput.value = "";
    }
});

removeBtn.addEventListener("click", function() {
    if (hobbyList.lastElementChild) {
        hobbyList.lastElementChild.remove();

        userProfile.hobbies.pop();
    }
});