async function saveEmail(email) {
    const res = await fetch("https://script.google.com/macros/s/AKfycbw39LGZgvWgSlhxPgpduWEOyDbG26jfRSMMHUfT3XjEjl4daccBgk8O3UE51Tc6VeeX/exec?action=addUser", {
        method: "POST",
        body: JSON.stringify({
            email: email
        }),
        mode: "no-cors"

    })


    return await res.text()
}

export default saveEmail