import { postRequest } from "./postRequest";
import facts from "../assets/facts.json"

export function ffPostRequest(url:string, auth:string): void {
    const randomIndex: number = Math.floor(Math.random() * facts.facts.length);
    postRequest(url,auth, facts.facts[randomIndex]);
}