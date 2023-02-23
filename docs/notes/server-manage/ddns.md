---
icon: note
date: 2023-02-22

tag:
    - network
---

# Update DNS records dynamically

<decl-en aigc=true />

## Intro

For some areas, it is difficult to obtain a fixed public IP for normal home networks, but nowadays, IPv6 addresses are basically issued. The obtained IPv6 addresses are usually not static, so they need to be checked and updated periodically.

> Traditionally, when you connect to the internet, your Internet Service Provider (ISP) assigns you a unique IP address. This IP address is used to identify your device on the internet. However, in some cases, this IP address can change, especially if you are using a dynamic IP address. This can cause problems if you are running services on your device that require a static IP address, such as a web server.
>
> DDNS solves this problem by providing a way to associate a domain name with your IP address. When your IP address changes, the DDNS service updates the DNS record for your domain name with the new IP address. This allows you to continue to use the same domain name to access your device, even if the IP address changes.
>
> &emsp;&emsp; —— ChatGPT

## Implementation

Taking Cloudflare as an example.

### Using Cloudflare API

#### Get API_Key and zone ID

The Global API Key can be find in `API-Tokens` in the Personal Profile. The `zone ID` can be obtained by listening to the request through the browser developer tools. It can also be acquired automatically using the following script.

```python
import json
import urllib3

def get_zone_id(api_key, email, domain_name):
    # Set up the Cloudflare API endpoint and headers
    url = f"https://api.cloudflare.com/client/v4/zones?name={domain_name}"
    headers = {
        "Content-Type": "application/json",
        "X-Auth-Email": email,
        "X-Auth-Key": api_key
    }

    # Set up a connection pool with urllib3
    http = urllib3.PoolManager()

    # Make the API request to get the zone ID
    response = http.request("GET", url, headers=headers)

    # Parse the response JSON and extract the zone ID
    data = json.loads(response.data)
    zone_id = data["result"][0]["id"]

    return zone_id

api_key = "your_api_key"
email = "your_email_address"
domain_name = "example.com"

zone_id = get_zone_id(api_key, email, domain_name)

print(f"The zone ID for {domain_name} is: {zone_id}")
```

Then you can use the Cloudflare API to update a DNS record with your current IP address.

::: details Sample Python script

This script first gets the `Zone ID` for the specified domain using the `get_zone_id` function we wrote earlier. It then uses the `urllib3` library to make API requests to Cloudflare, and the `ipify` service to get the current IP address. Finally, it checks if the specified DNS record already exists, and updates it with the new IP address if it does, or creates a new DNS record if it doesn't.

```python
import json
import urllib3

# Cloudflare API credentials
API_KEY = "your_api_key"
EMAIL = "your_email_address"

# Domain and DNS record to update
DOMAIN_NAME = "example.com"
RECORD_NAME = "subdomain.example.com"

# Get the Zone ID for the domain
ZONE_ID = get_zone_id(API_KEY, EMAIL, DOMAIN_NAME)

# Set up the Cloudflare API endpoint and headers
url = f"https://api.cloudflare.com/client/v4/zones/{ZONE_ID}/dns_records"
headers = {
    "Content-Type": "application/json",
    "X-Auth-Email": EMAIL,
    "X-Auth-Key": API_KEY
}

# Set up a connection pool with urllib3
http = urllib3.PoolManager()

# Get the current IP address from an external service
response = http.request("GET", "https://api.ipify.org")
ip_address = response.data.decode("utf-8")

# Set up the JSON payload for the DNS record update
payload = {
    "type": "A",
    "name": RECORD_NAME,
    "content": ip_address
}

# Check if the record already exists, and update it if it does
response = http.request("GET", url, headers=headers)
data = json.loads(response.data)
for record in data["result"]:
    if record["name"] == RECORD_NAME:
        record_id = record["id"]
        response = http.request("PUT", f"{url}/{record_id}", headers=headers, body=json.dumps(payload))
        print(f"DNS record updated for {RECORD_NAME} with IP address {ip_address}")
        break
else:
    # Create a new DNS record if it doesn't exist
    response = http.request("POST", url, headers=headers, body=json.dumps(payload))
    print(f"DNS record created for {RECORD_NAME} with IP address {ip_address}")
```

:::

It is common for a website to have multiple sub-domains. In this case, the following scripts can be used to update the DNS records.

::: code-tabs#python

@tab IPv4

```python
import json
import urllib3

# Cloudflare API credentials
API_KEY = "your_api_key"
EMAIL = "your_email_address"

# Domain and DNS records to update
DOMAIN_NAME = "example.com"
DNS_RECORDS = [
    {
        "name": "subdomain1.example.com",
        "type": "A"
    },
    {
        "name": "subdomain2.example.com",
        "type": "A"
    },
    {
        "name": "subdomain3.example.com",
        "type": "CNAME",
        "content": "www.example.com"
    }
]

# Get the Zone ID for the domain
ZONE_ID = get_zone_id(API_KEY, EMAIL, DOMAIN_NAME)

# Set up the Cloudflare API endpoint and headers
url = f"https://api.cloudflare.com/client/v4/zones/{ZONE_ID}/dns_records"
headers = {
    "Content-Type": "application/json",
    "X-Auth-Email": EMAIL,
    "X-Auth-Key": API_KEY
}

# Set up a connection pool with urllib3
http = urllib3.PoolManager()

# Get the current IP address from an external service
response = http.request("GET", "https://api.ipify.org")
ip_address = response.data.decode("utf-8")

# Loop through the DNS records and update them
for record in DNS_RECORDS:
    # Set up the JSON payload for the DNS record update
    payload = {
        "type": record["type"],
        "name": record["name"],
        "content": record.get("content", ip_address)
    }

    # Check if the record already exists, and update it if it does
    response = http.request("GET", url, headers=headers)
    data = json.loads(response.data)
    for existing_record in data["result"]:
        if existing_record["name"] == record["name"]:
            record_id = existing_record["id"]
            response = http.request("PUT", f"{url}/{record_id}", headers=headers, body=json.dumps(payload))
            print(f"DNS record updated for {record['name']} with IP address {ip_address}")
            break
    else:
        # Create a new DNS record if it doesn't exist
        response = http.request("POST", url, headers=headers, body=json.dumps(payload))
        print(f"DNS record created for {record['name']} with IP address {ip_address}")
```

@tab IPv4/IPv6

```python
import json
import urllib3

# Cloudflare API credentials
API_KEY = "your_api_key"
EMAIL = "your_email_address"

# Domain and DNS records to update
DOMAIN_NAME = "example.com"
DNS_RECORDS = [
    {
        "name": "subdomain1.example.com",
        "type": "A"
    },
    {
        "name": "subdomain2.example.com",
        "type": "AAAA"
    },
    {
        "name": "subdomain3.example.com",
        "type": "CNAME",
        "content": "www.example.com"
    }
]

# Get the Zone ID for the domain
ZONE_ID = get_zone_id(API_KEY, EMAIL, DOMAIN_NAME)

# Set up the Cloudflare API endpoint and headers
url = f"https://api.cloudflare.com/client/v4/zones/{ZONE_ID}/dns_records"
headers = {
    "Content-Type": "application/json",
    "X-Auth-Email": EMAIL,
    "X-Auth-Key": API_KEY
}

# Set up a connection pool with urllib3
http = urllib3.PoolManager()

# Get the current IPv4 and IPv6 addresses from an external service
ipv4_response = http.request("GET", "https://api.ipify.org")
ipv4_address = ipv4_response.data.decode("utf-8")
ipv6_response = http.request("GET", "https://api6.ipify.org")
ipv6_address = ipv6_response.data.decode("utf-8")

# Loop through the DNS records and update them
for record in DNS_RECORDS:
    # Set up the JSON payload for the DNS record update
    payload = {
        "type": record["type"],
        "name": record["name"],
        "content": ipv4_address if record["type"] == "A" else ipv6_address if record["type"] == "AAAA" else record.get("content")
    }

    # Check if the record already exists, and update it if it does
    response = http.request("GET", url, headers=headers)
    data = json.loads(response.data)
    for existing_record in data["result"]:
        if existing_record["name"] == record["name"]:
            record_id = existing_record["id"]
            response = http.request("PUT", f"{url}/{record_id}", headers=headers, body=json.dumps(payload))
            print(f"DNS record updated for {record['name']} with IP address {payload['content']}")
            break
    else:
        # Create a new DNS record if it doesn't exist
        response = http.request("POST", url, headers=headers, body=json.dumps(payload))
        print(f"DNS record created for {record['name']} with IP address {payload['content']}")
```

:::

Note that this example assumes that all of the DNS records being updated belong to the same domain and have the same API credentials. If you need to update DNS records for multiple domains or with different API credentials, you should modify the script accordingly.

### Using package `cloudflare-ddns`

It is an IPv6-only example.

```python {21}
from cloudflare_ddns import CloudFlare
import urllib3

with open('./currentip.txt', 'r') as f:
    ipv6_prev = f.read()

ipv6 = urllib3.PoolManager().request(method='GET', url='http://ipv6.icanhazip.com').data.decode().rstrip()

print(ipv6)

if (ipv6!=ipv6_prev):
    with open('/home/nemo/ddns/currentip.txt', 'w') as f:
        f.write(ipv6)

    cf = CloudFlare(
        email='user@hostname.com',
        api_key='Global_API_Key',
        domain='example.com')
    subdomains = ['', 'foo.', 'bar.']
    for site in subdomains:
        cf.create_or_update_record('AAAA', site+'example.com', ipv6)
    print('Update DNS records success.\n')
else:
    print('Needn\'t to update DNS records.\n')
```

## Scheduled task

You can use the `crontab` utility in Linux to schedule the script to run every 10 minutes. Here's how to set it up:

1. Open the crontab editor by running the following command in your terminal: `crontab -e`
2. If this is the first time you are using crontab, you may be prompted to choose an editor. Select your preferred editor, such as `nano` or `vim`.
3. In the editor, add a new line to the bottom of the file with the following format:<br>
   `*/10 * * * * /path/to/python /path/to/ddns.py`.<br>
   Replace `/path/to/python` with the path to your Python executable (which you can find by running `which python` in your terminal), and /path/to/script.py with the path to your Python script.
4. Save and exit the editor.
5. The `*/10 * * * *` part of the line is the cron schedule expression, which specifies the schedule for the script to run. This expression means "run the command every 10 minutes, at any hour, any day of the month, any month, and any day of the week."

Once you save the crontab file, the script should run every 10 minutes as specified in the schedule expression. You can check the output of the script by looking at the standard output and error logs in the crontab log file, which is usually located at `/var/log/syslog`.
