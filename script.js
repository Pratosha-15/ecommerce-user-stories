let stories = [
    {
        id: "US01",
        role: "Customer",
        action: "create an account",
        benefit: "purchase products and manage orders",
        priority: "High",
        points: 3,
        status: "To Do",
        criteria: [
            "Customer can enter name, email and password.",
            "Email should be unique.",
            "Valid details should create an account."
        ]
    },

    {
        id: "US02",
        role: "Customer",
        action: "search for products",
        benefit: "quickly find the product I need",
        priority: "High",
        points: 3,
        status: "To Do",
        criteria: [
            "Customer can enter a product name.",
            "Matching products should be displayed.",
            "No-result message should be displayed when products are unavailable."
        ]
    },

    {
        id: "US03",
        role: "Customer",
        action: "view product details",
        benefit: "decide whether to purchase the product",
        priority: "High",
        points: 2,
        status: "Done",
        criteria: [
            "Product image should be displayed.",
            "Price and description should be displayed.",
            "Stock availability should be shown."
        ]
    },

    {
        id: "US04",
        role: "Customer",
        action: "add products to my cart",
        benefit: "purchase multiple products together",
        priority: "High",
        points: 5,
        status: "In Progress",
        criteria: [
            "Customer can add an available product.",
            "Cart displays product name, quantity and price.",
            "Customer can increase or decrease quantity."
        ]
    },

    {
        id: "US05",
        role: "Customer",
        action: "place an order",
        benefit: "purchase the selected products",
        priority: "High",
        points: 5,
        status: "To Do",
        criteria: [
            "Customer must provide a delivery address.",
            "Order summary should be displayed.",
            "Total amount should be calculated correctly."
        ]
    },

    {
        id: "US06",
        role: "Customer",
        action: "pay online",
        benefit: "complete my purchase securely",
        priority: "High",
        points: 5,
        status: "To Do",
        criteria: [
            "Customer can select a payment method.",
            "Successful payment confirms the order.",
            "Failed payment displays an error message."
        ]
    },

    {
        id: "US07",
        role: "Customer",
        action: "track my order",
        benefit: "know the delivery status",
        priority: "Medium",
        points: 3,
        status: "To Do",
        criteria: [
            "Customer can view order status.",
            "Status can be Pending, Shipped, Out for Delivery or Delivered."
        ]
    },

    {
        id: "US08",
        role: "Admin",
        action: "manage products",
        benefit: "maintain the product catalogue",
        priority: "High",
        points: 5,
        status: "Done",
        criteria: [
            "Admin can add products.",
            "Admin can edit product information.",
            "Admin can remove products."
        ]
    }
];


function renderStories() {

    const container = document.getElementById("storyContainer");

    container.innerHTML = "";

    stories.forEach(story => {

        const criteriaHTML = story.criteria
            .map(item => `<li>${item}</li>`)
            .join("");

        const priorityClass = story.priority.toLowerCase();

        container.innerHTML += `
            <div class="story">

                <h3>${story.id} – User Story</h3>

                <p class="story-text">
                    <strong>As a ${story.role},</strong>
                    I want to ${story.action}
                    <strong>so that</strong> I can ${story.benefit}.
                </p>

                <div class="criteria">
                    <strong>Acceptance Criteria:</strong>
                    <ul>
                        ${criteriaHTML}
                    </ul>
                </div>

                <div class="meta">
                    <span class="tag ${priorityClass}">
                        Priority: ${story.priority}
                    </span>

                    <span class="tag">
                        Story Points: ${story.points}
                    </span>

                    <span class="tag">
                        Status: ${story.status}
                    </span>
                </div>

            </div>
        `;
    });
}


function renderBacklog() {

    const body = document.getElementById("backlogBody");

    body.innerHTML = "";

    stories.forEach(story => {

        body.innerHTML += `
            <tr>
                <td><strong>${story.id}</strong></td>

                <td>
                    As a ${story.role}, I want to
                    ${story.action}
                </td>

                <td>${story.priority}</td>

                <td>${story.points}</td>

                <td>${story.status}</td>
            </tr>
        `;
    });
}


function renderBoard() {

    document.getElementById("todo").innerHTML = "";
    document.getElementById("progress").innerHTML = "";
    document.getElementById("done").innerHTML = "";

    stories.forEach(story => {

        const task = `
            <div class="task">
                <strong>${story.id}</strong>
                <p>${story.action}</p>
                <small>${story.points} Story Points</small>
            </div>
        `;

        if (story.status === "To Do") {
            document.getElementById("todo").innerHTML += task;
        }

        else if (story.status === "In Progress") {
            document.getElementById("progress").innerHTML += task;
        }

        else {
            document.getElementById("done").innerHTML += task;
        }
    });
}


document.getElementById("storyForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const newStory = {

        id: "US" + String(stories.length + 1).padStart(2, "0"),

        role: document.getElementById("role").value,

        action: document.getElementById("action").value,

        benefit: document.getElementById("benefit").value,

        priority: document.getElementById("priority").value,

        points: Number(document.getElementById("points").value),

        status: "To Do",

        criteria: document.getElementById("criteria").value
            .split("\n")
            .filter(item => item.trim() !== "")
    };

    stories.push(newStory);

    renderStories();
    renderBacklog();
    renderBoard();

    this.reset();

    alert("User Story added successfully!");

});


renderStories();
renderBacklog();
renderBoard();
