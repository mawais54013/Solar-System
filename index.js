function allPlanets() {
    const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
    return planets;
}

module.exports.getPlanets = allPlanets;


module.exports.getMercury = function Mercury() {
    const mercury = {
        image: 'https://solarsystem.nasa.gov/system/stellar_items/image_files/2_feature_1600x900_mercury.jpg',
        distanceFromSun: '39.704 million miles',
        yearLength: '88 Earth Days',
        description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earths Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system',
        radius: 1516,
        oneEarthDay: 176,
        moons: 0
    }

    return mercury;
}

module.exports.getVenus = function Venus() {
    const venus = {
        image: 'https://solarsystem.nasa.gov/system/downloadable_items/1082_PIA00271_detail.jpg',
        distanceFromSun: '67.337 million miles',
        yearLength: '225 Earth Days',
        description: 'Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth, but it is now a very different world. Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system—with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.',
        radius: 3760,
        oneEarthDay: 243,
        moons: 0
    }

    return venus;
}

module.exports.getEarth = function Earth() {
    const earth = {
        image: 'https://solarsystem.nasa.gov/system/stellar_items/image_files/4_earth.jpg',
        distanceFromSun: '91.433 million miles',
        yearLength: '365 Earth Days',
        description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.',
        radius: 3959,
        oneEarthDay: '24 hours',
        moons: 1
    }
}