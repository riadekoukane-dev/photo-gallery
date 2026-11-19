function upDate(previewPic) {
  console.log("Event triggered: upDate");
  console.log("Alt:", previewPic.alt);
  console.log("Source:", previewPic.src);

  const imageBox = document.getElementById("image");
  imageBox.innerHTML = previewPic.alt;
  imageBox.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("Event triggered: unDo");

  const imageBox = document.getElementById("image");
  imageBox.style.backgroundImage = "url('')";
  imageBox.innerHTML = "Hover over an image below to display here";
}
