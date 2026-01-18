const n = 6;
const options = [
  "BaconGallupPark.jpg",
  "bacon_in_the_woods.png",
  "bacon_near_the_fort.png",
  "bend_in_the_road.png",
  "blooming_trees.png",
  "downed_tree.png",
  "falling_petals.png",
  "fort_in_woods.png",
  "hanging_plants.png",
  "hollow_tree.png",
  "huron_river_cascades.JPG",
  "lake_view.JPG",
  "mist_over_huron_river.JPG",
  "munising.jpg",
  "pink_blossoms.png",
  "potted_plants.png",
  "red_maple.png",
  "reflected_tree.JPG",
  "tree_with_white_blooms.png",
  "tulips.png",
  "white_buds_on_tree.png",
];

function onLoadPage() {
  console.log("on load page");
  gallary = document.getElementById("gallary");
  gallary.innerHTML = "";
  for (var i = 0; i < n; i++) {
    const a = document.createElement("a");
    a.href = "";
    a.setAttribute("data-lightbox", "images");
    a.setAttribute("data-title", "");
    const img = document.createElement("img");
    a.appendChild(img);
    gallary.appendChild(a);
  }
  setImages();
}

function setImages() {
  currentLinks = document.querySelectorAll(".flex a");
  randomImgs=[];
  for (var i = 0; i < currentLinks.length; i++) {
    do{
          randomImg = options[Math.floor(Math.random() * options.length)];
    }while (randomImgs.includes(randomImg));
    randomImgs.push(randomImg);
    img_path = "images/" + randomImg;
    currentLinks[i].setAttribute("href",img_path);
    currentLinks[i].setAttribute("data-title",randomImg);
    const img = currentLinks[i].querySelector("img");
    if (img!=null){
      img.src=img_path;
    img.setAttribute("alt",randomImg);
      img.setAttribute("tabindex", "0");
    }
  }
}
