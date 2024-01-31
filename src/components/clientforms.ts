"use client";

import secureLocalStorage from "react-secure-storage";

export function Login(e: Event) {
  try {
    if (!e) return;
    e.preventDefault();
    const formData = new FormData(e.target as any);
    const user = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) =>
      res.json().then((data) => {
        if (data.status === 200) {
          secureLocalStorage.setItem("user_token", data.userJWT);
          window.location.href = "/";
        } else {
          switch (data.status) {
            case 406:
              return "Username or Email already registered!";
            case 404:
              return "Unexpected Error: Not all signup details found";
            case 500:
              return "Unexpected Error: It will be worked on shortly. Try again soon!";
          }
        }
      })
    );
  } catch (error) {
    console.error(error);
    return "Unexpected Error: It will be worked on shortly. Try again soon!";
  }
}

export function Signup(e: Event) {
  try {
    if (!e) return;
    e.preventDefault();
    const formData = new FormData(e.target as any);
    const user = {
      username: formData.get("username"),
      password: formData.get("password"),
      email: formData.get("email"),
      fname: formData.get("fname"),
      lname: formData.get("lname"),
    };
    fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) =>
      res.json().then((data) => {
        if (data.status === 200) {
          secureLocalStorage.setItem("user_token", data.userJWT);
          window.location.href = "/";
        } else {
          switch (data.status) {
            case 406:
              return "Username or Email already registered!";
            case 404:
              return "Unexpected Error: Not all signup details found";
            case 500:
              return "Unexpected Error: It will be worked on shortly. Try again soon!";
          }
        }
      })
    );
  } catch (error) {
    console.error(error);
    return "Unexpected Error: It will be worked on shortly. Try again soon!";
  }
}

export function Logout() {
  secureLocalStorage.setItem("user_token", "");
  return { status: 200 };
}

export function Post(e: Event) {
  try {
    if (!e) return;
    const formData = new FormData(e.target as any);

    const post = {
      title: formData.get("title"),
      author: formData.get("author"),
      content: formData.get("content"),
    };

    fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then((res) =>
      res.json().then((data) => {
        switch (data.status) {
          case 404:
            return "Unexpected Error";
          case 200:
            return 200;
          case 500:
            return "Unexpected Error";
        }
      })
    );
  } catch (error) {
    console.error(error);
    return;
  }
}
