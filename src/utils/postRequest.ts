export async function postRequest(url:string, auth:string, message:string): Promise<void> {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization" : auth,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: message
        }),
    });
    const data = await response.json();
    console.log(data);
}