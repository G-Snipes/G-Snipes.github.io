
document.addEventListener("DOMContentLoaded", function () {

// Get a reference to the gallery container
const galleryContainer = document.getElementById("imageGallery");

// List of image filenames in the photos/gallery folder
const imageFilenames = ["juliakiss.png", "photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg" ,"photo7.jpg"
                        , "photo8.jpg", "photo9.jpg" ,"photo10.jpg" ,"photo11.jpg" ,"photo12.jpg" ,"photo13.jpg" ,"photo14.jpg" ,"photo15.jpg" ,"photo16.jpg"
                      , "photo17.jpg", "photo18.jpg", "photo19.jpg", "photo20.jpg", "photo21.jpg", "photo22.jpg", "photo23.jpg", "photo24.jpg", "photo25.jpg"
                    , "photo26.jpg", "photo27.jpg", "photo28.jpg", "photo29.jpg", "photo30.jpg", "photo31.jpg"];

// Loop through the image filenames and create image elements
imageFilenames.forEach(filename => {
  const imgElement = document.createElement("img");
  imgElement.src = `photos/gallery/${filename}`;
  imgElement.alt = filename.replace(".png", ""); // Remove the file extension
  imgElement.classList.add("gallery-image");
  galleryContainer.appendChild(imgElement);
});


});