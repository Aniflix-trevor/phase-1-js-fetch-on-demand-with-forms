const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form refresh
    const input = document.querySelector("#searchByID").value; // Get user input

    fetch(`http://localhost:3000/movies/${input}`) // Fetch specific movie by ID
      .then((response) => {
        if (!response.ok) {
          throw new Error("Movie not found");
        }
        return response.json();
      })
      .then((data) => {
        // Update the DOM with the movie details
        document.querySelector("#movieDetails h4").innerText = data.title;
        document.querySelector("#movieDetails p").innerText = data.summary;
      })
      .catch((error) => {
        console.error("Error:", error);
        document.querySelector("#movieDetails h4").innerText =
          "Movie Not Found";
        document.querySelector("#movieDetails p").innerText = "";
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
