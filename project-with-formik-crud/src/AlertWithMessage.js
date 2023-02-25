import Swal from "sweetalert2";

// Function that displays a success alert with a message
export const alertWithMessage = (pText) => {
    // Use the sweetalert2 library to create a success alert
    Swal.fire({
        title: "Success!",
        text: pText,        // The message to display is passed in as a parameter
        icon: "success", // Display a success icon
        timer: 1800,   // The alert disappears after 1.8 seconds
        showConfirmButton: false,
    });
}