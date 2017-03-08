# Wetland tutorial - _Inventory manager_
This is the source code for the wetland tutorial, in which we build an inventory manager.

You can find the [tutorial in the documentation](https://wetland.spoonx.org/Tutorial/setting-up.html).

## Running
To get the tutorial application running, follow these steps:

### Clone
First clone this repository to a directory on your machine.

`git clone https://github.com/spoonx/wetland-tutorial`

### Install
Now install the dependencies, and the wetland cli: `npm i && npm i -g wetland`

### Configuration
By default this example uses sqlite, and doesn't need any configuration. **To use a different client instead**, perform two simple actions:

1. `npm i mysql --save` _(Or [any other client](https://wetland.spoonx.org/installation.html#your-database))_
2. Open up `wetland.js` and change the credentials to yours

**Note:** Make sure you have an existing database!

### Schema
You might want to see the schema before it gets created, you curious creature!

The following command dumps the schema it will create for this [dev migration](https://wetland.spoonx.org/snapshots.html#dev-migrations):

`wetland migrator dev -d`

**Note:** dev migrations automatically run every time you start the server

### Run
Then simply run the server using `npm start`. You can now access the endpoints documented below.

## Endpoints
To make it easier to talk to the api, I have created a list of curl commands.

### Create category
> `POST /category`

```bash
curl -XPOST -H 'Content-Type: application/json' -d '{
  "name": "electronics"
}' http://127.0.0.1:3000/category
```
### Update category
> `PATCH /category/:id`

```bash
curl -XPATCH -H 'Content-Type: application/json' -d '{
  "name": "new name"
}' http://127.0.0.1:3000/category/1
```


### Create product
> `POST /product`

```bash
curl -XPOST -H 'Content-Type: application/json' -d '{
  "name": "monitor",
  "categories": [1]
}' http://127.0.0.1:3000/product
```
### Update product
> `PATCH /product/:id`

```bash
curl -XPATCH -H 'Content-Type: application/json' -d '{
  "name": "new name"
}' http://127.0.0.1:3000/product/1
```

### Get products
> `GET /product`

```bash
curl http://127.0.0.1:3000/product
```

### Get product
> `GET /product/:id`

```bash
curl http://127.0.0.1:3000/product/1
```

### Get categories
> `GET /category`

```bash
curl http://127.0.0.1:3000/category
```

### Get category
> `GET /category/:id`

```bash
curl http://127.0.0.1:3000/category/1
```

### Restock product
> `PATCH /product/:id/restock`

```bash
curl -XPATCH -H 'Content-Type: application/json' -d '{
  "quantity": "2"
}' http://127.0.0.1:3000/product/1/restock
```

### Consume product
> `PATCH /product/:id/consume`

```bash
curl -XPATCH -H 'Content-Type: application/json' -d '{
  "quantity": "2"
}' http://127.0.0.1:3000/product/1/consume
```

### Get abundant products
> `GET /product/abundant`

```bash
curl http://127.0.0.1:3000/product/abundant
```

### Get depleted products
> `GET /product/depleted`

```bash
curl http://127.0.0.1:3000/product/depleted
```

### Get abundant products count
> `GET /product/abundant/count`

```bash
curl http://127.0.0.1:3000/product/abundant/count
```

### Get depleted products count
> `GET /product/depleted/count`

```bash
curl http://127.0.0.1:3000/product/depleted/count
```

## License
MIT
