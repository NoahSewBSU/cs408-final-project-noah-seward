//import Filter from 'bad-words'; // Importing the bad-words library for filtering bad words

// API URL for the message table
const apiUrl = "https://nqaf79ql58.execute-api.us-east-2.amazonaws.com/message";

// NOTES
// id: 'text'
// message: <String>
// call the same id each time, display message

document.addEventListener("DOMContentLoaded", () => {
  //const filter = new Filter(); // Create a new instance of the Filter class

  document.getElementById("show-message").addEventListener("click", loadMessage); // Add event listener to button)
  document.getElementById("update-button").addEventListener("click", () => {
    const newMessage = document.getElementById("new-message").value.trim(); // Get the new message from input field
    
    if (newMessage.length > 100) {
      alert("Message is too long! Please keep it under 100 characters.");
      return; // Exit if the message is too long
    }

    if (newMessage.length === 0) {
      alert("Message cannot be empty! Please enter a message.");
      return; // Exit if the message is empty
    }

    // SQL Injection and XSS Protection
    if (containsMaliciousContent(newMessage)) {
      alert("Message contains prohibited words or patterns.");
      return; // Exit if the message contains prohibited content
    }

    /**
     * This utilizes the bad-words library to filter out bad words from the message.
     */
    //newMessage = filter.clean(newMessage); // Clean the message using the filter
    
    updateMessage(newMessage); // Call updateMessage function with the new message
  });
});

/**
 * Load message from the API
 * This function is triggered when the user clicks the "Show Message" button.
 */
function loadMessage() {
  let xhr = new XMLHttpRequest();
  
  // Handle response when the request loads
  xhr.addEventListener("load", function () {
      if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText); // Parse JSON response
          document.getElementById("message-display").textContent = `${data.message}`; // Update DOM
      } else {
          console.error("Failed to fetch message. Status code:", xhr.status);
      }
  });

  xhr.open("GET", `${apiUrl}/text`); // Initialize a GET request to the API URL with id parameter
  xhr.send(); // Send the GET request
}

// Add event listener to button
// document.getElementById("show-message").addEventListener("click", loadMessage);

function updateMessage(newMessage) {
  let xhr = new XMLHttpRequest();
  const payload = {
      id: "text", // ID in the table
      message: newMessage // New message content
  };

  xhr.addEventListener("load", function () {
      if (xhr.status === 200) {
          alert("Message updated successfully!");
      } else {
          console.error("Failed to update message. Status code:", xhr.status);
      }
  });

  xhr.open("PUT", apiUrl);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(payload)); // Send the JSON payload
}

document.getElementById("update-button").addEventListener("click", () => {
  const newMessage = document.getElementById("new-message").value;
  updateMessage(newMessage);
});

/**
 * Check for malicious content in the message (SQL injection and XSS)
 */
function containsMaliciousContent(input) {
  // setup filters for code injection attacks
  const sqlPatterns = [
      /SELECT/i,
      /INSERT/i,
      /UPDATE/i,
      /DELETE/i,
      /DROP/i,
      /--/i,
      /\bOR\b/i,
      /\bAND\b/i,
      /\bUNION\b/i
  ];
  const xssPatterns = [
      /<script>/i,
      /<\/script>/i,
      /javascript:/i,
      /onerror=/i,
      /onload=/i,
      /<img/i,
      /<iframe/i
  ];

  const lowerInput = input.toLowerCase(); // Convert input to lowercase for case-insensitive matching
  for (const pattern of sqlPatterns) {
      if (pattern.test(lowerInput)) {
          return true; // Malicious SQL pattern found
      }
  }
  for (const pattern of xssPatterns) {
      if (pattern.test(lowerInput)) {
          return true; // Malicious XSS pattern found
      }
  }

  return false; // No malicious content found

}

// TODO bad words filter


// document.getElementById("show-message").addEventListener("click", function() {
//     // Fetch the message from the API and update the DOM
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             const messageDisplay = document.getElementById("message-display");
//             if (data && data.message) {
//                 messageDisplay.innerHTML = `<h2>Current Message: ${data.message}</h2>`;
//             } else {
//                 messageDisplay.innerHTML = "<h2>No message found</h2>";
//             }
//         })
//         .catch(error => console.error("Error fetching message:", error));
// });
