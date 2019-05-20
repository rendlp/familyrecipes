const express = require("express")
const router = express.Router()
const config = require("config")
const jwt = require("jsonwebtoken")
const sha512 = require("js-sha512")
const conn = require("../db")
const util = require('util');

// GROUPS





router.get('/groups', (req, res, next) => {
  const sql = `
  SELECT
	  g.groupname, g.group_id
  FROM
	  groups g, users u, group_user_links gul
    WHERE
	  gul.group_id = g.group_id AND gul.username = u.username AND u.username = ?
  `

  conn.query(sql, [req.query.username],(err, results, fields) => {
    res.json({
      groups: results
    })
    console.log('index backend - get groups - ' + results)
  })
})

//get call to grab a user's favorited recipe List
router.get('/user_favorites', (req, res, next) => {
  const sql = `
    SELECT name
    FROM user_favorites
    WHERE username = ?`

    conn.query(sql, [req.query.username], (err, results, fields) => {
      res.json({
        userFavorites: results
      })
    })
})

//post call to hold a recipe that a user has just favorited
router.post('/user_favorites', (req, res, next) => {
  const sql = `
  INSERT INTO user_favorites (name, recipe_id, username)
  VALUES (?, ?, ?)`

  conn.query(sql, [req.body.recipeName, req.body.recipe_id, req.body.username], (err, results, fields) => {
    console.log(err)
    res.json({
      message: 'recipe added to favorites list',
    })
  })
})
// get call to grab a user's list of created recipebooks from the application's database(user_recipebooks table)
router.get('/user_recipebooks', (req, res, next) => {
  const sql = `
  SELECT recipebook_name
  FROM user_recipebooks
  WHERE username = ?`

  conn.query(sql, [req.query.username], (err, results, fields) => {
    res.json({
      userRecipeBooks: results
    })
  })
})
//post call to insert a user's created recipebook into the application's database(user_recipebooks table)
router.post('/user_recipebooks', (req, res, next) => {
  const sql = `
  INSERT INTO user_recipebooks (recipebook_id, recipebook_name, username)
  VALUES (?, ?, ?)`

  conn.query(sql, [req.body.recipebook_id, req.body.recipebook_name, req.body.username], (err, results, fields) => {
    console.log(results)
    res.json({
      message: 'recipebook created',
    })
  })
})

router.get('/groupUsers', (req, res, next) => {
  const sql = `
  SELECT
	  gul.username, g.groupname
  FROM
	  group_user_links gul, groups g
  WHERE
  gul.group_id = g.group_id AND gul.group_id = ?
  `

  conn.query(sql, [req.query.group_id],(err, results, fields) => {
    res.json({
      groupUsers: results
    })

  })
})

router.get('/usersSearch', (req, res, next) => {
  const sql = `
  SELECT
    ifnull((
  SELECT
    username
  FROM
	  users
  WHERE
    username = ?
  ), 'usernotfound') as username
  `
  if (req.query.username === '') {
    res.json({
      username:''
    })
  } else {

  conn.query(sql, [req.query.username],(err, results, fields) => {
    res.json({
      username: results[0].username
    })
    console.log(results[0].username)

  })
}
})


router.post('/groups', (req, res, next) => {
  const sql =`
  INSERT INTO
    groups (groupname)
  VALUES
    (?)
  `
  const sql2 =`
  INSERT INTO group_user_links (group_id, username)
     VALUES (?,?);
  `
  conn.query(sql, [req.body.groupname], (err, results, fields) => {
    console.log(results)
    conn.query(sql2, [results.insertId, req.body.username], (err, results, fields) => {
      console.log(err)
      res.json({
      message: "group added"
      })
    })
  })




})

router.post('/group_user_links/addUser', (req, res, next) => {
  const sql =`
  INSERT INTO
    group_user_links (group_id, username)
  VALUES
    (?, ?)
  `
  conn.query(sql, [req.body.group_id, req.body.username], (err, results, fields) => {
    console.log(err)
    res.json({
      message: "user added to group"
    })
  })
})


// RECIPE POST

router.post('/recipes', (req, res, next) => {
  const sql =`
  INSERT INTO
    recipes (name, prepHours, prepMinutes, directions, servings, username, ingredients)
  VALUES
    (?, ?, ?, ?, ?, ?, ?)
  `

  conn.query(sql, [req.body.name, req.body.prepHours, req.body.prepMinutes, req.body.directions, req.body.servings, req.body.username, req.body.ingredients], (err, results, fields) => {
    message: 'recipe posted'
    })
  })

router.post('/group_recipe_links', (req, res, next) => {
  const sql =`
  INSERT INTO
    group_recipe_links (group_id, recipe_id, name)
  VALUES
    (?, ?, ?)
  `

  conn.query(sql, [req.body.group_id, req.body.recipe_id, req.body.name], (err, results, fields) => {
    console.log(results);
    message: 'recipe added to group'
    })
  })

// router.post('/recipes', (req, res, next) => {
//   const name = req.body.name
//   const prepMinutes = req.body.prepMinutes
//   const prepHours = req.body.prepHours
//   const directions = req.body.directions
//   const servings = req.body.servings
//   const ingredients = req.body.ingredients
//   const ingred_id = req.body.ingred_id
//   const recipe_id = req.body.recipe_id

//   const sql =
//   `
//   INSERT INTO
//   recipes (name, prepMinutes, prepHours, directions, servings, username)
//   VALUES
//   (?, ?, ?, ?, ?, ?)

//   INSERT INTO
//   ingredients (ingredients)
//   VALUES
//   (?)

//   INSERT INTO
//   both (ingred_id, recipe_id)
//   VALUES
//   (?, ?)

//   `

//   conn.query(sql, [name, prepMinutes, prepHours, directions, servings, ingredients, ingred_id, recipe_id], (err, results, fields) => {
//     res.json({"message": "recipe added" })
//   })
// })


// router that recieves calls to all recipes in the database
router.get('/recipes', (req, res, next) => {
  const sql = `
  SELECT *
  FROM recipes
  WHERE username = ?
  `
  conn.query(sql, [req.query.username],(error, results, fields) => {
    res.json(results)
    console.log(results)
  })
})

router.get('/recipes/current', (req, res, next) => {
    const sql = `
    SELECT *
    FROM recipes
    WHERE recipe_id = ?
    `
    conn.query(sql, [req.query.recipe_id],(error, results, fields) => {
      res.json(results)
      console.log(results)
    })
  })

router.get('/groupRecipes', (req, res, next) => {
    const sql = `
    SELECT
      grl.name, grl.recipe_id
    FROM
      group_recipe_links grl
    WHERE
      grl.group_id = ?
    `
  
    conn.query(sql, [req.query.group_id],(err, results, fields) => {
      res.json({results})
    })
  })



// router.post('/ingredients', (req, res, next) => {
//   const ingredients = req.body.ingredients


//   const sql =
//   ` INSERT INTO ingredients (ingredients) VALUES (?)`





//   conn.query(sql, [ingredients], (err, results, fields) => {
//     const count = results.count
//   })
// })

// // BOTH POST

// router.post('/both', (req, res, next) => {
//   const ingred_id = req.body.ingred_id
//   const recipe_id = req.body.recipe_id

//   const sql = `
//   INSERT INTO both (ingred_id, recipe_id) VALUES (?, ?)`

//   conn.query(sql, [both], (err, results, fields) => {
//     res.json({ "message": "added" })
//   })
// })

// LOGIN POST

router.post("/login", (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password + config.get("salt"))

  const sql =
    "SELECT count(1) as count FROM users WHERE username = ? AND password = ?"

  conn.query(sql, [username, password], (err, results, fields) => {

    const count = results[0].count

    if (count >= 1) {
      const token = jwt.sign({ username }, config.get("secret"))

      res.json({
        token
      })
    } else {
      res.status(401).json({
        error: "Invalid username or password"
      })
    }
  })
})

// REGISTER POST

router.post("/register", (req, res, next) => {
  const username = req.body.username
  const password = sha512(req.body.password + config.get("salt"))

  const checksql = "SELECT count(1) as count from users WHERE username = ?"

  conn.query(checksql, [username], (err, results, fields) => {
    console.log(err)
    const count = results[0].count

    if (count > 0) {
      res.status(409).json({
        error: "Username already taken"
      })
    } else {
      const sql = "INSERT INTO users (username, password) VALUES (?, ?)"

      conn.query(sql, [username, password], (err, results, fields) => {
        if (err) {
          throw new Error("register failed")
        } else {
          const token = jwt.sign({ username }, config.get("secret"))
          res.json({
            token: token
          })
        }
      })
    }
  })
 })

module.exports = router
