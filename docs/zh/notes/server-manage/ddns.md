---
icon: note
date: 2023-02-22

tag:
    - 网络
---

# 动态更新域名解析地址 - 以 Cloudflare 为例

<decl aigc=true />

## 引言

众所周知，普通加用宽带获取固定公网 IP 极其困难，但目前基本都下发了 IPv6 地址。而获取到的 IPv6 地址并非固定，因此需要定期检查并更新。

> 传统上，当你连接到互联网时，你的互联网服务提供商（ISP）会为你分配一个独特的IP地址。这个IP地址被用来识别你在互联网上的设备。然而，在某些情况下，这个IP地址可以改变，特别是如果你使用的是动态IP地址。如果你在你的设备上运行需要静态IP地址的服务，如网络服务器，这可能会导致问题。
>
> DDNS通过提供一种将域名与你的IP地址联系起来的方法来解决这个问题。当你的IP地址改变时，DDNS服务会用新的IP地址更新你的域名的DNS记录。这允许你继续使用相同的域名来访问你的设备，即使IP地址发生变化。
>
> &emsp;&emsp; —— ChatGPT

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
