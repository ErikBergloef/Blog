document.getElementById("createPostForm").addEventListener("submit", async function(event) {
    event.preventDefault();  
    
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const author = document.getElementById("author").value;

    const newPost = { title, content, author };

    try {
        const response = await fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)  
        });

        if (response.ok) {
            
            window.location.href = "index.html";
        } else {
            const errorData = await response.json();
            alert("Failed to create post: " + errorData.error);
        }
    } catch (err) {
        console.error("Error creating post:", err);
        alert("An error occurred while creating the post.");
    }
});
