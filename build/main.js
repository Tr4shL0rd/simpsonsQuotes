"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios = require("axios").default;
//async function main(options: apiData): Promise<any> {
const main = (options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    try {
        let returnData;
        const data = yield axios
            .get(options.url)
            .then((res) => res.data[0]);
        const quote = data.quote;
        const image = data.image;
        const character = data.character;
        const characterDirection = data.characterDirection;
        if (((_a = options.returnedData) === null || _a === void 0 ? void 0 : _a.data) == "quote") {
            returnData = quote;
        }
        else if (((_b = options.returnedData) === null || _b === void 0 ? void 0 : _b.data) == "image") {
            returnData = image;
        }
        else if (((_c = options.returnedData) === null || _c === void 0 ? void 0 : _c.data) == "character") {
            returnData = character;
        }
        else if (((_d = options.returnedData) === null || _d === void 0 ? void 0 : _d.data) == "characterDirection") {
            returnData = characterDirection;
        }
        else {
            returnData = data;
        }
        return yield returnData;
        //console.log(returnData)
    }
    catch (err) {
        console.error(err, "\nERROR!");
    }
});
const options = {
    url: "https://thesimpsonsquoteapi.glitch.me/quotes",
    // filter: {
    //     count: 1,
    //     character: "Homer",
    // },
    // returnedData: {
    // },
};
console.log(main(options));
