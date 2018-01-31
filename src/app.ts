import {Composer, RPCServer} from "@samiyev/json-rpc-2.0";
import {User} from "./modules/user";
import * as config from './config';

export * from "./modules/user";

async function init(request, method) {

}

async function reject(client, request, method, error) {

}

async function resolve(client, request, method, result) {

}

const model = new Composer({
    defines: [
        User
    ],
    handlers: {
        init: init,
        reject: reject,
        resolve: resolve
    }
});


const server = new RPCServer(config.options, model);
