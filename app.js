const minimist = require('minimist')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('./backend/data/user')

const args = minimist(process.argv.slice(2), { 
    alias: {'help': 'h'}, 
    string: ['name', 'password']
})

let conn = 'mongodb://localhost:27017/contract'
if(!!args.conn?.trim()) {
    conn = args.conn
} else {
    console.log('Не указана строка подключения к базе данных. Используется подключение по умолчанию.')
    console.log('mongodb://localhost:27017/contract')
}

mongoose.connect(conn, { 
    useNewUrlParser:true,
    useUnifiedTopology: true,
    autoIndex: false,
}).then(async () => {
    if(args._.length > 0) {
        exec(args._[0], args)
    } else if(args.help) {
        help()
    } else {
        run(args)
    }
}).catch(error => console.log(error))

function help() {
    mongoose.disconnect()
    console.log('Использование:')
    console.log('--port - порт, на котором будет запущен сервер. значение по умолчанию 3000')
    console.log('--conn - строка подключения к базе данных')
    console.log('--ssl - использовать защищенное соединение')
    console.log('Обязательные параметры к ключу --ssl')
    console.log('  --key - путь к файлу ключа')
    console.log('  --file - путь к файлу сертификата')
    console.log('')
    console.log('Сервисные команды')
    console.log('create-user - создать нового пользователя')
    console.log('Обязательные параметры команды')
    console.log('  --name - имя пользователя')
    console.log('  --password - пароль')
    console.log('')
    console.log('delete-user - удалить пользователя')
    console.log('Обязательные параметры команды')
    console.log('  --name - имя пользователя')
    console.log('')
    console.log('Примеры:')
    console.log('  node ./app.js create-user --name=user --password=qwerty')
    console.log('  node ./app.js delete-user --name=user')
}

async function exec(command, args) {
    switch(command) {
        case 'create-user':
            if(!!args.name?.trim() && !!args.password?.trim()) {
                try {
                    const exists = await User.findOne({ username: args.name })
                    console.log(exists)
                    if(exists) {
                        console.log(`Пользователь с имененм "${args.name}" уже существует`)
                        break
                    }

                    const user = new User({
                        username: args.name,
                        password: bcrypt.hashSync(args.password, 9)
                    })
                    await user.save()
                    console.log(`Пользователь "${args.name}" создан`)
                } catch(error) {
                    console.log(error)
                }
            } 
            break
        case 'delete-user':
            if(!!args.name?.trim()) {
                try {
                    await User.deleteOne({ username: args.name })
                    console.log(`Пользователь "${args.name}" удален`)
                } catch(error) {
                    console.log(error)
                }
            }
            break
    }

    mongoose.disconnect()
}

function run(args) {
    const options = {
        port: 3000,
        usessl: false,
        cert: {
            key: '',
            file: ''
        }
    }

    if(Boolean(args.port)) {
        options.port = args.port
    }

    if(Boolean(args.ssl)) {
        options.usessl = true
        if(!!args.key?.trim() && !!args.file?.trim()) {
            options.cert.key = args.key
            options.cert.file = args.cert
        } else {
            help()
        }
    }

    require('./backend')(options)
}
