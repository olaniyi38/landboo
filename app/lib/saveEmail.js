async function saveEmail(email) {
    const res = await fetch("https://script.google.com/macros/s/AKfycbyB2tsv_h7NTOqzRZfmSnZMJYSiM8TEHFrwqNJJBkCmj46EMuATErBzzyA8ar2f5CUcDA/exec?action=addUser", {
        method: "POST",
        body: JSON.stringify({
            email: email
        }),
        mode: "no-cors"

    })


    return await res.text()
}

export default saveEmail