// Mobile Menu Toggle
      const mobileToggle = document.getElementById("mobileToggle");
      const navLinks = document.getElementById("navLinks");

      if (mobileToggle) {
        mobileToggle.addEventListener("click", function () {
          navLinks.classList.toggle("active");
          const spans = this.querySelectorAll("span");
          if (navLinks.classList.contains("active")) {
            spans[0].style.transform = "rotate(45deg) translate(7px, 7px)";
            spans[1].style.opacity = "0";
            spans[2].style.transform = "rotate(-45deg) translate(7px, -7px)";
          } else {
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
          }
        });
      }

      // Close mobile menu when clicking outside
      document.addEventListener("click", function (event) {
        if (navLinks && navLinks.classList.contains("active")) {
          const isClickInsideNav = navLinks.contains(event.target);
          const isClickInsideToggle =
            mobileToggle && mobileToggle.contains(event.target);
          if (!isClickInsideNav && !isClickInsideToggle) {
            navLinks.classList.remove("active");
            const spans = mobileToggle.querySelectorAll("span");
            spans[0].style.transform = "none";
            spans[1].style.opacity = "1";
            spans[2].style.transform = "none";
          }
        }
      });

      // Smooth scroll for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            // Close mobile menu if open
            if (navLinks && navLinks.classList.contains("active")) {
              navLinks.classList.remove("active");
              const spans = mobileToggle.querySelectorAll("span");
              spans[0].style.transform = "none";
              spans[1].style.opacity = "1";
              spans[2].style.transform = "none";
            }
          }
        });
      });

      // Add active class to current nav link
      document.addEventListener("DOMContentLoaded", function () {
        const currentPage =
          window.location.pathname.split("/").pop() || "index.html";
        const nav_links = document.querySelectorAll(".nav-links a");
        nav_links.forEach((link) => {
          if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      });