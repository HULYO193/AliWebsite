// Profile data
const profileData = {
  name: "Express For Girls",
  bio: "Welcome to Express For Girls",
  imageUrl: "./images/logo.png",
};

// Links data
const links = [
  {
    title: "לחצו כאן כדי להצטרף לקהילת וואטסאפ",
    url: "https://chat.whatsapp.com/CgILHcePcM3ACcfFdj42dU?mode=gi_c",
    icon: "❤️",
    isHighlighted: true,
  },
];

// Debug: Log to verify script is loaded
console.log("WebsiteJS.js loaded - Total links:", links.length);
console.log("Link 1:", links[0].title);

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  // Set profile information
  document.getElementById("profileName").textContent = profileData.name;
  document.getElementById("profileBio").textContent = profileData.bio;
  document.getElementById("profileImg").src = profileData.imageUrl;

  // Create link buttons
  const linksContainer = document.getElementById("linksContainer");
  links.forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.target = "_blank";
    linkElement.rel = "noopener noreferrer";
    linkElement.className = link.isHighlighted
      ? "link-button highlighted"
      : "link-button";

    const linkContent = document.createElement("div");
    linkContent.className = "link-content";

    if (link.icon) {
      const iconSpan = document.createElement("span");
      iconSpan.className = "link-icon";
      iconSpan.textContent = link.icon;
      linkContent.appendChild(iconSpan);
    }

    const titleSpan = document.createElement("span");
    titleSpan.className = "link-title";
    titleSpan.textContent = link.title;
    linkContent.appendChild(titleSpan);

    linkElement.appendChild(linkContent);
    linksContainer.appendChild(linkElement);

    // Track Meta Pixel event when WhatsApp button is clicked
    if (link.url.includes("whatsapp.com")) {
      linkElement.addEventListener("click", function () {
        // Track custom event for WhatsApp click
        if (typeof fbq !== "undefined") {
          fbq("track", "Lead", {
            content_name: "WhatsApp Community Join",
            content_category: "Link Click",
          });
          // Also track as a custom event
          fbq("trackCustom", "WhatsAppClick");
        }
      });
    }
  });
});

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = "smooth";