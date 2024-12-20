const express = require("express");
const app = express();
const PORT = 3005;
const path = require("path");
const viewsPath = path.join(__dirname, '../views')
// app.set('views', viewsPath)
// app.set('view engine', 'ejs')

// // app.get("", (req, res) => {
// //     res.render
// //     (resolve( "../views/index.html"));
// // });
// app.get('', (req, res) => {
//     res.render('index', {
//         title: 'Weather',
//         name: 'Nate Sherer'
//     })
// })

app.get('/movies', (req, res) => {
    if (!req.query.results) {
        return res.send ({
            error: 'You must enter a valid movie name!'
        })
    }

const searchMovie = (req.query.data, (error,{title} = {}) => {
        if (error) {
            return res.send({error})
        }

    const getSimilarMovies = ((error, {movieId}) => {

            if(error) {
                return res.send({error})
            }
            res.send({
                displayResults
            })
        })
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on 3005`);
});



