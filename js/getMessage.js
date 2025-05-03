
// API URL for the message table
const apiUrl = "https://nqaf79ql58.execute-api.us-east-2.amazonaws.com/message";

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
            document.getElementById("message-display").textContent = `Current Message: ${data.message}`; // Update DOM
        } else {
            console.error("Failed to fetch message. Status code:", xhr.status);
        }
    });
  
    xhr.open("GET", `${apiUrl}/text`); // Initialize a GET request to the API URL with id parameter
    xhr.send(); // Send the GET request
  }