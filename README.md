ConnectDb.js
============
![ConnectDb](https://m.ak.fbcdn.net/sphotos-e.ak/hphotos-ak-prn2/1465379_561069470625698_23440564_n.png)

![ConnectDb.js stable v0.1](http://b.repl.ca/v1/ConnectDb.js-stable_v0.1-brightgreen.png)
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

Production Version:
-------------------
```html
<script type="text/javascript" src="https://github.com/BastinRobin/connectDb.js/raw/master/connectDb.min.js"></script>
```

Usage:
------
Check the version of connectDb.js library
```html
_db.version();
```

Check if browser supports connectDb.js.

```html
_db.checkBrowser();
```

Check if any db exists.

```html
_db.isempty();
```

Check if key already exists
```html
_db.isKey(key);
```

Clear complete db if exist.
```html
_db.clear();
```
Check the length of DB
```html
_db.length(key);
```
Create a New Key ,Value Pair DB
```html
_db.createRow(key, value);
```

Retrieve a row using key
```html
_db.getRow(key);
```

Remove a Row from Db
```html
_db.removeRow(key);
```

View all rows in DB.
```html
_db.viewRow();
```

Store any JSON array to the Db as key value pair
```html
_db.setJSON(key, json);
```

Retrieve JSON array from DB using Key
```html
_db.getJSON(key);
```
Update a db using key with JSON data
```html
_db.update(key, json);
```
Create secure row using Key, Value pair
```html
_db.createSecureRow(key, value);
```

Retrieve secure row using key
```html
_db.getSecureRow(key);
```

Remove secure row using key
```html
_db.removeSecureRow(key);
``` 

Get the list of keys of JSON array
```html
_db.keys(json);
```

Get the list of values of JSON array
```html
_db.values(json);
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
