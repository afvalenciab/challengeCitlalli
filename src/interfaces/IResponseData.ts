export interface IResponseStoresData {
    status: string;
    result: {
        uuid: string;
        email: string;
        stores: [
            {
                uuid: string;
                name: string;
                availabilityState: string;
                providers: [];
                config: {
                    brandColor: string;
                }
            }
        ]
        username: string;
    };
}