# <%= appnameSlugified %>

> Short Project Description

## force-dev-tool
Defining some remote environments

```console
$ force-dev-tool remote add mydev user@example.com.mydev passToken --default
$ force-dev-tool remote add build user@example.com.build passToken
```

Retrieving metadata from the default environment

```console
$ force-dev-tool retrieve
```

Running the a validate test deployment against the build environment

```console
$ force-dev-tool validateTest build
```

For more subcommands see `force-dev-tool -h`.

## Ant tasks
The following environment variables are required

* SFDC_USERNAME
* SFDC_PASSWORD (including Security Token)
* SFDC_SERVER_URL (e.g. `https://login.salesforce.com` or `https://test.salesforce.com`)

```console
$ cp .env.example .env # and adjust the values
```

Running with defaults from environment variables stored in `.env`:

```console
$ ant retrieve
$ ant validate
$ ant deploy
$ ant undeploy
```

Or override variables:

```console
$ SFDC_SERVER_URL="https://test.salesforce.com" ant retrieve
```
