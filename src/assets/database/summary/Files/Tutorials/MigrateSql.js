// https://www.npmjs.com/package/react-markdown

export const markdown = `
# Migrating SQL between two servers

<br/>

---

### Overview
<br/>

Transferring a database between virtual private servers can be accomplished using a SCP (Secure Copy), a method of copying files derived from the SSH Shell. Keep in mind, you will need to know the passwords for both virtual servers.

In order to migrate the database, there are two steps:

---

### Step 1 — Perform a MySQL Dump
<br/>

Before transferring the database file to the new VPS, we first need to back it up on the original virtual server by using the mysqldump command.<br/>
<code>mysqldump -u root -p --opt database-name > database-name.sql</code>

After the dump is performed, you are ready to transfer the database.

---

### Step 2 — Copy the Database
<br/>

SCP helps you copy the database. If you used the previous command, you exported your database to your home folder.

The SCP command has the following syntax:

<code>scp database-name.sql username@servername:path/to/database/</code>

A sample transfer might look like this:

scp newdatabase.sql user@example.com:~/

After you connect, the database will be transferred to the new virtual private server.

--- 

### Step 3 — Import the Database
<br/>

Once the data has been transferred to the new server, you can import the database into MySQL:

<code>mysql -u root -p newdatabase < /path/to/newdatabase.sql</code>

With that, your transfer via SCP will be complete.

--- 

### Few Tips
<br/>

You might want to use cloud providers specific tools for that. It makes the process very simple.

For GCP you could use <code>gcloud SDK</code> to directly connect to your VM and copy files.<br/>
<code>gcloud compute copy-files database-name.sql username@servername:path/to/database/</code>

Make sure you have authenticated yourself. If not run the command <code>gcloud init</code> and follow the steps.

---
 
###### References

https://www.digitalocean.com/community/tutorials/how-to-migrate-a-mysql-database-between-two-servers


`

export default markdown;

// <strong><em></em ></strong >

