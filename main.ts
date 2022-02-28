const axios = require("axios").default;

interface apiData {
    url: string;
    filter?: {
        count?: number;
        character?: string;
    };
    returnedData?: {
        data?: string;
    };
}

const main = async (options: apiData): Promise<any> => {
    try {
        let returnData: object;
        const data = await axios
            .get(options.url)
            .then((res: { data: any }) => res.data[0]);

        const quote = data.quote;
        const image = data.image;
        const character = data.character;
        const characterDirection = data.characterDirection;

        if (options.returnedData?.data == "quote") {
            returnData = quote;
        } else if (options.returnedData?.data == "image") {
            returnData = image;
        } else if (options.returnedData?.data == "character") {
            returnData = character;
        } else if (options.returnedData?.data == "characterDirection") {
            returnData = characterDirection;
        } else {
            returnData = data;
        }
        return returnData;
        // returnData = new Promise((resolve, reject) => {
        //     resolve(returnData);
        // });
        // return returnData;
        // console.log(returnData)
    } catch (err) {
        console.error(err, "\nERROR!");
    }
};

const options = {
    url: "https://thesimpsonsquoteapi.glitch.me/quotes",
    // filter: {
    //     count: 1,
    //     character: "Homer",
    // },
    // returnedData: {
    // },
};

Promise.resolve(main(options)).then((res: any) => console.log(res));
