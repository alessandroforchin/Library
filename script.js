let myLibrary = [];

const bookContainer = document.querySelector('.book-container');
let bookTitle = document.getElementById('title');
let bookAuthor = document.getElementById('author');
let bookPages = document.getElementById('pages');

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
}

function displayBook() {
    const newBox = document.createElement('div');
    newBox.classList.add('new-box');
    bookContainer.appendChild(newBox);

    const newLine = document.createElement('p');
    newLine.classList.add('new-line');
    newBox.appendChild(newLine);
    newLine.textContent = `"${bookTitle.value}" written by ${bookAuthor.value} has ${bookPages.value} pages.`;

    const newButtons = document.createElement('div');
    newButtons.classList.add('new-btn-container');
    newBox.appendChild(newButtons);

    const readButton = document.createElement('button');
    readButton.classList.add('read-btn');
    newButtons.appendChild(readButton);
    readButton.textContent = 'Read';
    readButton.addEventListener('click', () => {
        if (readButton.textContent === 'Read') {
            readButton.textContent = 'Not Read';
        } else {
            readButton.textContent = 'Read';
        }
    })

    const removeButton = document.createElement('button')
    removeButton.classList.add('remove-btn');
    newButtons.appendChild(removeButton);
    removeButton.textContent = 'Remove';

    for (let i = 0; i < myLibrary.length; i++) {
        removeButton.addEventListener('click', () => {
            bookContainer.removeChild(newBox);
            return myLibrary.splice(i);
        })
    }
}

document.getElementById('add').addEventListener('click', () => {
    let title1 = bookTitle.value;
    let author1 = bookAuthor.value;
    let pages1 = bookPages.value;

    let newBook = new Book(title1, author1, pages1);
    
    myLibrary.push(newBook);
    displayBook();

    document.querySelector('.popup').style.display = 'none';
})

document.getElementById('add-book-btn').addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'flex';
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.popup').style.display = 'none';
})