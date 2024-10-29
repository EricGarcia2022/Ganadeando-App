// src/services/api.js
export const guardarPersona = async (persona) => {
    return fetch("http://localhost:8080/guardar", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(persona),
    });
  };
  