const fetcherPOST = (url: string) => fetch(url, { cache: 'no-store', method: "POST" }).then((res) => res.json());
export default fetcherPOST;