let init = () => {

    let container = document.getElementsByClassName('fixed-slider-container')[0],

        slides = document.getElementsByClassName('fixed-slider-slidemain'),

        circles = document.getElementsByClassName('page-duration-circle'),

        links = document.getElementsByClassName('slider-link'),

        current = 1,

        time = 7000;

    console.log(slides)


    // add animation slide to slide//

    window.onload = () => {

        slides[0].classList.add('fixed-slider-slidemain-active');

        links[current - 1].classList.add('slider-link-current');
    }

    circles[current - 1].classList.add('page-duration-circle-filled');


    // update circles and links

    let updateNav = (current) => {
        console.log(`update current: ${current}`)
        for (let index = 0; index < slides.length; index++) {
            links[index].classList.remove('slider-link-current');
            circles[index].classList.remove('page-duration-circle-filled');
        }
        links[current - 1].classList.add('slider-link-current');
        circles[current - 1].classList.add('page-duration-circle-filled');
    }


    let startsliding = () => {

        setInterval(() => {
            console.log(`current: ${current}`)
            //remove active class from first and add it to second slide so it becomes first slide with class activated
            slides[1].classList.add('fixed-slider-slidemain-active')
            slides[0].classList.remove('fixed-slider-slidemain-active');

            // clone first slide and place on last space
            container.appendChild(slides[0].cloneNode([true]));

            // then remove first slide after it has been cloned
            container.removeChild(slides[0]);


            console.log(`slides: ${slides.length}`)
            if (current < slides.length) {
                current++
                updateNav(current)
            } else {
                current = 1
                updateNav(current);
            }

        }, time);
    }

    startsliding();

}

init();