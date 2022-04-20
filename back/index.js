import { app } from "./src/app.js";

const PORT = process.env.SERVER_PORT || 5001;

app.listen(PORT, () => {
  console.log(`\
 /$$ /$$ /$$ /$$ /$$ /$$ /$$ /$$ /$$ /$$ /$$ /$$ /$$ /$$ /$$ /$$ /$$ /$$ /$$
| $$|__/|__/|__/|__/|__/|__/|__/|__/|__/|__/|__/|__/|__/|__/|__/|__/|__// $$
| $$                                                                    | $$
| $$        /$$$$$$   /$$$$$$   /$$$$$$         /$$$$$$  /$$   /$$      | $$
| $$       /$$__  $$ /$$$_  $$ /$$$_  $$       /$$__  $$| $$  /$$/      | $$
| $$      |__/  \\ $$| $$$$\\ $$| $$$$\\ $$      | $$  \\ $$| $$ /$$/       | $$
| $$        /$$$$$$/| $$ $$ $$| $$ $$ $$      | $$  | $$| $$$$$/        | $$
| $$       /$$____/ | $$\\ $$$$| $$\\ $$$$      | $$  | $$| $$  $$        | $$
| $$      | $$      | $$ \\ $$$| $$ \\ $$$      | $$  | $$| $$\\  $$       | $$
| $$      | $$$$$$$$|  $$$$$$/|  $$$$$$/      |  $$$$$$/| $$ \\  $$      | $$
| $$      |________/ \\______/  \\______/        \\______/ |__/  \\__/      | $$
| $$                                                                    | $$
| $$ ================================================================== | $$
| $$ ----------           Fun하고 Cool하고 Sexy하게           ---------- | $$
| $$ 777777777777777777777777777777777777777777777777777777777777777777 | $$
| $$                                                                    | $$
|/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$/$$
/__/__/__/__/__/__/__/__/__/__/__/__/__/__/__/__/__/__/__/__/__/__/__/__/__/\
  `);
  console.log(`정상적으로 서버를 시작하였습니다.  http://localhost:${PORT}`);
});