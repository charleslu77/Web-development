const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // To see what path should we go
    // console.dir(form);
    const searchTerm = (form.elements.query.value);
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    
    // If there exist multiple API, we can use other ways
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let res of shows) {
        if (res.show.image) {
            const img = document.createElement("IMG");
            img.src = res.show.image.medium;
            document.body.append(img);
        }
    }
}

