let sectionTitleObserser = new IntersectionObserver(function (observables) {
    observables.forEach(function (observable) {
        if (observable.intersectionRatio > 0.6) {
            observable.target.classList.remove('notVisible')
            // sectionTitleObserser.unobserve(observable.target)
        } else {
            observable.target.classList.add('notVisible')
        }
    })
    }, {
        threshold: [0.6]
});

let sectionTitles = document.querySelectorAll('.sectionTitle')
sectionTitles.forEach(function (sectionTitle) {
    sectionTitle.classList.add('notVisible')
    sectionTitleObserser.observe(sectionTitle)
})