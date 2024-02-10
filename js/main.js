function scrollToSection(val = 'carouselExampleIndicators') {
    const section = document.getElementById(val);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Section with id '${val}' not found.`);
    }
}
