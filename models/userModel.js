let users = require('../data/users')

const { writeDataToFile } = require('../util/utils')

function findAll() {
    return users
    // return new Promise((resolve, reject) => {
    //     resolve(users)
    // })
}

function findById(id) {
    const user = users.find((p) => p.id === id)
    return user
    // return new Promise((resolve, reject) => {
    //     const user = users.find((p) => p.id === id)
    //     resolve(user)
    // })
}

function create(user) {
    return new Promise((resolve, reject) => {
        const newUser = {...user}
        users.push(newUser)
        writeDataToFile('./data/users.json', user);
        resolve(newUser)
    })
}

function update(id, user) {
    const index = users.findIndex((p) => p.id === id)
    users[index] = {id, ...user}
    writeDataToFile('./data/users.json', users);
    return users[index]
}

function remove(id) {
    users = users.filter((p) => p.id !== id)
    writeDataToFile('./data/users.json', users);
    return {status:"removed completed"}
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}