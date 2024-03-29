function navAnimation() {
    var nav = document.querySelector("nav");

    nav.addEventListener("mouseenter", function () {
        var tl = gsap.timeline();

        tl.to("#nav-bottom", {
            height: "21vh",
            duration: 0.5
        })
            .to(".nav-part2 h5", {
                display: "block",
                duration: 0.1
            })
            .to(".nav-part2 h5 span", {
                y: 0,
                stagger: {
                    amount: 0.5
                }
            });
    });

    nav.addEventListener("mouseleave", function () {
        var tl = gsap.timeline();

        tl.to("#nav-bottom", {
            height: 0, // Reverse the height change
            duration: 0.1
        })
            .to(".nav-part2 h5 span", {
                y: "100%", // Move the span elements back down
                stagger: {
                    amount: 0.1
                }
            })
            .to(".nav-part2 h5", {
                display: "none", // Hide the h5 elements
                duration: 0.0
            });
    });
}
navAnimation()