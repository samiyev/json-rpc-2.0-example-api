import {Define, IFeature, IMethod} from "@samiyev/json-rpc-2.0";

export class User extends Define {
    public static modulename: string = 'user';
    public static feature: IFeature;

    public static authorization: IMethod = {
        feature: {
            session: 'active'
        },
        operation: async function (params): Promise<any> {

        }
    };

    public static registration: IMethod = {
        feature: {
            session: 'active'
        },
        operation: async function (params): Promise<any> {

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