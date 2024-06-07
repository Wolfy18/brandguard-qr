# BrandGuard QR

## Revolutionize Product Identification
Generate dynamic product identification codes on-demand, effectively replacing and enhancing traditional GTIN/UPC usage backed by Cardano Blockchain and IPFS Network, ensuring a fully decentralized and secure system.

### On-Demand Product Code Generation:
- Enjoy the benefits of a fully decentralized system, ensuring enhanced security and transparency.
- Seamless integration with Bakrypt’s Woocommerce Plug-In for a user-friendly and swift implementation.
- Generate product codes as needed, eliminating the need for predetermined codes and providing flexibility for various scenarios.
- Significantly lower costs compared to traditional methods, with no annual renewals required.
- Data is stored on a public, immutable, and auditable blockchain, instilling confidence in data integrity.

### Enriched Customer Engagement:
- Elevate customer experience by providing additional product information through the generated identification codes.
- Strengthen brand engagement by offering customers a deeper understanding of the product's unique features, benefits, and origin.

### Blockchain-Enabled Anti-Counterfeit Certification:
- Leverage cutting-edge Blockchain Technology for a failsafe Proof of Authenticity through a Certificate of Origin.
- Ensure the legitimacy of your products by certifying them on the blockchain, safeguarding against counterfeiting.

By seamlessly integrating BrandGuard QR into your WooCommerce platform, you not only enhance the security and authenticity of your products but also create a more engaging and informative shopping experience for your customers. Moreover, BrandGuard QR serves as a robust substitute for traditional UPC codes, offering a dynamic and decentralized solution that adapts to your evolving business needs. Elevate your product identification and traceability while providing customers with a cutting-edge shopping experience.

## How does it work? 
With this plugin, you can easily mint your existing or new products into collections of NFTs or Fungible tokens with just a few clicks. The system will automatically pick up metadata from your products and generate a valid JSON structure. Bakrypt’s API will mint the object as a Cardano native token according to your preferences. Once the transaction is confirmed, the fingerprint of the minted NFT is linked to the product in your store. You can also create QR codes of the fingerprint! Go to your products list, select your minted products and select “Create QR Codes” from the bulk actions dropdown.

The plugin also has the ability to upload images and documents into IPFS using Bakrypt's IPFS node. Product thumbnail images will automatically be picked as the cover image for NFTs, and these will be uploaded at the time of minting. Once the transaction has been submitted, Bakrypt will generate a transaction with an estimated cost and a deposit address. Once payment is confirmed on the deposit address, Bakrypt will go ahead and mint the tokens in the Cardano blockchain. Following the minting process, any remaining tokens (ADA) and assets will be sent back to the sender's address. Refunds are offered for _non-confirmed_ transactions. It's important to note that Bakrypt's convenience fees are _non-refundable_ for transactions that have been confirmed.

The plugin implements WordPress native cron tasks; the plugin will automatically pull asset data (every 3 minutes until the transaction is confirmed or canceled), into your WordPress store and update your store products. The metadata includes the transaction's submitted JSON metadata as seen in the blockchain, policyId, fingerprint, and status. This metadata is used in several places in WordPress, such as printing the fingerprint of a minted asset in the order's email that the customer receives, which improves the traceability of the product and increases trust in the store.

Learn more 🚀 -> https://bakrypt.readme.io/reference/blockchain-tokenization-extension-for-woocommerce

## Shortcodes

[ bak_asset_tracking ]

Use the Asset Tracking shortcode anywhere in your website to include a public form that verifies an asset fingerprint with an existing product in your store.

## Register with Bakrypt.io

We use Bakrypt's API to conveniently interact with the blockchain. Therefore, it's required to create an account in our platform.

- Create an account for mainnet:
    - [Mainnet Bakrypt API](https://bakrypt.io/account/login/)
    - [Remember to set your password](https://bakrypt.io/account/password_reset/)

- Create an account for testnet.
    - [Testnet Bakrypt API](https://testnet.bakrypt.io/account/login/)
    - [Remember to set your password](https://testnet.bakrypt.io/account/password_reset/)

## Demo

We've created a demo store with custom permissions so that you can try the plugin without having to install a new instance. Managers are allowed to view and edit products. The demo store is available at https://wp.bakrypt.io, and you can log in with the following credentials:

Login:
https://wp.bakrypt.io/wp-admin

Username: manager
Password: manager

Try it today and see the difference it can make for your business! Feel free to create your own tokens!

## Development

https://github.com/nvm-sh/nvm

Node v16.20.0 is recommended.

To get started, run the following commands:

```text
nvm use 16

npm install
npm start

composer install
```

### Non-Fungible Tokens as a supply chain solution.

Non-fungible tokens (NFTs) are digital assets that represent ownership of a unique item or concept. They are stored on a blockchain and can be bought, sold, and traded like any other asset.

One potential use case for NFTs within a supply chain is to track the ownership and movement of goods as they pass through various stages of production, distribution, and sale. For example, an NFT could be created for each batch of raw materials that enter a manufacturing facility, and then updated with information about where those materials were used and what products they were used to create. This could help companies track the origin and history of their products, and make it easier to trace them back to their source in the event of a recall or other issue.

NFTs could also be used to verify the authenticity of products, by linking them to a unique digital asset that represents the product's provenance. This could be particularly useful for high-value items such as luxury goods or art, where counterfeiting is a concern.

Overall, the use of NFTs in a supply chain could help companies improve transparency, traceability, and authenticity, which could in turn enhance customer trust and loyalty.

## Cardano Blockchain

Cardano is a decentralized public blockchain and cryptocurrency project that is focused on providing a secure and scalable platform for the creation and use of non-fungible tokens (NFTs).

## Bakrypt Documentation
- [Getting started with our API](https://bakrypt.readme.io/reference/getting-started-with-your-api)
- [Swagger Environment](https://bakrypt.io/docs/)

## Installation

**Make sure WooCommerce is also installed and activated**

1. In your WordPress dashboard, choose Plugins > Add new.
2. Search for our plugin with the search bar in the top right corner.
3. After finding the plugin in the results, click Install Now. You can also click the plugin name to view more details about it.
4. To use the plugin, you'll need to activate it. When the installation is finished (this usually takes a couple of seconds), click Activate.

**WooCommerce Blockchain Settings**

1. In your WooCommerce Settings, find the "Blockchain" tab to setup your credentials.
2. Set your Client ID, Client Secret, Username and Password for the Bakrypt's account.
3. Save Changes!

_Testnet Credentials (Optional):_ 4. Set your Client ID, Client Secret, Username and Password for the Bakrypt's _testnet_ account. 5. Activate the "testnet" checkbox. This will send all requests towards the testnet network. 6. Save Changes!

## Frequently Asked Questions

# Is it easy to use?

Using a WordPress plugin to mint NFTs can make the process of creating and managing NFTs more accessible to users who may not have technical expertise in blockchain or coding.

# Can I integrate it to my existing shop?

This plugin allows users to mint and manage NFTs within their existing WordPress website, rather than having to set up a separate platform or interface. This can be more convenient for users who already have a presence on WordPress.

# Is this solution scalable?

WooCommerce is a scalable platform that can handle a large volume of traffic and transactions, making it suitable for stores of all sizes.

## Screenshots

1. Blockchain Settings Section.
2. Product List filtered by tokenized products.
3. Product Tokenization Minting process.
4. Product Tokenization Invoice.
5. Product Tokenization Invoice Status.
6. Cart with tokenized product. It includes the asset fingerprint.
7. Order view that includes tokenized products. It includes asset fingerprints for each product.
8. Email view that includes a tokenized product.
9. Tokenized Product View Blockchain Section
10. New Product View Blockchain Section
11. Mint products in bulks from the product list view
12. Bakrypt launchpad view with multiple assets/products
13. Asset Tracking page sample. This page uses the shortcode [bak_asset_tracking]
14. Found asset using the asset tracker
15. Blockchain tab in the product detail page
16. Asset Tracking shortcode in post edit view

