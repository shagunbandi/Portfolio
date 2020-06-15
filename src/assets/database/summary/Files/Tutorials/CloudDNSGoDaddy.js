// https://www.npmjs.com/package/react-markdown

export const markdown = `
# Map custom domain with your IP on Google Cloud Compute Engine instance
<br/>

---

### Step 1: Setup VPC
<br/>

Launch console.google.com and select your project from the dropdown on top navbar.

Go to VPC Networks -> External IP addresses

Change <code>Type</code> from <code>Ephermal</code> to <code>Static</code> so that your IP address does not change automatically. Otherwise you'll loose access to the domain as well.

---

### Step 2: Setup Cloud DNS
<br/>

Go to Network Services -> Cloud DNS

Then create a zone with valid parameters. We should have two records once the zone is created (NS, SOA). 

Then add a record set 

    - for DNS name leave is <code>blank</code>
    - Resource Record Type <code>A</code>
    - for iPv4 address fill in the <code>instance-ip</code>

<br/>

Add another record set

    - for DNS name fill in the value <code>www</code>
    - Resource Record Type <code>CNAME</code>
    - for Canonical name fill in the <code>my-webite.com</code>

---

### Step 3: Add nameservers to your Domain Provider
<br/>

Click on <code>registerar setup</code>

Copy all the 4 nameservers given and add them as the nameservers at your providers console. 

Done !! It might take a few minutes to apply the changes. 

`

export default markdown;
