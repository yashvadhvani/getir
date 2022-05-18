# General

This app contains an assignment given by Getir. In the app the validations are taken care. Please pass the required input for desired output.

# How to Run Application

- Clone the repo
- Install node modules by Yarn/npm

```
      yarn
```

&ensp; &ensp; &ensp; &ensp; &ensp; &ensp;&ensp;&ensp;OR

```
      npm i
```

- Start the application using Yarn/npm

```
      yarn start
```

&ensp; &ensp; &ensp; &ensp; &ensp; &ensp;&ensp;&ensp;OR

```
      npm start
```

# How to Run Tests

Post installing node modules please run test script using Yarn/npm

```
      yarn test
```

&ensp; &ensp; &ensp; &ensp; &ensp; &ensp;&ensp;&ensp;OR

```
      npm run test
```

# Hosting Information

Please hit the below endpoint with desired input. Please try the api with postman or curl with the proper Input. <br /><br />
http://getir-env.eba-mshub62u.us-west-2.elasticbeanstalk.com/records

- API Type

```
POST
```

- Input format

```
{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
}
```

- Output Format

```
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "_id": "5ee21588e07f053f990cec7d",
            "key": "ibfRLaFT",
            "createdAt": "2016-12-25T16:43:27.909Z",
            "totalCount": 2892
        }
    ]
}
```
