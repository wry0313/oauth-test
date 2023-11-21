export const getGoogleUrl = (from: string) => {
  const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;
  const options = {
    redirect_uri: "http://localhost:8080/auth/google/callback",
    client_id: "824465319637-82clvkuneege2ubthi51pivdl3rveum8",
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
    state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};
