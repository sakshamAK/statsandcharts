import { createServer } from "miragejs"

export default function () {
    createServer({
        routes() {
            this.get("/api/data", () => ((
                {
                    headerData: [
                        { id: 1, title: "Total Revenues", value: "$2,129,430", icon: new URL("./assets/inbox.svg", import.meta.url).href, bgColor: "#DDEFE0" },
                        { id: 1, title: "Total Transactions", value: "1,520", icon: new URL("./assets/trx_black.svg", import.meta.url).href, bgColor: "#F4ECDD" },
                        { id: 1, title: "Total Likes", value: "9,721", icon: new URL("./assets/like.svg", import.meta.url).href, bgColor: "#EFDADA" },
                        { id: 1, title: "Total Users", value: "892", icon: new URL("./assets/people.svg", import.meta.url).href, bgColor: "#DEE0EF" },
                    ],
                })))
            this.get("/api/line", () => (({
                lineGraph: {
                    data1: { points: ["250", "400", "200", "300", "250", "450"], label: "Guest" },
                    data2: { points: ["100", "420", "150", "450", "180", "250"], label: "User" },
                }
            })))
            this.get("/api/pie", () => (({
                pieGraph: {
                    data: ["55", "14", "55"],
                    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
                    backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
                    colorLabel: ["pink", "green", "yellow"]
                }
            })))

            this.get("/api/google", () => {
                const token = localStorage.getItem("token");
                fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json'
                    }
                }).then(res => res.json()).then(a => {
                    console.log((a));
                    return localStorage.setItem("user", JSON.stringify(a))
                }).catch(() => localStorage.removeItem("user"));
                
            })

            this.passthrough();
            this.passthrough('https://www.googleapis.com/oauth2/v1/userinfo');
        }
    })
}