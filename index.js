function allPlanets() {
    const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
    return planets;
}

module.exports.getPlanets = allPlanets;


module.exports.getMercury = function Mercury() {
    const mercury = {
        image: 'images/mercury.jpg',
        distance: '39.704 million miles',
        yearLength: 88,
        description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earths Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system',
        radius: 1516,
        diameter: 3030
    }

    return mercury;
}