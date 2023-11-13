function addComment() {
  const userName = document.getElementById("userName").value;
  const commentDate = document.getElementById("commentDate").value;
  const commentText = document.getElementById("commentText").value;

  if (userName && commentDate && commentText) {
    const commentsSection = document.getElementById("comments");

    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    commentDiv.innerHTML = `<p><strong>${userName}</strong> (${commentDate}):<br>${commentText}</p>`;

    commentsSection.appendChild(commentDiv);

    document.getElementById("commentForm").reset();
  } else {
    alert("Будь ласка, заповніть всі поля форми.");
  }
}
