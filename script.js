const programs = [
    {
        title: "Digital Rights",
        description: "Learn your online rights and freedom of expression."
    },
    {
        title: "Data Protection",
        description: "Understand how to protect your personal information."
    },
    {
        title: "Online Safety",
        description: "Stay safe from cyberbullying and online harassment."
    },
    {
        title: "Fact Checking",
        description: "Fight misinformation with verification skills."
    },
    {
        title: "Psychosocial Support",
        description: "Access emotional and mental health support."
    }
];

const container = document.getElementById("programContainer");

programs.forEach(program => {
    const card = document.createElement("div");
    card.classList.add("program-card");

    card.innerHTML = `
        <h3>${program.title}</h3>
        <p>${program.description}</p>
    `;

    container.appendChild(card);
});

function scrollToPrograms() {
    document.getElementById("programs").scrollIntoView({
        behavior: "smooth"
    });
}
