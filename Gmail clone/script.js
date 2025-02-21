document.addEventListener("DOMContentLoaded", () => {
  const emailListContent = document.querySelector(".email-list-content");
  const composeButton = document.querySelector(".compose-button");

  const emails = [
    {
      sender: "John Doe",
      subject: "Meeting tomorrow",
      content: "Hi, let's meet tomorrow at 2 PM.",
      date: "Mar 15",
    },
    {
      sender: "Jane Smith",
      subject: "Project update",
      content: "Here's the latest update on our project.",
      date: "Mar 14",
    },
    {
      sender: "Bob Johnson",
      subject: "Lunch next week?",
      content: "Would you like to grab lunch next week?",
      date: "Mar 13",
    },
    {
      sender: "Alice Brown",
      subject: "New product launch",
      content: "Exciting news! We're launching a new product.",
      date: "Mar 12",
    },
    {
      sender: "Charlie Wilson",
      subject: "Vacation plans",
      content: "I'll be out of office next week for vacation.",
      date: "Mar 11",
    },
  ];

  function createEmailItem(email) {
    const emailItem = document.createElement("div");
    emailItem.classList.add("email-item");
    emailItem.innerHTML = `
              <input type="checkbox">
              <span class="material-icons star">star_border</span>
              <span class="sender">${email.sender}</span>
              <span class="subject">${email.subject} - ${email.content}</span>
              <span class="date">${email.date}</span>
          `;
    return emailItem;
  }

  emails.forEach((email) => {
    emailListContent.appendChild(createEmailItem(email));
  });

  composeButton.addEventListener("click", () => {
    alert("Compose functionality not implemented in this demo.");
  });

  emailListContent.addEventListener("click", (e) => {
    if (e.target.classList.contains("star")) {
      e.target.textContent =
        e.target.textContent === "star_border" ? "star" : "star_border";
      e.target.style.color =
        e.target.textContent === "star" ? "#f2c960" : "#f1f3f4";
    }
  });
});
