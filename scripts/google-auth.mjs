import http from "http";
import { URL } from "url";
import { google } from "googleapis";
import { readFileSync, existsSync } from "fs";
import { resolve } from "path";

function loadEnvFile() {
  const envPath = resolve(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;

  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim().replace(/^["']|["']$/g, "");
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnvFile();

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REDIRECT_URI =
  process.env.GOOGLE_REDIRECT_URI ?? "http://localhost:3333/oauth2callback";

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error(
    "Imposta GOOGLE_CLIENT_ID e GOOGLE_CLIENT_SECRET in .env.local prima di eseguire questo script.",
  );
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);

const authUrl = oauth2Client.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: ["https://www.googleapis.com/auth/calendar"],
});

console.log("\n=== Google Calendar: ottieni refresh token ===\n");
console.log("1. Apri questo URL nel browser:\n");
console.log(authUrl);
console.log("\n2. Autorizza con l'account Google del calendario.\n");
console.log("3. Attendi il redirect su localhost...\n");

const server = http.createServer(async (req, res) => {
  try {
    if (!req.url?.startsWith("/oauth2callback")) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    const url = new URL(req.url, "http://localhost:3333");
    const code = url.searchParams.get("code");
    const error = url.searchParams.get("error");

    if (error) {
      res.writeHead(400);
      res.end(`Errore OAuth: ${error}`);
      server.close();
      process.exit(1);
      return;
    }

    if (!code) {
      res.writeHead(400);
      res.end("Codice mancante");
      return;
    }

    const { tokens } = await oauth2Client.getToken(code);

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(
      "<h1>Autorizzazione completata</h1><p>Puoi chiudere questa finestra e tornare al terminale.</p>",
    );

    console.log("\n=== COPIA QUESTO IN .env.local E VERCEL ===\n");
    console.log(`GOOGLE_REFRESH_TOKEN=${tokens.refresh_token ?? ""}`);
    if (tokens.access_token) {
      console.log(`# access token (temporaneo): ${tokens.access_token.slice(0, 20)}...`);
    }
    if (!tokens.refresh_token) {
      console.log(
        "\nATTENZIONE: refresh_token non ricevuto. Revoca l'accesso dell'app da Google Account e riprova con prompt=consent.",
      );
    }
    console.log("\n");

    server.close();
    process.exit(0);
  } catch (err) {
    console.error(err);
    res.writeHead(500);
    res.end("Errore server");
    server.close();
    process.exit(1);
  }
});

server.listen(3333, () => {
  console.log("Server in ascolto su http://localhost:3333\n");
});
