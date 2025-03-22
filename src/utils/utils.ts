import { $ } from "bun"
import chalk from "chalk"
import {basename, join} from 'path'


export async function readJsonByPath(jsonFilePath:string) {
    try {
        const jsonFile = Bun.file(jsonFilePath,{
            type: 'application/json'
        })
        if(!await jsonFile.exists()) throw new Error(`File ${jsonFilePath} doesn't exist.`)

        return await jsonFile.json()
    } catch (error) {
        console.log(chalk.red(error))
    }
}


export async function cloneRepos(repositories:string[], targetfolder: string) {
    const repoPromises = repositories.map(repo => $`git clone ${repo} ${join(targetfolder,getRepoName(repo))}`)
    return await Promise.allSettled(repoPromises)
}


function getRepoName(repo:string) {
    return basename(repo).replace('.git','')
}