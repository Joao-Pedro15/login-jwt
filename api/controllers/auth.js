const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const authorize = async (req, res, next)=>{
    const auth = req.header('authorization')
    if(!auth) return res.status(401).send('Precisa estar logado')
    const [, token] = auth.split(' ')   

    try{
        await promisify(jwt.verify)(token, 'token_secret')
        return next()
    }catch(error){
        return res.status(500).send('Houve um erro interno!')
    }
}

module.exports = { authorize }