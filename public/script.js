document.addEventListener("DOMContentLoaded", async function () {
  const postsContainer = document.getElementById("postsContainer");

  try {
    const response = await fetch("/api/");
    const posts = await response.json();

    if (posts.length === 0) {
      postsContainer.innerHTML = "<p>No posts found</p>";
    }

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");

      postElement.innerHTML = ` 
        <p class="author"><strong>${post.author}</strong></p>
        <h2>${post.title}</h2>
        <p>${post.content}</p>
    `;

      postsContainer.appendChild(postElement);
    });
  } catch (err) {
    console.error("Error when fetching posts", err);
  }
});
