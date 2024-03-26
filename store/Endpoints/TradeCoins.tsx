import {defaults} from "./defaults";

export const tradeEndpoints = {
    tradeCoin: {
        v1: {
            ...defaults.methods.GET,
            ...defaults.versions.v1,
            uri: "/tradeCoin/",
        },
    },
};
