const getTheTitles = function(books) {
    let titles = [];
    for (let i = 0; i < books.length; i++) {
        book = books[i];
        title = book.title;
        titles.push(title);
    }
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
