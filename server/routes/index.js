const express = require("express")
const router = express.Router()
const config = require("config")
const jwt = require("jsonwebtoken")
const sha512 = require("js-sha512")
const conn = require("../db")
const util = require('util');

// GROUPS

//get user groups

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

//get group members

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

// create a group

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

//add a user to group

router.post('/group_user_links/addUser', (req, res, next) => {

  const checksql = `
    SELECT
      count(1) as count
    FROM
      group_user_links
    WHERE
      group_id =? AND username = ?
    `

    conn.query(checksql, [req.body.group_id, req.body.username], (err, results, fields) => {
      console.log(err)

      const count = results[0].count

      if (count > 0) {
      res.status(409).json({
        error: "user is a group member already"
      })
    } else {
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
      }
    })
})

// USER

router.get('/users',(req, res, next) => {
  const sql =`
    SELECT
      firstname, lastname, userPicURL
    FROM
      users
    WHERE
      username = ?`

    conn.query(sql, [req.query.username], (err, results, fields) => {
    res.json({results})
  })
})

//search for a user by username

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

//edit user profile data

router.put('/users/edit', (req, res, next) => {
  const sql =`
  UPDATE
    users
  SET
    firstname = ?, lastname = ?, userPicURL = ?
  WHERE
    username = ?
  `

  conn.query(sql, [req.body.firstname, req.body.lastname, req.body.userPicURL, req.body.username], (err, results, fields) => {
      res.json({
      message: "user data updated"
      })
  })
})


//RECIPES

//get call to grab a user's favorited recipe List
router.get('/user_favorites', (req, res, next) => {
  const sql = `
    SELECT
      *
    FROM
      user_favorites
    WHERE
      username = ?`

    conn.query(sql, [req.query.username], (err, results, fields) => {
      console.log(results)
      res.json({
        userFavorites: results
      })
    })
})

//post call to hold a recipe that a user has just favorited
router.post('/user_favorites', (req, res, next) => {

  const checksql = `
    SELECT
      count(1) as count
    FROM
      user_favorites
    WHERE
      name = ? AND recipe_id = ? AND username = ?
    `

    conn.query(checksql, [req.body.recipeName, req.body.recipe_id, req.body.username], (err, results, fields) => {

    const count = results[0].count

      if (count > 0) {
        res.status(409).json({
          error: "recipe is a favorite already"
        })
      } else {
      const sql = `
      INSERT INTO user_favorites (name, recipe_id, username, imgURL)
      VALUES (?, ?, ?, ?)`

      conn.query(sql, [req.body.recipeName, req.body.recipe_id, req.body.username, req.body.url], (err, results, fields) => {
        console.log(err)
        res.json({
          message: 'recipe added to favorites list',
        })
      })
    }
   })
})

//RECIPE EDIT

//recipes table edit



// router.put('/recipes/edit', (req, res, next) => {
//   const sql =`
//   UPDATE
//     recipes r, user_favorites uf, user_recipebooks_links url, group_recipe_links grl

//   SET
//     r.name = ?, r.prepHours = ?, r.prepMinutes = ?, r.servings = ?, r.directions = ?,r.ingredients = ?, r.imgURL = ?,

//     url.name = ?, url.imgURL = ?,
//     uf.name = ?, uf.imgURL = ?,
//     grl.name = ?, grl.imgURL = ?

//   WHERE
//     r.recipe_id = ? AND
//     uf.recipe_id = ? AND
//     url.recipe_id= ? AND
//     grl.recipe_id = ?
//   `

//   conn.query(sql, [req.body.name, req.body.prepHours, req.body.prepMinutes, req.body.servings, req.body.directions, req.body.ingredients, req.body.url,req.body.name, req.body.url, req.body.name, req.body.url, req.body.name, req.body.url, req.body.recipe_id, req.body.recipe_id, req.body.recipe_id, req.body.recipe_id], (err, results, fields) => {

//     // console.log('recipe edit backend', req.body.name, req.body.prepHours, req.body.prepMinutes, req.body.servings, req.body.directions, req.body.ingredients, req.body.url, req.body.recipe_id)

//       res.json({
//       message: "recipe updated"
//       })
//   })
// })

// get call to grab a user's list of created recipebooks from the application's database(user_recipebooks table)
router.get('/user_recipebooks', (req, res, next) => {
  const sql = `
  SELECT recipebook_name, recipebook_id
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
    res.json({
      message: 'recipebook created',
    })
  })
})

router.get('/user_recipebooks/current', (req, res, next) => {
  const sql = `
  SELECT *
  FROM
    user_recipebooks
  WHERE
    recipebook_id = ?`

  conn.query(sql, [req.query.recipebook_id], (err, results, fields) => {
    res.json({
      results
    })
  })
})

// get call to grab a list of recipes that were saved inside a recipebook created by the user(user_recipebooks_links table)
router.get('/user_recipebooks_links', (req, res, next) => {

  const sql = `
  SELECT *
  FROM user_recipebooks_links
  WHERE recipebook_id = ?`

  // const sql2 = `
  // SELECT *
  // FROM
  //   recipes
  // WHERE
  //   recipe_id = ?
  // `

  conn.query(sql, [req.query.recipebook_id], (err, results, fields) => {
    console.log(results)
    res.json({
      addedRecipesInsideRecipebooks: results
    })
  })
})


// RECIPE POST

router.post('/recipes', (req, res, next) => {
  const sql =`
  INSERT INTO
    recipes (name, prepHours, prepMinutes, directions, servings, username, ingredients, imgURL)
  VALUES
    (?, ?, ?, ?, ?, ?, ?, ?)
  `

  const sql2 =`
    INSERT INTO
      user_recipe_auth (recipe_id, username)
    VALUES
      (?, ?)
  `
  conn.query(sql, [req.body.name, req.body.prepHours, req.body.prepMinutes, req.body.directions, req.body.servings, req.body.username, req.body.ingredients, req.body.imgURL], (err, results, fields) => {
    conn.query(sql2, [results.insertId, req.body.username], (err, results, fields) => {
      console.log(err)
      res.json({
      message: "recipe posted"
      })
    })
  })
})



// listen for a post call into the application's database(group_recipe_links table)
router.post('/group_recipe_links', (req, res, next) => {

  const checksql = `
    SELECT
      count(1) as count
    FROM
      group_recipe_links
    WHERE
      group_id =? AND recipe_id = ? AND name = ?
    `

  conn.query(checksql, [req.body.group_id, req.body.recipe_id, req.body.name], (err, results, fields) => {
    console.log(err)

    const count = results[0].count

    if (count > 0) {
      res.status(409).json({
        error: "recipe already shared with group"
      })
    } else {
      const sql =`
        INSERT INTO
          group_recipe_links (group_id, recipe_id, name, imgURL)
        VALUES
          (?, ?, ?, ?)
        `

      conn.query(sql, [req.body.group_id, req.body.recipe_id, req.body.name, req.body.url], (err, results, fields) => {
        console.log(results);
        res.json({
          message: 'recipe added to group'
        })
      })
    }
  })
})
  // allow a post call to add a link between a user and a recipebook created by said user


  router.post('/user_recipebooks_links', (req, res, next) => {

    const checksql =`
    SELECT
      count(1) as count
    FROM
      user_recipebooks_links
    WHERE
      recipe_id = ? AND recipebook_id = ? AND name = ?
    `
    conn.query(checksql, [req.body.recipe_id, req.body.recipebook_id, req.body.recipe_name], (err, results, fields) => {
      console.log(err)

      const count = results[0].count

      if (count > 0) {
        res.status(409).json({
          error: 'recipe book already includes the recipe'
        })
      } else {
        const sql =`
        INSERT INTO
          user_recipebooks_links (recipe_id, recipebook_id, name, imgURL)

        VALUES
          (?, ?, ?, ?)
        `

        conn.query(sql, [req.body.recipe_id, req.body.recipebook_id, req.body.recipe_name, req.body.url], (err, results, fields) => {
          console.log(err)
          res.json({
            message: 'recipe added to recipebook'
          })
        })
      }
    })
})


// router that recieves calls to all recipes in the database
router.get('/recipes', (req, res, next) => {
  const sql = `
  SELECT *
  FROM recipes
  WHERE username = ?
  `
  conn.query(sql, [req.query.username],(error, results, fields) => {
    res.json(results)
  })
})

function authorized(req, res, next) {

  const sql =`
      SELECT
          count(1) as count
      FROM
          user_recipe_auth
      WHERE
          username = ? AND recipe_id= ?
  `

  conn.query(sql, [req.query.user, req.query.recipe_id], (err, results, fields) => {

  const count = results[0].count

      if(count >= 1) {
          next()
      } else {
          res.status(401).json({
              message: 'Not Authorized'
          })
      }
  })
}

router.get('/recipes/current/userOwned', authorized, (req, res, next) => {
    const sql = `
    SELECT *
    FROM recipes
    WHERE recipe_id = ?
    `
    conn.query(sql, [req.query.recipe_id],(error, results, fields) => {
      res.json(results)
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
    })
  })

router.get('/groupRecipes', (req, res, next) => {
    const sql = `
    SELECT
      *
    FROM
      group_recipe_links grl
    WHERE
      grl.group_id = ?
    `

    conn.query(sql, [req.query.group_id],(err, results, fields) => {
      res.json({results})
    })
  })


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
