#super better
## Overview (v1.0.0)
In this guide you will:

* Create a Virtual Private Server(VPS) - [Follow this guide](https://github.com/eheckard23/DWA_API/blob/dev/setup.md) on how to set that up
* Run an API using Express, Node, and MariaDB on your VPS

## API(Express, Node, MariaDB)
Once your VPS is initially set up with a new user, you will need to install Express and Node on that server via NVM. SSH into your server and begin by running:

#### NVM

`sudo apt-get update`

`sudo apt-get install build-essential libssl-dev`

Then, get the NVM installation script by running:

`curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh -o install_nvm.sh`

Run the install with:

`bash install_nvm.sh`

#### Node

Find the latest version of Node by running:

`nvm ls-remote`

Whichever version you choose to install should look like:

`nvm install <8.1.4>`

#### Express

Now, you should be able to install Express by running:

`npm install express`

#### MariaDB

Make sure everything in your local package index is update by running:

`sudo apt update -y`

Install "mariadb-server" by running:

`sudo apt install -y mariadb-server`

If a pop up asks you to set a new password for the MariaDB root user, go ahead and put a strong password in here and press `ENTER`

Confirm it's installed by running:

`mysql -V`

The output should be similar to:

`mysql Ver 15.1 Distrib 10.1.22-MariaDB, for debian-linux-gnu (x86_64) using readline 5.2`

Start and enable MariaDB by running:

`sudo systemctl start mariadb.service`

`sudo systemctl enable mariadb.service`

If a service not found error appears, you may just need to restart the service by running:

`sudo service mysql restart`

Once MariaDB is up and running, secure the installation by running:

`sudo /usr/bin/mysql_secure_installation`

Enter the password you set previously for the root user

Hit `n` to skip having to set a new password

Hit `y` to "Remove anonymous users"

Hit `y` to "Disallow root login remotely"

Hit `y` to "Remove test database along with access"

Hit `y` to "Reload privilege tables"

Now that MariaDB is installed, you may log in as root locally by running:

`sudo mysql -u root -p`

Run `quit` to logout

## Installation
Clone or download this repo into a folder on your local computer.

## How to Operate
Open up the **routes/index.js** file in your project. Double check that you have this and that your router is using the correct version(v1):

```javascript
module.exports = (express) => {
	const router = express.Router();

	router.get('/status', (req,res) => {
		res.status(200).json({ status: true });
	});

	router.use('/api/v1', require('./api/v1')(express));

	return router;
}
``` 

Now to add more basic routes, add this block inside of the **v1** folder's **index** file:

***routes/api/v1/index.js***

```javascript
module.exports = (express) => {
    const router = express.Router();

    // create
    router.post('/user', (req,res) => {
        res.json({ msg: 'Create Data!' });
    });

    // read
    router.get('/user', (req,res) => {
        res.json({ msg: 'Find Data!' });
    });

    // update
    router.put('/user', (req,res) => {
        res.json({ msg: 'Find Data and update!' });
    });

    // delete
    router.delete('/user', (req,res) => {
        res.json({ msg: 'Find Data and delete!' });
    });

    return router;
}

```
For now you can test the routes and see a JSON response for what you will add in a later release.
