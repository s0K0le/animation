(function () {
    const boxes = document.querySelectorAll('[class*="js-productsBox"]');
    const links = document.querySelectorAll('.js-productsLink');

    function currentActiveLink() {
        for (var item = 0; item < links.length; item++)
            if (links[item].classList.contains('active'))
                return item;
    }

    function clickLink() {
        console.log(boxes);
        
        if (!this.classList.contains('active')) {
            let previousPosition = currentActiveLink();
            
            links[previousPosition].classList.remove('active');
            this.classList.add('active');

            setTimeout(() => {
                boxes[previousPosition].classList.replace("js-productsBox--hide", "js-productsBox--disable");

                boxes[currentActiveLink()].classList.replace("js-productsBox--disable", "js-productsBox--show");
            }, 500);

            // boxes[previousPosition].classList.add("js-productsBox--hide");
            boxes[previousPosition].classList.replace("js-productsBox--show", "js-productsBox--hide");
        }
    }

    for (var item = 0; item < links.length; item++) {
        links[item].addEventListener('click', clickLink, false);
    }

})();
