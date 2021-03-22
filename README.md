# eCommerce Backend with Sequelize 

This project focuses on the backend code that allows interaction with an ecommerce API. The following application does not have a front end, so all API interactions will be tested through the Postman tool. 

Users should be able to: GET all products, categories, and tags. GET a particular product, category, or tag by its ID. UPDATE a particular product, tag, or category by its ID. DELETE a product, category, and tag by its ID. and POST a new product, cateogry, or tag. 

## Testing this Application 

Before testing, ensure that the 'ecommerce_db' is created at the first step. If you have the MySQL extension in vscode you can simply right-click on the 'schema.sql' file and select 'Run MYSQL Query'. A message in your terminal "Finished MYSQL query" should appear in the console after the database has been successfully created. 

![MYSQL query vscode](/Assets/sqlvscode.gif)

Alternatively, if you have MySQL workbench you can also execute the schema by pasting the schema.sql into your workbench and selecting 'execute'.

![MSQL query workbench](/Assets/sqlworkbench.gif)

To test this application, you can seed pre-existing data to work with. The seed data is located in the /seeds folder. To seed the database, you can run the command 'npm run seed' in the terminal. 

![npm run seed Command](/Assets/npmrunseed.gif)

Once the database has been seeded with data, you can run the command 'npm start' to start the server and interact with the API. After the server has been started, it will be listening at localhost:3001. This is where all API interactions will be tested. 

![npm start server](/Assets/npmstart.gif)

### API interactions

After the server is started and listening at localhost:3001, you can use an API testing tool to interact with the API. For the GIF's in this repository will be using Postman. 

### GET all methods: 

GET all products

![Get all products](/Assets/getallproducts.gif)


GET all categories

![Get all categories](/Assets/getallcategories.gif)


GET all tags

![Get all tags](/Assets/getalltags.gif)


### GET by ID methods: 

GET product by ID

![Get product by ID](/Assets/getproductbyid.gif)

GET category by ID

![Get category by ID](/Assets/getcategorybyid.gif)

GET tag by ID 

![Get tag by ID](/Assets/gettagbyid.gif)

### POST methods:

POST product

![Post a new product](/Assets/postproduct.gif)

POST category

![Post a new category](/Assets/postcategory.gif)

POST tag

![Post a new tag](/Assets/posttag.gif)

### UPDATE by ID methods: 

UPDATE product by ID 

![Update producty by ID](/Assets/updateproductbyid.gif)

UPDATE category by ID

![Update category by ID](/Assets/updatecategorybyid.gif)

UPDATE tag by ID 

![Update tag by ID](/Assets/updatetagbyid.gif)

### DELETE by ID 

DELETE product by ID

![Delete product by ID](/Assets/deleteproduct.gif)

DELETE category by ID

![Delete category by ID](/Assets/deletecategory.gif)

DELETE tag by ID

![Delete tag by ID](/Assets/deletetag.gif)

## Technologies used for this project

- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)
- [Javascript](https://www.javascript.com/)
