const jwt = require('jsonwebtoken')

const user = {
    id: 1,
    username: 'bruno',
    password: 'senha123'
}

const signin = async (req, res)=>{
    const { username, password } = req.body
    console.log(req.body);
    if(!username || !password) return res.status(400).send('Preencha todos os campos!')
    if(username != user.username || password != user.password) return res.status(404).send('Usuário ou Senha incorreto!')
    const token = jwt.sign({id: user.id, username: user.username}, 'token_secret')
    return res.status(200).json(token)
}

const getDatas = (req, res)=>{
    try{
        const dados = [
            {name: "Maria", age:15},
            {name: "Caio", age:43},
            {name: "Marta", age:20}
        ]
        return res.json(dados)
    }catch(error){
        console.log(error);
        res.send(error)
    }
}

module.exports = { signin, getDatas }