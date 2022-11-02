import config from "../config";
import axios from "axios";
import { returnErrorMessage } from "./authErrors";

const apiKey = config.FIREBASE_API_KEY;

export async function signin(email, password) {
  try {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
    const response = await axios.post(url, {
      email,
      password,
    });
    if (response.status === 200) {
      return {
        status: "ok",
        data: response.data,
      };
    }
  } catch (error) {
    const errorMessage = returnErrorMessage(error);
    return { status: "error", errorMessage: errorMessage };
  }
}
