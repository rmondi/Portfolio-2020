/*jshint esversion: 6 */

window.addEventListener('DOMContentLoaded', () => {

    const slider = new Flickity(document.getElementById('slider'), {
        wrapAround: true,
        cellAlign: 'left',
        contain: true,
        autoPlay: 5000,
        prevNextButtons: false,
        pageDots: false
    });

    const body = document.querySelector('body'),
    colors = [
        {
            'bgColor': 'js-background-color-1',
            'textColor': 'js-text-color-1'
        },
        {
            'bgColor': 'js-background-color-2',
            'textColor': 'js-text-color-2'
        },
        {
            'bgColor': 'js-background-color-3',
            'textColor': 'js-text-color-1'
        },
        {
            'bgColor': 'js-background-color-4',
            'textColor': 'js-text-color-2'
        },
    ];

    let previousColor = 0,
    currentColor = 1;

    slider.on('select', index => {
        body.classList.remove(colors[previousColor].bgColor);
        body.classList.remove(colors[previousColor].textColor);
        body.classList.add(colors[currentColor].bgColor);
        body.classList.add(colors[currentColor].textColor);
    });

    slider.on('change', index => {
        if (currentColor !== colors.length -1) {
            currentColor += 1;
        } else {
            currentColor = 0;
        }

        if (previousColor !== colors.length - 1) {
            previousColor += 1;
        } else {
            previousColor = 0;
        }
    });

    document.getElementById('previous').addEventListener('click', () => slider.previous());

    document.getElementById('next').addEventListener('click', () => slider.next());
});
