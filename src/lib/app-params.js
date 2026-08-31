const params = new URLSearchParams(window.location.search);

export const appParams = {
  appId: import.meta.env.VITE_BASE44_APP_ID || params.get("app_id") || "",
  token: params.get("token") || "",
};

