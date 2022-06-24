const mockData = require("./mockData.json");
export const fetchFormData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return mockData;
}