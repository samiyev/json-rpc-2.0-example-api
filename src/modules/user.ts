import {Define, IFeature, IMethod} from "@samiyev/json-rpc-2.0";

export class User {
    // public static modulename;

    public static authorization: IMethod = {
        feature: {
            session: 'active'
        },
        operation: async function (params): Promise<any> {
            console.log(params);
        }
    };

    public static registration: IMethod = {
        feature: {
            session: 'active'
        },
        operation: async function (params): Promise<any> {
            console.log(this['api-session']);
            throw new Error("dsfkhfdksalf")
        }
    };

    public static get_info: IMethod = {
        feature: {
            session: 'active'
        },
        operation: async function (params): Promise<any> {

        }
    }
}