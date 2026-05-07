// Extract the domain name from a URL (5 kyu)
// https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
    return url
        .replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .split('.')[0]
}

// Test
console.log(domainName("http://google.com")) // "google"
console.log(domainName("http://google.co.jp")) // "google"
console.log(domainName("www.xakep.ru")) // "xakep"
console.log(domainName("https://youtube.com")) // "youtube"