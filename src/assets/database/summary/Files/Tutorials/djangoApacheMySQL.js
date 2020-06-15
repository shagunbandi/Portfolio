// https://www.npmjs.com/package/react-markdown

export const markdown = `
# Deploy Django

<br/>

### Ubuntu 18.0.4 - MySQL - Django - Apache

---

### Overview

---

We'll be using Google Cloud Platform to host our server. Google Cloud has various inbuilt options to host Django Applications like the App Engine, for SQL it has Cloud SQL, etc. But for this tutorial we'll focus on using Virtual Machine to deploy the application. We'll take advantage of GCP's free tier VM, the f1-micro in US Zones. 

---

### Step 1: Create and Connect to Server

<br/>

Go to Compute Engine -> VM Instances -> Create Instance

- instance name 
    
<code>instance-1</code>

- Select Region as 
    
<code>us-central1</code>

- Select Zone as 

<code>us-central1-a</code>
    
- Machine Type 

<code>f1-micro</code>
    
- Boot Disk 

<code>Ubuntu 18.04 LTS</code>
   
-  Allow HTTP and HTTPS Traffic

<br/>

Create the instance -> ssh

---

### Step 2: Apply Software Updates

<br/>

Run the following commands to update the packages

<code>sudo apt update && sudo apt upgrade</code>

---

### Step 3: Create Directorty Structure
<br/>

Create the following directory structure

    | /home/shagunbandi/myproj
        | site
            | logs
            | public
                | static
        | django
        | auth
        | venv
<br/>

- Navigate to home folder

<code>$ cd ~</code>
    

- Make the project directory

<code>$ mkdir myproj</code>
    

- navigate to project directort

<code>$ cd myproj</code>
    

- Create rest of the directories

<code>$ mkdir site django auth</code> <br/>
<code>$ cd site</code><br/>
<code>$ mkdir logs public</code><br/>
<code>$ mkdir public/static</code><br/>

---

### Step 4: Install Pip and VirtualEnv
<br/>

Pip is a package installer used to install python packages. Django itself is a python package.

Virtualenv is used to manage python dependencies for different projects, seperating the requirements into different environments. 

<code>$ sudo apt install python3-pip</code><br/>
<code>$ pip3 install virtualenv</code><br/>
<code>$ cd ~/myproj/</code><br/>
<code>$ virtualenv venv -p python3</code><br/>
<code>$ source venv/bin/active</code><br/>

---

### Step 5: Setup your django project
<br/>

Make sure your virtual environment. You should see (venv) written before your username. If not activate your environment.

<code>$ source venv/bin/activate</code><br/>

Pull your django project from github, or create a new one

#### Pulling from github

<code>(venv) $ cd django</code><br/>
<code>(venv) $ git clone your-github-url/project</code><br/>

lets say your project name is <code>project</code> and it is located at <code>/home/shagunbandi/myproj/django/project</code>

Install requirements for your project, if any<br/>
<code>git install -r requirements.txt</code>

<br/>

#### Creating a new one

<code>(venv) $ cd django</code><br/>
<code>(venv) $ pip install django</code><br/>
<code>(venv) $ django-admin startproject project</code><br/>

<br/>

Next, 

Add your VM IP in the list of allowed hosts.

<code>(venv) $ nano project/settings.py</code>

Add your IP address (or "*") to Allowed Hosts as a string value

Run the project on development server<br/>
<code>(venv) $ python manage.py runserver 0.0.0.0:8800</code>

Goto your browser and check if the server runs. It might not run if all the requirements are not satisfied like the mysql. Change the db to sqlite for now, if that is the case.<br/>
<code>instance-ip-address:8800</code>

---

### Step 6: Install MySql
<br/>

Change to root user<br/>
<code>(venv) $ deactivate</code><br/>
<code>$ sudo su</code><br/>

Install MySQL

<code> root $ apt install mysql-server</code><br/>
<code> root $ mysql_secure_installation</code><br/>

Select <code>Yes</code> for all the questions. Read the questions, it might come handy in future.

Create a User and a Database

<code> root $ mysql</code><br/>
<code> mysql > CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';</code><br/>
<code> mysql > CREATE DATABASE myDB;</code><br/>
<code> mysql > GRANT ALL PRIVILEGES ON myDB.* to 'username'@'localhost';</code><br/>
<code> mysql > FLUSH PRIVILEGES;</code><br/>
<code> mysql > exit</code><br/>

---

### Step 7: Configurations to Connect to MySql
<br/>

Exit from mysql and root. Activate the virtual environment if not active.

<code> root $ exit</code><br/>

Install dependencies for MySql - <code>mysqlclient</code>. If you try to install <code>mysqlclient</code> directly it might give you egg_info error. Install the dependencies in the following order.

<code>$ source ~/myproj/venv/bin/activate</code><br/>
<code>(venv) $ sudo apt install python3-dev</code><br/>
<code>(venv) $ sudo apt install libmysqlclient-dev</code><br/>
<code>(venv) $ pip install mysqlclient</code><br/>

Navigate to the <code>auth</code> directory and create a file using the nano editor. We'll store credentials to connect to our database over here.

<code>(venv) $ cd ~/myproj/auth</code><br/>
<code>(venv) $ nano mysql.cnf</code><br/>

In the Editor window add the following

    [client]
    database = 'myDB'
    user = 'username'
    password = 'password'
    default-character-set = 'utf8'

<br/>
Save and exit from the nano editor. Restart the mysql client

<code>(venv) $ systemctl restart mysql</code><br/>

---

### Step 8: Connect Django and MySql
<br/>

Now that we have setting to connect to MySql, let's use this config file for our Django Project.

<code>(venv) $ cd ~/myproj/django/project</code><br/>
<code>(venv) $ nano project/settings.py</code><br/>

In the Database section. Comment out the sqlite part and add this configuration instead

    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'OPTIONS': {
                'read_default_file': 'home/shagunbandi/myprof/auth/mysql.cnf',
            },
        }
    }

<br/>

Check if the configuration works.<br/>
<code>(venv) $ python manage.py check</code><br/>

Migrate your changes, if any and create a superuser<br/>
<code>(venv) $ python manage.py makemigrations</code><br/>
<code>(venv) $ python manage.py migrate</code><br/>
<code>(venv) $ python manage.py createsuperuser</code><br/>

Let's check if the application is running !!

<code>(venv) $ python manage.py runserver 0.0.0.0:8800</code><br/>

Go to your broweser, <code>your-ip:8800/admin</code> and log in using your superuser credentials.


---

### Step 9: Install and Configure Apache2
<br/>

Apache is used to establish a connection between a server and the browsers of website visitors (Firefox, Google Chrome, Safari, etc.) while delivering files back and forth between them (client-server structure). Apache is a cross-platform software, therefore it works on both Unix and Windows servers

So let's install Apache2 first.

<code>(venv) $ sudo apt install apache2 libapache2-mod-wsgi-py3</code><br/>

In the browser you should see Apache2 Default Screen.

Edit the 000-default.conf file to add our configurations.<br/>
<code>(venv) $ cd /etc/apache2/sites-available</code><br/>
<code>(venv) $ nano 000-default.conf<,code><br/>
<br/>

    <VirtualHost *:80>

        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html

        ErrorLog /home/shagunbandi/myproj/site/logs/error.log
        CustomLog /home/shagunbandi/myproj/site/access.log combine

        alias /static /home/shagunbandi/myproj/site/public/static
        <Directory /home/shagunbandi/myproj/site/public/static>
            Require all granted
        </Directory>

        <Directory /home/shagunbandi/myproj/django/project/project>
            <Files wsgi.py>
                Require all granted
            </Files>
        </Directory>

        WSGIDaemonProcess project python-path=/home/shagunbandi/myproj/django/project python-home=/home/shagunbandi/myproj/venv
        WSGIProcessGroup project
        WSGIScriptAlias / /home/shagunbandi/myproj/django/project/project/wsgi.py

    </VirtualHost>

<br/>

Let's go through this line by line.

We are specifying path for Error and CustomLog

Then we are telling the server where will be store the static files required by our browser.

Similarly we are telling the server where is our wsgi file.

We then created a daemon process names <code>project</code>, telling it where our project is and which environment to use.

To Verify the syntax is correct for 000-deafult.conf<br/>
<code>(venc) sudo apachectl configtest</code><br/>

To apply the changes, let's restart the server<br/>
<code>(venv) $ service apache2 restart</code><br/>

In the browser visit your ip. You should see the django application. It might be possible that your are not able to see your static files properly. Let's fix that in the next step.

---

### Step 10: Configuring Static Files
<br/>

In the browser, you'll notice the static files are not loaded properly.

Verify that you have <code>~/myprof/site/public/static</code> in place.

Go to your settings file and add the Static URL, and Root.<br/>
<code>(venv) $ cd ~/myproj/django/project</code><br/>
<code>(venv) $ nano project/settings.py</code><br/>

Add <code>STATIC_ROOT="/home/shagunbandi/myproj/site/public/static"</code> at the bottom of the file.

Now Django knows where the static files should be located, and our Apache is pointing at the same location. So let's collect all the static files in the location and test the application.

<code>(venv) $ python manage.py collectstatic</code><br/>

Go to <code>your-ip</code> and you should see the application live !! Also the <code>your-ip/admin</code> should now have all the static files properly working.

--- 

### Final Words
<br/>


If everything worked untill now, you should be good to go. You can now go to your server ip or domain name to see your application.

Thank you for taking your time reading my posts. I appreciate that, feel free to ask any questions.

`

export default markdown;

// <strong><em></em ></strong >

