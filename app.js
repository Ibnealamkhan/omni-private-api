const express = require('express')
const PORT = 5000
const app = express()

// Routes
app.get('/', async (req, res) => {
    const url = 'https://api.omnicard.co.in:5021/authServer/auth/getTransactionsListForUser'
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": "jZ+k7AHSG3T70o/W9xato88aqpLdIWig16zPyeYu81m2T8jFh+dByVQR0Sp7p+hrQNpnjPx2WM5OFQbCsx3DsChT7XUnGO9mM/cFr3TgIIAr+rhzvLGLyu9OSSrf9aZZ7o9ejpAdRPFZV0W1KNZTqifRaiT+MtXAEdXn45F5X1shL95D18/wQpD14nTIo+IPA5emtbxK5R8iW0eAmvCxCSz4V7DRpGHw6kcHclJxyivJUSz7cSsyaOA0dqqhl9kD0hw+DWDGbWizjfbm9zWgqA+U184MfQTeKSI/9O45NdN33nAYhIpN95txXV8yUd2gtaZaOVLLKxm9m5Za7uOvx74ofU7ScMRllLmJdzkAFo/W1H9s2wGRU5iZ43pc60qO7wEvHVQGOo0fEztj3oVBEesrXqQT5GvabR8VbxIJixj21tgFzs0eJS9cLdFzlyj452j7hcaC7HUvFNdmzlEuA7cTVFjxf42kfakWHsyyioMjkqrcO/FdTtYg5FwvXTSmD1Jk7Ig2rL9Blggja12mV6Uh3Zw9JyLfKKtZJQmWCKRwh5XwDIkOGEvK6uFyzUiM93kG9YwuMFULMv8Ku3rJTA=="
        },
        body: JSON.stringify({
            "b9": "TRANSACTION",
            "b6": "1680287400000",
            "b1": "1",
            "b2": "10",
            "b7": "1682879340000"
        })
    })
    const result = await response.json()
    res.status(200).json({ success: true, result })
})

app.listen(PORT, () => console.log(`carkear api listening on port ${PORT}`))