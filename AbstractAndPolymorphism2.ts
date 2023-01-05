// advantage of abstraction
// easily expand of the system and it not have effect with the some system is not xpand or edit

// advantage of polymorphism
// create the different class by the same of interface
// move of the class to the point that we want like the function getUploadService() 


import fs from 'fs'
import * as uuid from 'uuid'
import * as Minio from 'minio'
import { Role, Employee } from './shared'
const Env= process.env ['NODE_ENV']
export class PurchaseRequest {
    private description: string;
    private owner: Employee;
    private amount: number;
    private fileContent: Buffer;
    private filePath: string;
    private originalFileName: string;
    public async Approve(approver: Employee): Promise<void> {
        if (
            this.amount > 10000
            // !approver.isRoleHigher Than (Role.Manager) ||
            // !this.owner.is RoleHigher Than (Role. Manager)
        ) {
            throw new Error(
                'The amount in purchase request is higher than what you can requested'
            )
        }

        const filePath = `${uuid.v4()}-${this.originalFileName}`
        const fileService = getUploadService()
        fileService.save(filePath, this.fileContent)
    }
}

interface FileService {
    save(filePath: string, fileContent: Buffer) : Promise<void>
}

// infra
function getUploadService() {
    if (Env === 'local') {
        return new LocalUploadService()
    }
    if (Env ===  'production') {
    return new ProductionUploadService()
    }
}

// seperate of the path to upload of the file 
// when edit of the system it not affect with the other state 

class LocalUploadService implements FileService {
    async save(filePath: string, fileContent: Buffer) {
        fs.writeFileSync(`/tmp/${filePath}`, fileContent)
    }
}

class ProductionUploadService implements FileService {
    async save(filePath: string, fileContent: Buffer) {
        const client = new Minio.Client({
            endPoint: 'localhost',
            port: 9000,
            useSSL: true,
            accesskey: 'minio', // Bad practice, but not sensitive in this context
            secretKey: 'minio123', // Bad practice, but not sensitive in this context
        })
        await client.putObject('myBucket', filePath, fileContent);
    }
}

// move of the class to the point that we want or suitable, like the function getUploadService() 
// like this 
// but in the diferent class must use the same methos name to use
function doThis() {
    console.log('do This')
}
function doThat() {
    console.log('do That')
}
function doStuff(a: number, b: number) {
    const runner = DoFactory(a, b);
    runner.run();
}


class DoThisRunner {
    run() {
        console.log('do This')
    }
}
class DoThatRunner {
    run() {
        console.log('do That')
    }
}

function DoFactory (a: number, b: number) {
    if (a > b) return new DoThisRunner()
    return new DoThatRunner()
}
