import fs from 'fs'
import path from 'path'

if (!fs.existsSync(path.join(__dirname, "../app_cloud"))) {
    main()
} else {
    fs.rm(path.join(__dirname, "../app_cloud"), (err) => {
        if (!err) {
            main()
        } else {
            console.log('jalan')
        }
    })
}

function main() {
    fs.mkdirSync(path.join(__dirname, "../app_cloud"))
    fs.copyFileSync(path.join(__dirname, "../app.yaml"), path.join(__dirname, "../app_cloud/app.yaml"))
    fs.copyFileSync(path.join(__dirname, "../.gitignore"), path.join(__dirname, "../app_cloud/.gitignore"))
}