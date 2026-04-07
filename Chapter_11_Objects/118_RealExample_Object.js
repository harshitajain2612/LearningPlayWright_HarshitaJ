const ENV = {

    BASE_URL : "https://staging.myapp.com",
    Timeout : 5000,
    Retries: 2,
    Browser : "Chrome"

}

const EXPECTED_RESPONSE = {
status : 200,
body : {
    user: {role: "admin",active : true}
}

}