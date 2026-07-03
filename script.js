// Ruddee portfolio — populates project grids, lightbox, nav, mobile menu

const websiteProjects = [
  { img: "assets/ocp.png", title: "OCPOTEC-Portal Project ", url: "https://markethub22.github.io/OCPOTEC-Portal/" },
  { img: "assets/Md.png", title: " M-D Project ", url: "https://markethub22.github.io/md-property/" },
  { img: "assets/f10.png", title: "ROI SALES Project ", url: "https://roi-opus-flow.lovable.app" },
  { img: "assets/f11.png", title: " EXPENSE it Project ", url: "#" },
  { img: "assets/F12.png", title: "FILM PRODUCTIONProject ", url: "#" },
  { img: "assets/Md.png", title: "Project Six", url: "#" },
];

const graphicItems = [
  "assets/F1.png",
  "assets/F2.jpg",
  "assets/F4.png",
  "assets/F3.jpg",
  "assets/F5.jpg",
  "assets/F6.png",
];

const brandItems = ["assets/F8.png", 
  "assets/F9.png", "assets/F7.jpg"];

function renderCards(gridId, items) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (p) => `
    <a class="card" href="${p.url}" target="_blank" rel="noopener">
      <div class="card-media"><img src="${p.img}" alt="${p.title}" loading="lazy" /></div>
      <div class="card-body"><h3>${p.title}</h3><span class="card-cta">View live →</span></div>
    </a>`,
    )
    .join("");
}

function renderTiles(gridId, items) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = items
    .map(
      (src) => `
    <button class="tile" data-src="${src}">
      <img src="${src}" alt="" loading="lazy" />
    </button>`,
    )
    .join("");
}

renderCards("websiteGrid", websiteProjects);
renderTiles("graphicGrid", graphicItems);
renderTiles("brandGrid", brandItems);

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
document.addEventListener("click", (e) => {
  const tile = e.target.closest(".tile");
  if (tile) {
    lightboxImg.src = tile.dataset.src;
    lightbox.classList.add("open");
  }
});
document.getElementById("lightboxClose")?.addEventListener("click", () => {
  lightbox.classList.remove("open");
  lightboxImg.src = "";
});
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }
});

// Mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger?.addEventListener("click", () => navLinks?.classList.toggle("open"));
navLinks?.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open")),
);

// Active nav link on scroll
const links = document.querySelectorAll(".nav-links a");
const sections = [...links]
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);
window.addEventListener("scroll", () => {
  const y = window.scrollY + 120;
  let current = sections[0]?.id;
  sections.forEach((s) => {
    if (s.offsetTop <= y) current = s.id;
  });
  links.forEach((a) =>
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`),
  );
});

// Year
const yr = document.getElementById("year");
if (yr) yr.textContent = new Date().getFullYear();
