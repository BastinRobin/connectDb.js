ConnectDb.js
============

ConnectDb is an javascript framework for building browser based database web, mobile applications. It is an open source framework which makes easy to Connect, Query and Report.

ConnectDb.js is an advanced implementation of the HTML5 Local Storage API.
It is now easy to use the complete offline storage for any purpose of your development process.

Features:
* Easy connection to DB
* Easy Querying from collections
* Easy to update the data
* Fastest DB processing
* More to come.

ConnectDb was started as an open source project which can be forked by developers and contribute to our projects.

Let us play with mobile environment

Development Version:
-------------------
```html
<script type="text/javascript" src="https://github.com/BastinRobin/connectDb.js/raw/master/connectDb.js"></script>
```


Production Version :
--------------------

```html
<script type="text/javascript" src="https://github.com/BastinRobin/connectDb.js/raw/master/connectDb.min.js"></script>
```

Usage:
------
Check if browser supports connectDb.js.

```html
connectDb.checkBrowser();
```

Check if any db exists.

```html
connectDb.isempty();
```

Clear complete db if exist.
```html
connectDb.clear();
```

Create a New Key ,Value Pair DB
```html
connectDb.createRow(key, value);
```

Retrieve a row using key
```html
connectDb.getRow(key);
```

Remove a Row from Db
```html
connectDb.removeRow(key);
```

View all rows in DB.
```html
connectDb.viewRow();
```

Store any JSON array to the Db as key value pair
```html
connectDb.storeJSON(key, json);
```

Retrieve JSON array from DB using Key
```html
connectDb.readJSON(key);
```

Create secure row using Key, Value pair
```html
connectDb.createSecureRow(key, value);
```

Retrieve secure row using key
```html
connectDb.getSecureRow(key);
```

Remove secure row using key
```html
connectDb.removeSecureRow(key);
``` 

Contributing:
------------

* Fork it.
* Create a branch (git checkout -b my_connectDb)
* Commit your changes (git commit -am "Added New change")
* Push to the branch (git push origin my_connectDb)
* Open a [Pull Request](https://github.com/BastinRobin/connectDb.js/pulls)
* Enjoy a refreshing Diet Coke and wait



License
-------
This software is free to use under the GNU license.