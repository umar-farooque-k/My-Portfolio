document.addEventListener("DOMContentLoaded", function() {
    const avatarText = document.getElementById("avatar-text");
    const sections = document.querySelectorAll("section");
    const avatarContainer = document.getElementById('full-screen-avatar');
    const homeSection = document.getElementById('home');
    const typingLine1 = document.querySelector(".typing-line1");
    const typingLine2 = document.querySelector(".typing-line2");
    const typingCursor = document.querySelector(".typing-cursor");

    const line1 = "Welcome to ";
    const line2 = "My Portfolio";
    let index1 = 0;
    let index2 = 0;

    // Function to update avatar text based on scroll position
    function updateAvatarText() {
        const scrollPosition = window.scrollY + window.innerHeight / 2; // Center of the viewport

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionBottom = sectionTop + sectionHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                switch (sectionId) {
                    case "home":
                        avatarText.innerText = "Hi, I'm Umar! I'm passionate about technology and creativity. Dive into my portfolio to discover my projects and learn more about what drives me. Let's explore and create something amazing together!";
                        break;
                    case "about":
                        avatarText.innerText = "Learn more About Me here.";
                        break;
                    case "projects":
                        avatarText.innerText = "Check out My Projects!";
                        break;
                    case "contact":
                        avatarText.innerText = "Get in touch with me through Contact.";
                        break;
                    default:
                        avatarText.innerText = "Welcome to my portfolio!";
                }
            }
        });
    }

    // Function to handle shrinking avatar on scroll
    function handleAvatarShrink() {
        const scrollPosition = window.scrollY;
        const threshold = homeSection.offsetHeight / 2;

        if (scrollPosition > threshold) {
            document.body.classList.add('shrink');
        } else {
            document.body.classList.remove('shrink');
        }
    }

    // Function to create typing effect
    function typeLine1() {
        if (index1 < line1.length) {
            typingLine1.textContent += line1.charAt(index1);
            index1++;
            setTimeout(typeLine1, 150); // Adjust speed by changing 150ms delay
        } else {
            typingCursor.style.visibility = "hidden"; // Hide cursor after first line is done
            setTimeout(typeLine2, 300); // Small pause before starting the second line
        }
    }

    function typeLine2() {
        typingCursor.style.visibility = "visible"; // Show cursor again for second line
        if (index2 < line2.length) {
            typingLine2.textContent += line2.charAt(index2);
            index2++;
            setTimeout(typeLine2, 150); // Adjust speed by changing 150ms delay
        }
    }

    // Event listeners
    window.addEventListener("scroll", () => {
        updateAvatarText();
        handleAvatarShrink();
    });

    // Initial calls on page load
    updateAvatarText();
    typeLine1(); // Start typing the first line
});
