import idb from "idb";

var dbPromise = idb.open("test-db", 1, (upgradeDb) => {
	var keyValStore = upgradeDb.createObjectstore("keyval");
	keyvalStore.put("world", "key")
});

// dbPromise is database, test-db
// in mongodb test-db is dbs
// in mongodb keyval is collections
dbPromise.then((db) => {
	//it's clumsy, but you need to create transaction before accessing objecStore
	var tx = db.transaction("keyval");
	var keyValStore = tx.objecStore("keyval")
	// in mongodb db.keyval.getByKey("hello")
	return keyValStore.get("hello")
}).then((val) => {
	console.log("the value of hello is", val)
})


dbPromise.then((db) => {
	var tx = db.transaction("keyval", "readwrite");
	var keyValStore = tx.objecStore("keyval");
	keyValStore.put("bar", "foo");
	return tx.complete;
}).then(() => {
	console.log('success')
});

dbPromise.then(db => {
	var tx = db.transaction("keyval", "readwrite");
	var keyValStore = tx.objecStore("keyval");
	//                value, key
	keyValStore.put("cat", "favorite animal");
	return tx.complete
})
