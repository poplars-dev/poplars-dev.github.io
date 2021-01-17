---
layout: customization
order: 5
name: Address Validation
package_name: poplar_addresses
apps:
    - A/P
    - A/R
    - O/E
    - P/O
views:
    - OE0520
    - OE0692
    - AR0024
    - AR0025
screens:
format: packaged
monthly_cost: 100
#presentation: https://docs.google.com/presentation/d/15o8onqIndm_ARzEtfFufTsxpMcCM2YxC9wkvMXzwmrM/edit?usp=sharing
demo: https://s3.amazonaws.com/dev.expi/content/poplar_addresses/poplar_addresses_demo.mp4
docs_url: https://s3.amazonaws.com/dev.expi/media/public/poplar_addresses-0.0.9/docs/index.html
excerpt_separator: <!--more-->
---

The Address Validation customization interfaces with providers APIs,
including USPS, Canada Post, and Google, to validate addresses not only
for correctness but also deliverability.
<!--more-->

## Business Case

Incorrect addresses can be costly:

- Address correction charges
- Failed deliveries and re-sends
- Time spent correcting

The Address Validation customization checks addresses not only for validity but
also deliverability when orders or other documents are posted, reducing costs
and administrative overhead.

## How does it work?

The customization uses open source Python libraries to connect to the an
address provider API and validates the addresses before objects are inserted or
updated.  

The validation is performed by a script
that can be connected to any view with a complete set of address fields.  If the
provider API cannot be contacted a warning is issued to prompt the user to
verify the address manually.

## Features

Uses APIs to validate addresses in real time:

- Postal Code lookup
- Postal Code correction
- Route Type correction
- Street Number Validity for Street
- Mismatched Province/State/City

### Providers

The following address data providers are supported:

| Provider    | Country | Cost               |
|-------------|---------|--------------------|
| USPS        | US      | Free               |
| Google      | Intl.   | ~0.0015/lookup     |
| Canada Post | CA      | 0.05 - 0.10/lookup |

Notes:
- Google provides only validity, not deliverability, validation.
- All providers require registration and that users manage their own accounts.

## Demo

In the demo video below, we start with the following valid address:

| Jane Doe
| 248 Shawmut Ave
| Boston, MA 02118
| USA·

The following corrections are demonstrated:

1. Addition of Zip-4.
2. Zip Code lookup
3. Zip Code correction
4. Route Type correction
5. Combination Route Type and Zip Code correction.
6. Invalid Number for Street
7. Mismatched State

<video width="640" controls>
  <source src="https://s3.amazonaws.com/dev.expi/content/poplar_addresses/poplar_addresses_demo.mp4" type="video/mp4">
  Your browser doesn't support the video tag.
</video>

{% include pricing.html %} 

### Example TCO Calculations

USPS Integration (US):

 - Customization Costs: $150/month
 - Provider Cost: $0/lookup
 - Total Annual Costs: $1800

Google Integration (Intl):

 - Customization Costs: $150/month
 - Provider Cost: $0.0015/lookup
 - Annual Costs:
    - 1000 lookups/month: $1.50
    - Total: $1818

Canada Post Integration (CA):

 - Customization Costs: $150/month
 - Provider Cost: $0.10/lookup
 - Annual Costs:
    - 1000 lookups/month: $100
    - Total: $3000

### Return on Investment

The potential ROI depends on shipping frequency, destinations,
and carriers.  

Taking as an example UPS, the following fees may be applied to shipments with
invalid addresses:

- Address Correction Fee: $15.50/package
- Undeliverable International Shipment: $10 + return shipping costs

Consider a customer in the following situation:

- Shipments per day: 100
- Address Error Rate: 1%

The return on investment can be found in the costs not paid, as well as the 
decrease in admin overhead and improved customer satisfaction.

- Annual Shipments: 36500  
- Annual Errors: 365  

Cost of errors:  

- Address Correction: $5657.50  
- Return Shipping Costs: ?  
- Admin Overhead: ?  

```
Annual ROI = $5657.50 - $1800 = 3857.50  
           = 3857.50 / 1800 = 214%
```
