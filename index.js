const express = require('express');

//DATABASE LINKAGE
const database = require("./database");


//INITIALIZE EXPRESS
const apiproject1= express();
/*
    route                 /
    Methods              get
    parametrs            none
    Description         get all the books
    Access              public domain
*/
apiproject1.get("/",(req,res) => {
   res.json({books:database.books});
});

/*
    route                 /is
    Methods              get
    parametrs            isbn
    Description         get all the specific books 
    Access              public domain
*/

 apiproject1 .get("/is/:isbn",(req,res)=> {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );
    if(getSpecificBook. length === 0){
        res.json({error: `no book is found for the ISBN number entered ${req.params.isbn}`});
    }
    res.json({book : getSpecificBook});
});

/*
    route                 /c
    Methods              get
    parametrs            category
    Description         get all the specific books based on the category
    Access              public domain
*/
apiproject1.get("/c/:category",(req,res)=> {
    const getSpecificBook = database.books.filter (
        (book) =>book.category.includes(req.params.category)
    )
    if(getSpecificBook.length === 0) {
        res.json({error:`No Category of book exist on the given ${req.params.category}`})
    }
    res.json({book:getSpecificBook});
});

/*
    route                 /NONE
    Methods              get
    parametrs            Language
    Description         get all the specific Language of the books
    Access              public domain
*/

apiproject1.get("/:Language",(req,res)=> {
    const getSpecificBook = database.books.filter(
       (book) =>book.Language === req.params.Language
    );
    if(getSpecificBook.length === 0) {
        res.json({error:`No Language of book exist on the given ${req.params.Language}`});
    }
    res.json({book:getSpecificBook});
});

/*
    route                 /a
    Methods              get
    parametrs            author
    Description         get all the Authors
    Access              public domain
*/
apiproject1.get("/a/:author",(req,res) => {
    res.json({authors : database.author})
});

/*
    route                 /a/id
    Methods              get
    parametrs            ID
    Description         get all the Authors based on ID's
    Access              public domain
*/

apiproject1.get("/a/id/:ID",(req,res)=> {
    const getSpecificAuthorbyID = database.author.filter(
        (e) => e.ID === parseInt(req.params.ID)
    );
    if(getSpecificAuthorbyID.length === 0) {
        res.json({error:`No author present on the data entered ${req.params.ID}` });
    }
    res.json({authors:getSpecificAuthorbyID});
});

/*
    route                 /a/book
    Methods              get
    parametrs            isbn
    Description         get the specific author based on books
    Access              public domain
*/
apiproject1.get("/a/book/:isbn",(req,res)=> {
    const getSpecificAuthor = database.author.filter(
        (author) => author.Books.includes(req.params.isbn)
    );
    if(getSpecificAuthor.length===0) {
        res.json({error:`No author found for the book ${req.params.isbn}`})
    };
    res.json({ author :getSpecificAuthor});
});

/*
    route                 /pub
    Methods              get
    parametrs            publication
    Description         get all the publications
    Access              public domain
*/
apiproject1.get("/pub/:publications",(req,res)=> {
    res.json({publication : database.publications});
});

/*
    route                 /pub/id
    Methods              get
    parametrs            ID
    Description         get all the publications based on ID's
    Access              public domain
*/
apiproject1. get("/pub/id/:ID",(req,res)=> {
    const getSpecificPublication = database.publications.filter(
        (publication) => publication.ID === parseInt(req.params.ID)
    );
    if(getSpecificPublication.length === 0){
        res.json({error:` No publication present for the entered data${req.params.ID}`})
    };
    res.json({publication : getSpecificPublication});
});

/*
    route                 /pub/book
    Methods              get
    parametrs            Books
    Description         get all the publications based on books
    Access              public domain
*/
apiproject1.get("/pub/book/:Books",(req,res)=> {
    const getSpecificPublicationbyBook = database.publications.filter(
        (p) => p.Books ===req.params.Books
    );
   if(getSpecificPublicationbyBook.length ===0) {
    res.json({error:`No book of required publication present for${req.params.Books}`})
   };
   res.json({publication : getSpecificPublicationbyBook});
})





apiproject1.listen(3000, () => {
    console.log("server is upto and running well!!!!!!");
});