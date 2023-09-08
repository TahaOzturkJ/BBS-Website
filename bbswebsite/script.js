$(document).ready(function () {
    $('#myCarousel').carousel();
    $('#solutions-carousel').carousel();
});

//Services Carousel

const serviceswrapper = document.querySelector(".services-wrapper");
const servicescarousel = document.querySelector(".services-carousel");
const servicesarrowBtns = document.querySelectorAll(".services-carousel-slider-btn a i");
const servicesfirstCardWidth = servicescarousel.querySelector(".services-card").offsetWidth;
const servicescarouselChildrens = [...servicescarousel.children];

let servicesisDragging = false, startX, startScrollLeft, servicestimeoutId;

let servicescardPerView = Math.round(servicescarousel.offsetWidth / servicesfirstCardWidth);

servicescarouselChildrens.slice(-servicescardPerView).reverse().forEach(card => {
    servicescarousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

servicescarouselChildrens.slice(0, servicescardPerView).forEach(card => {
    servicescarousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

servicesarrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        servicescarousel.scrollLeft += btn.id === "left" ? -servicesfirstCardWidth : servicesfirstCardWidth;
    })
});

const servicesdragStart = (e) => {
    servicesisDragging = true;
    servicescarousel.classList.add("dragging");

    startX = e.pageX;
    startScrollLeft = servicescarousel.scrollLeft;
};

const servicesdragging = (e) => {
    if(!servicesisDragging) return;
    servicescarousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const servicesdragStop = () => {
    servicesisDragging = false;
    servicescarousel.classList.remove("dragging");
};

const servicesautoPlay = () => {
    servicestimeoutId = setTimeout(() => servicescarousel.scrollLeft += servicesfirstCardWidth, 2500);
}

servicesautoPlay();

const servicesinfiniteScroll = () => {
    const servicestolerance = 50; // Set a small tolerance value to account for precision errors

    if (servicescarousel.scrollLeft <= servicestolerance) {
        servicescarousel.classList.add("no-transition");
        servicescarousel.scrollLeft = servicescarousel.scrollWidth - (2 * servicescarousel.offsetWidth);
        servicescarousel.classList.remove("no-transition");
    } else if (Math.abs(servicescarousel.scrollLeft - (servicescarousel.scrollWidth - servicescarousel.offsetWidth)) <= servicestolerance) {
        servicescarousel.classList.add("no-transition");
        servicescarousel.scrollLeft = servicescarousel.offsetWidth;
        servicescarousel.classList.remove("no-transition");
    }

    clearTimeout(servicestimeoutId);
    if(!serviceswrapper.matches(":hover")) servicesautoPlay();
}

servicescarousel.addEventListener("mousedown", servicesdragStart);
servicescarousel.addEventListener("mousemove", servicesdragging);
servicescarousel.addEventListener("mouseup", servicesdragStop);
servicescarousel.addEventListener("scroll", servicesinfiniteScroll);
serviceswrapper.addEventListener("mouseenter", () => clearTimeout(servicestimeoutId));
serviceswrapper.addEventListener("mouseleave", servicesautoPlay);

//Partners Carousel

const partnerswrapper = document.querySelector(".partners-wrapper");
const partnerscarousel = document.querySelector(".partners-carousel");
const partnersarrowBtns = document.querySelectorAll(".partners-carousel-slider-btn a i");
const partnersfirstCardWidth = partnerscarousel.querySelector(".partners-card").offsetWidth;
const partnerscarouselChildrens = [...partnerscarousel.children];

let partnersisDragging = false, partnersstartX, partnersstartScrollLeft, partnerstimeoutId;

let partnerscardPerView = Math.round(partnerscarousel.offsetWidth / partnersfirstCardWidth);

partnerscarouselChildrens.slice(-partnerscardPerView).reverse().forEach(card => {
    partnerscarousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

partnerscarouselChildrens.slice(0, partnerscardPerView).forEach(card => {
    partnerscarousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

partnersarrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        partnerscarousel.scrollLeft += btn.id === "left" ? -partnersfirstCardWidth : partnersfirstCardWidth;
    })
});

const partnersdragStart = (e) => {
    partnersisDragging = true;
    partnerscarousel.classList.add("dragging");

    partnersstartX = e.partnerspageX;
    partnersstartScrollLeft = partnerscarousel.scrollLeft;
};

const partnersdragging = (e) => {
    if(!partnersisDragging) return;
    partnerscarousel.scrollLeft = partnersstartScrollLeft - (e.partnerspageX - partnersstartX);
};

const partnersdragStop = () => {
    partnersisDragging = false;
    partnerscarousel.classList.remove("dragging");
};

const partnersautoPlay = () => {
    partnerstimeoutId = setTimeout(() => partnerscarousel.scrollLeft += partnersfirstCardWidth, 2500);
}

partnersautoPlay();

const partnersinfiniteScroll = () => {
    const partnerstolerance = 50; // Set a small tolerance value to account for precision errors

    if (partnerscarousel.scrollLeft <= partnerstolerance) {
        partnerscarousel.classList.add("no-transition");
        partnerscarousel.scrollLeft = partnerscarousel.scrollWidth - (2 * partnerscarousel.offsetWidth);
        partnerscarousel.classList.remove("no-transition");
    } else if (Math.abs(partnerscarousel.scrollLeft - (partnerscarousel.scrollWidth - partnerscarousel.offsetWidth)) <= partnerstolerance) {
        partnerscarousel.classList.add("no-transition");
        partnerscarousel.scrollLeft = partnerscarousel.offsetWidth;
        partnerscarousel.classList.remove("no-transition");
    }

    clearTimeout(partnerstimeoutId);
    if(!partnerswrapper.matches(":hover")) partnersautoPlay();
}


partnerscarousel.addEventListener("mousedown", partnersdragStart);
partnerscarousel.addEventListener("mousemove", partnersdragging);
partnerscarousel.addEventListener("mouseup", partnersdragStop);
partnerscarousel.addEventListener("scroll", partnersinfiniteScroll);
partnerswrapper.addEventListener("mouseenter", () => clearTimeout(partnerstimeoutId));
partnerswrapper.addEventListener("mouseleave", partnersautoPlay);