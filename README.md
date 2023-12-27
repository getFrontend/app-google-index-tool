# About

This useful tool will help you quickly index your site's page listings without having to add each url manually through the [Google Search Console](https://search.google.com/search-console) interface.

![](https://github.com/getFrontend/app-google-index-tool/blob/main/app-google-index-tool_main.png?raw=true)

## How to use it?

1) First download and unzip this repository: <>Code ➡ Download ZIP.

2) Make sure you have [Node.JS](https://nodejs.org/ "Node.JS") installed.

3) This tool uses Indexing API in [Google Cloud Platform](https://console.cloud.google.com/ "Google Cloud Platform"), that's why the official instructions will help you to set it up: https://developers.google.com/search/apis/indexing-api/v3/prereqs.

Once you have access to Indexing API you'll be able to download a public/private key pair JSON file, this contains all of your credentials and should be saved to **"service_account.json"**.

4) Then you need to verify site ownership in Search Console to submit URLs for indexing.

In this step, you'll verify that you have control over your web property.

To verify ownership of your site you'll need to add your service account email address (see **service_account.json** - client_email) and add it as an owner ("delegated") of the web property in [Search Console](https://search.google.com/search-console "Search Console").

5) To complete the verification:

* Go to [Google Webmaster Central](https://www.google.com/webmasters/verification/home)
* Click your verified property.
* Scroll down and click 'Add an owner'.
* Add your service account email address as an owner to the property.

6) Add a list of site pages to the **urls.txt** file (each new page on a new line).

Example:

![](https://github.com/getFrontend/app-google-index-tool/blob/main/app-google-index-tool_urls.png?raw=true)

7) Open a terminal (e.g. **Powershell**) and run the script:

`node index.js`

8) Congratulations, if you have done everything correctly and correctly specified all the fields in the **service_account.json**, you will see a message in the console that the status is 200 and the page has been added.

## Google API Standard Quotas

* No more than **100 URLs** per request batch.

* Max **200 URLs** per day.

## Libraries used in development

* [Googleapis](https://www.npmjs.com/package/googleapis "Googleapis")

Google APIs Node.js Client. Support for authorization and authentication with OAuth 2.0, API Keys and JWT tokens is included.

* [Request](https://www.npmjs.com/package/request "Request")

But now, this package has been deprecated. For more information about why request is deprecated and possible alternatives refer to this [issue](https://github.com/request/request/issues/3142 "issue").

### Optional

Needs an import assertion of type JSON:

    import key from './service_account.json' assert {
      type: 'json',
      integrity: 'sha384-ABC123'
    };