const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const filePath = './test.js';

async function uploadFile() {
    try {
        const form = new FormData();
        form.append('file', fs.createReadStream(filePath));
        const url = "https://java-script-home-work.vercel.app/fizzbuzz";
        const response = await axios.post(url, form, {
            headers: form.getHeaders(),
        });
        console.log(response.data);
    } catch (e) {
        console.error(e.status, e.message);
    }

}

uploadFile()