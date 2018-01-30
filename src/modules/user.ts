import {Define, ISanction, IMethod} from "@samiyev/json-rpc-2.0";

export class User extends Define {
    public static modulename: string = 'user';
    public static sanction: ISanction;

    public static authorization: IMethod = {
        sanction: {},
        operation: async function (params): Promise<any> {

        }
    };

    public static registration = {
        sanction: {},
        action: async function (params): Promise<any> {

        }
    };
}