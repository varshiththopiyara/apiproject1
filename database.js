 const books = [ 
    {
        ISBN : "12345book",
        Title : "life changing story",
        PubDate : "02-06-2023",
        Language : "en",
        NumPage : 169,
        Author : [1,2],
        category : ["technical","spirtual","educational"]

    }
 ]

 const author = [
    {
        ID : 1 ,
        Name : "varshith",
        Books : ["12345book","secretbook"]
    },
    {
        ID : 2,
        Name : "venkatesh",
        Books : ["12345book"]
    }
 ]

 const publications = [ 
    {
        ID : 1,
        Name : "abc publications",
        Books : "12345book"
    }
 ]
module.exports = {books,author,publications};