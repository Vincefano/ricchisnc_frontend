import { Action } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants/baseurl";
import { CLIENT_ID, CLIENT_SECRET } from "../../constants/env";
import { PAGES } from "../../constants/pages";
import { setLoginError } from "../../redux/loginError";
import { Dispatch } from "react";

const ENDPOINT = `${BASE_URL}/oauth/token/`;

//TODO: Gestire errori

/** Function that makes a request to backend to get tokens and other data, then stores them in localStorage */
export const login = async (
  username: string,
  password: string,
  navigate: (url: string) => void,
  dispatch: Dispatch<Action>,
  setLoading: Dispatch<boolean>
) => {
  /** Generate the body of the request */
  const BODY = new URLSearchParams({
    username,
    password,
    client_id: CLIENT_ID,
    grant_type: "password",
    client_secret: CLIENT_SECRET,
  });

  try {
    setLoading(true);
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: BODY,
    });

    if (!response.ok) throw new Error("Login failed");

    const { access_token, expires_in, scope, refresh_token } =
      await response.json();

    if (access_token && expires_in && scope && refresh_token) {
      /** Items to store in localStorage */
      localStorage.setItem("authToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      localStorage.setItem("role", scope);
      localStorage.setItem("expires in", expires_in);
      localStorage.setItem("username", username);
    }

    navigate(PAGES.dashboardPage);
    dispatch(setLoginError({ value: null, label: null, isError: false }));
  } catch (error) {
    dispatch(
      setLoginError({
        value: error instanceof Error ? error.message : String(error),
        label: "Login Error",
        isError: true,
      })
    );
  } finally {
    setLoading(false);
  }
};
