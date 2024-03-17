const imgSection = document.querySelector(".img-container");

// ------------

// This is a IMAGE GENERATOR FN
// which accepts data element as an argument
const imgGenerator = (photo) => {
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const newImg = document.createElement("img");
  newImg.setAttribute("class", "card-img-top");
  newImg.setAttribute("src", photo.urls.regular);

  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  const cardText = document.createElement("p");
  cardText.setAttribute("class", "card-text");

  const textBodySec = document.createElement("small");
  textBodySec.setAttribute("class", "text-body-secondary");

  textBodySec.innerText = photo.user.links.html;
  cardText.appendChild(textBodySec);
  cardBody.appendChild(cardText);
  card.append(newImg, cardBody);
  imgSection.appendChild(card);
};

// -------------
// This is a FETCHING A PHOTO FN
const fetchPhotos = async () => {
  try {
    const res = await fetch(
      "https://api.unsplash.com/photos/?client_id=RaKtX00biAcAFYUs49um37D0_uLQ5R-vIJdetbxQUXY"
    );

    const data = await res.json();

    data.map((photo) => {
      imgGenerator(photo);
    });
  } catch (error) {
    console.log(error);
  }
};
fetchPhotos();
// ----------

// This is a SEARCH PHOTO FN
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    const input = document.querySelector("input");
    const inputValue = input.value;
    if (inputValue === "") {
      throw new Error("Please Enter Details of the Photo to Search");
    } else {
      searchQuery(inputValue);
    }
  } catch (error) {
    console.log(error);
  }
});

const searchQuery = async (searchTerm) => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=RaKtX00biAcAFYUs49um37D0_uLQ5R-vIJdetbxQUXY`
    );
    const data = await res.json();
    data.results.map((photo) => {
      imgGenerator(photo);
    });
  } catch (error) {
    console.log(error);
  }
};
