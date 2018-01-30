import {User} from "./modules/user";
import {Composer} from "@samiyev/json-rpc-2.0";

const model = new Composer({
    defines: [
        User
    ],
    handlers: {
        init: init,
        reject: reject,
        resolve: resolve
    },
    options: {
        workers: 4
    }
});

async function init(method, params, sanction) {

}

async function reject(method, params, error) {

}

async function resolve(method, params, result) {

}

export * from "./modules/user";