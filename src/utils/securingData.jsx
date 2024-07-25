import CryptoJS, { AES } from "crypto-js";

export const encryptData = (data) => {
  const encryptedData = AES.encrypt(
    JSON.stringify(data),
    // eslint-disable-next-line no-undef
    process.env.SECUREPASS_ENC_KEY
  ).toString();
  return encryptedData;
};

export const decryptData = (encryptedData) => {
    const decryptedData = AES.decrypt(
      encryptedData,
      // eslint-disable-next-line no-undef
      process.env.SECUREPASS_ENC_KEY
    ).toString(CryptoJS.enc.Utf8);
  return JSON.parse(decryptedData);
};

export const decFetchedData = (encryptedData, userId) => {
  try {
    const decryptedData = AES.decrypt(
      encryptedData,
      // eslint-disable-next-line no-undef
      decryptData(userId)
    ).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
  } catch (err) {
    console.log(err);
  }
};