$(document).ready(function () {
    // header
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#myHeader').addClass('colored-bg');
            $('#myHeader').removeClass('transparent-bg');
        } else {
            $('#myHeader').removeClass('colored-bg');
            $('#myHeader').addClass('transparent-bg');
        }
    });

    var reviewContainer = $("#review .review-content .owl-carousel");

    $.each(reviewsData, function (index, review) {
        var card = $("<div>").addClass("item card text-start py-4 w-100");
        var cardBody = $("<div>").addClass("card-body");

        var ratingStars = $("<p>").addClass("card-rate");
        for (var i = 0; i < review.rate; i++) {
            ratingStars.append('<svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M11.4247 17.9296C11.5823 17.836 11.7784 17.8362 11.9358 17.93L17.5522 21.2767L17.5523 21.2767C18.2173 21.6733 18.9911 21.0801 18.8261 20.3811L17.3375 14.088C17.2943 13.9055 17.3568 13.7143 17.4994 13.5926L22.4661 9.35258L22.4663 9.35243C23.0262 8.87495 22.7371 7.95731 21.9803 7.898L21.9777 7.89779L15.4411 7.35112C15.257 7.33572 15.0964 7.2201 15.0235 7.05042L12.4657 1.10375L12.465 1.10217C12.1775 0.427532 11.1823 0.427532 10.8948 1.10217L10.894 1.10413L8.33619 7.03746C8.26312 7.20695 8.10263 7.3224 7.91871 7.33779L1.38211 7.88445L1.3795 7.88467L1.3795 7.88466C0.622699 7.94397 0.333647 8.86161 0.893496 9.3391L0.893672 9.33925L5.86041 13.5792C6.00298 13.701 6.06549 13.8922 6.02234 14.0746L4.53373 20.3677L11.4247 17.9296ZM11.4247 17.9296L5.80838 21.2629L5.80749 21.2634M11.4247 17.9296L5.80749 21.2634M5.80749 21.2634C5.14257 21.6599 4.36889 21.0669 4.53368 20.368L5.80749 21.2634Z" fill="#FFBA79" stroke="#FFBA79" stroke-linejoin="round"/></svg>');
        }
        cardBody.append(ratingStars);

        cardBody.append('<p class="card-text">' + review.text + '</p>');

        var profileContainer = $('<div>').addClass('card-profile d-flex mt-5');
        var imageContainer = $('<div>').addClass('image-container');
        imageContainer.append('<img src="' + review.profile.image + '" alt="user-picture" style="width: 56px;">');
        profileContainer.append(imageContainer);

        var profileInfo = $('<div>').addClass('ms-3');
        profileInfo.append('<h3 class="m-0">' + review.profile.name + '</h3>');
        profileInfo.append('<p class="p-0 m-0">' + review.profile.position + '</p>');
        profileContainer.append(profileInfo);

        cardBody.append(profileContainer);
        card.append(cardBody);

        reviewContainer.append(card);
    });

    // owl carousel
    $('.owl-carousel').owlCarousel({
        stagePadding: 50,
        dots: false,
        loop: false,
        margin: 30,
        nav: true,
        navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            568: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
});

var reviewsData = [
    {
        rate: 5,
        text: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
        profile: {
            name: "Chealsea Morgan",
            position: "CEO of Subway",
            image: "./img/user1.png"
        }
    },
    {
        rate: 5,
        text: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
        profile: {
            name: "Nick Cave",
            position: "CMO of Nokia",
            image: "./img/user2.png"
        }
    },
    {
        rate: 5,
        text: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
        profile: {
            name: "Lana Rosenfeld",
            position: "Senior VP of Pinterest",
            image: "./img/user3.png"
        }
    },
    {
        rate: 5,
        text: "Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc.",
        profile: {
            name: "Giorgio Moroder",
            position: "CTO of Glovo",
            image: "./img/user4.png"
        }
    },
    {
        rate: 5,
        text: "Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis. In a laoreet purus.",
        profile: {
            name: "Young Liu",
            position: "CAO of Foxconn",
            image: "./img/user5.png"
        }
    }
];
