const seedTemplates = require('./template.json')
const fs = require('fs')
const crypto = require('crypto')

function shuffle(templates) {
  let i = templates.length
  while (i) {
    let j = crypto.randomInt(i)
    let t = templates[--i]
    templates[i] = templates[j]
    templates[j] = t
  }
  return templates
}

function update(templates) {
  const seeds = templates.map((seed, idx) => {
    const no = idx
    seed.name = `SAV3 #${no}`
    seed.description = seed.description.replaceAll('#', `#${no}`)
    seed.image = `ipfs://Qma46CH6928LoVqMSxEiuN43vTeV4TNdKUbMHXtpVfJGTK/${seed.image}.jpg`
    return seed
  })

  return seeds
}

function write(seeds) {
  if (!fs.existsSync('./seed.json')) {
    fs.writeFileSync('./seed.json', JSON.stringify(seeds, null, 2))
  }

  if (!fs.existsSync('./seeds')) {
    fs.mkdirSync('./seeds')
  }

  seeds.forEach((seed, idx) => {
    fs.writeFile(`./seeds/${idx}.json`, JSON.stringify(seed), () => {})
  })
}

function generate(templates) {
  write(update(shuffle(templates)))
}

generate(seedTemplates)
