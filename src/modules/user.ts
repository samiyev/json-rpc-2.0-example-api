import {Define, ISanction, IMethod} from "@samiyev/json-rpc-2.0";

export class User extends Define {
    public static modulename: string = 'user';
    public static sanction: ISanction;

    public static authorization: IMethod = {
        sanction: {
            session: 'active'
        },
        operation: async function (params): Promise<any> {

        }
    };

    public static registration = {
        sanction: {
            session: 'active'
        },
        action: async function (params): Promise<any> {

        }
    };

    public static get_info = {
        sanction: {
            session: 'active'
        },
        action: async function (params): Promise<any> {

        }
    }
}