const User = require('../models/userModel.js')
const { getPostData } = require('../util/utils.js')

// @desc   set headers 
// @para   server response, response Status Code, body
function setHeader(res, code, respBody){
    res.writeHead(code, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify(respBody))
}


// @desc    Gets All users
// @route   GET /api/user
function getUser(req, res) {
    try {
        const users =  User.findAll();
        setHeader(res,200,users)
    } catch (error) {
        console.log(error)
    }
}

// @desc    Gets Single User
// @route   GET /api/user/:id
function getUserID(req, res) {
    try {
        const id = req.url.split('/')[3];
        const user = User.findById(id)

        if(!user) {
            setHeader(res,404,{message: "client Not Found"})
        } else {
            setHeader(res,200,user)
        }
    } catch (error) {
        console.log(error)
    }
}

// @desc    Create a User
// @route   POST /api/user
async function createUser(req, res) {
    try {
        // res.writeHead(201, { 'Content-Type': 'application/json' })
        let body = await getPostData(req);
        await User.create(JSON.parse(body))
        return res.end(JSON.stringify(body))  //response not printing \w/
    } catch (error) {
        console.log(error)
    }
}

async function updateUser(req, res) {
}

async function deleteUser(req, res) {
}

module.exports = {
    getUser,
    getUserID,
    createUser,
    updateUser,
    deleteUser
}