/* =====================================================
   AP BEAUTIFUL HOMES
   FINAL JAVASCRIPT
===================================================== */


document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =============================================
           MOBILE MENU
        ============================================= */


        const menuButton =
            document.getElementById("menuButton");


        const navigation =
            document.getElementById("navigation");


        if (menuButton && navigation) {


            menuButton.addEventListener(
                "click",
                function () {

                    navigation.classList.toggle(
                        "active"
                    );

                }
            );


            const menuLinks =
                navigation.querySelectorAll("a");


            menuLinks.forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            navigation.classList.remove(
                                "active"
                            );

                        }
                    );

                }
            );

        }



        /* =============================================
           SMOOTH SCROLL
        ============================================= */


        const links =
            document.querySelectorAll(
                'a[href^="#"]'
            );


        links.forEach(
            function (link) {


                link.addEventListener(
                    "click",
                    function (event) {


                        const targetId =
                            this.getAttribute(
                                "href"
                            );


                        if (
                            !targetId ||
                            targetId === "#"
                        ) {

                            return;

                        }


                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (target) {

                            event.preventDefault();


                            target.scrollIntoView({

                                behavior: "smooth",

                                block: "start"

                            });

                        }

                    }
                );

            }
        );



        /* =============================================
           SCROLL REVEAL
        ============================================= */


        const animatedElements =
            document.querySelectorAll(
                ".service-card, .project-card, .review-card"
            );


        const observer =
            new IntersectionObserver(

                function (entries) {


                    entries.forEach(
                        function (entry) {


                            if (
                                entry.isIntersecting
                            ) {


                                entry.target.style.opacity =
                                    "1";


                                entry.target.style.transform =
                                    "translateY(0)";


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.15
                }

            );


        animatedElements.forEach(
            function (element) {


                element.style.opacity = "0";

                element.style.transform =
                    "translateY(30px)";

                element.style.transition =
                    "opacity 0.7s ease, transform 0.7s ease";


                observer.observe(element);

            }
        );



        /* =============================================
           NAVBAR SHADOW
        ============================================= */


        const navbar =
            document.querySelector(
                ".navbar"
            );


        window.addEventListener(
            "scroll",
            function () {


                if (
                    window.scrollY > 20
                ) {


                    navbar.style.boxShadow =
                        "0 5px 25px rgba(0,0,0,0.08)";


                } else {


                    navbar.style.boxShadow =
                        "none";

                }

            }
        );


    }
);