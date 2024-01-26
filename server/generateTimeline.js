function generateTimeline(results) {
    let index = results.length

    while (index != 0) {
        let randomIndex = Math.floor(Math.random() * index)
        index--
        ;[results[index], results[randomIndex]] = [results[randomIndex], results[index]]
    }
    return results
}

module.exports = generateTimeline
