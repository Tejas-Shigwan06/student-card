const students = [
    {
        name: "Tejas Shigwan",
        className: "SY Computer Engineering",
        email: "tejas@example.com"
    },
    {
        name: "Rahul Patil",
        className: "SY Computer Engineering",
        email: "rahul@example.com"
    }
];

const container = document.getElementById("studentContainer");

students.forEach(student => {

    const card = document.createElement("div");

    card.className = "card";

    card.innerHTML = `
        <h2>${student.name}</h2>
        <p><b>Class:</b> ${student.className}</p>
        <p><b>Email:</b> ${student.email}</p>
    `;

    container.appendChild(card);
});
