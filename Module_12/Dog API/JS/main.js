const fetchPromise = fetch("https://dog.ceo/api/breeds/list/all");
console.log(fetchPromise);

fetchPromise.then((response) => {
    console.log('Received response: ${response.status}');
    });
    console.log("Started request...");